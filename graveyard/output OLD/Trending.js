import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Grid from "@material-ui/core/Grid";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { GridListTile } from "@material-ui/core";
import ReactPlayer from "react-player";
import Dialog from "@material-ui/core/Dialog";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "auto -10",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    // overflow: "hidden",
    // backgroundColor: theme.palette.background.default,
    // padding: "10px",
    listStyle: "none",
    background: "#000",
  },
  card: {
    background: "#000000",
    contain: "content",
    color: "white",
    "&:hover": {
      background: "#9d0208",
    },
  },
  media: {
    height: 0,
    margin: 5,
    paddingTop: "56.25%", // 16:9
    // boxShadow: "0 0 5px 5px black inset",
    "&:hover": {
      // boxShadow: "0 0 1px 1px #9d0208 inset",
      boxShadow: "0 0.5em 0.5em -0.4em salmon",
      transform: "translateY(-0.15em)",
      cursor: "pointer",
    },
  },
  expand: {
    transform: "rotate(deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

export default function Trending(props) {
  let key = process.env.REACT_APP_API_KEY;

  console.log(props.data[0].media_type);

  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = useState(false);
  const [data, setData] = useState();
  const [trailer, setTrailer] = useState(null);
  const [type, setType] = useState(null);
  
  const URL = `https://api.themoviedb.org/3/${type}/${trailer}/videos?api_key=${key}&language=en-US`;
  useEffect(() => {
    fetch(URL)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Bad Response from Server");
      })
      .then((data) => {
        setData(data.results[0].key);
        console.log(data.results[0].key);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [URL]);

  const getYear = (releaseDate) => {
    if (releaseDate) {
      return releaseDate.slice(0, 4);
    } else {
      return releaseDate;
    }
  };

  const handleExpandClick = (e) => {
    setExpanded(!expanded);
    console.log(e);
  };

  const handleOpen = (e) => {
    setOpen(true);
    setTrailer(e.id);
    setType(e.media_type);
 
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid
      container
      spacing={0}
      direction="row"
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh" }}
      className={classes.root}
    >
      {props.data.map((film, index) => (
        <Grid item xs={4} key={index}>
          <GridListTile className={classes.card}>
            <CardHeader
              title={film.title ? film.title : film.name}
              subheader={
                <Typography color="primary" paragraph>
                  Release:{" "}
                  {getYear(
                    film.release_date ? film.release_date : film.first_air_date
                  )}
                </Typography>
              }
            />
            <CardMedia
              className={classes.media}
              image={`https://image.tmdb.org/t/p/w500${film.backdrop_path}`}
              title={film.title ? film.title : film.name}
              onClick={() => handleOpen(film)}
            />

            <CardActions disableSpacing>
              <IconButton color="primary" aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton color="primary" aria-label="share">
                <ShareIcon />
              </IconButton>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                color="primary"
                onClick={() => handleExpandClick(film.id)}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} id={film.id} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography variant="h6">Overview: </Typography>
                <Typography color="primary" paragraph>
                  {film.overview}
                </Typography>
                <Typography variant="h6">Rating: </Typography>
                <Typography color="primary" paragraph>
                  {film.vote_average} out of {film.vote_count} votes.
                </Typography>
              </CardContent>
            </Collapse>
          </GridListTile>
        </Grid>
      ))}
      <Dialog open={open} maxWidth="lg" onClose={handleClose}>
        <ReactPlayer url={`/www.youtube.com/watch?v=${data}`} playing />
      </Dialog>
    </Grid>
  );
}
