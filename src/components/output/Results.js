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
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogContent from "@material-ui/core/DialogContent";
import CircularProgress from "@material-ui/core/CircularProgress";
// import Backdrop from "@material-ui/core/Backdrop";

import Modal from "@material-ui/core/Modal";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "auto -10",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    listStyle: "none",
    background: "#000",
    minHeight: "1200px",

    alignItems: "flex-start",
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
    "&:hover": {
      // boxShadow: "0 0 1px 1px #9d0208 inset",
      boxShadow: "0 0.6em 0.5em -0.4em salmon",
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
    "&:hover": {
      color: "black",
      backgroundColor: "white",
      boxShadow: "0 0 2px 2px #9d0208 inset",
    },
  },

  expandOpen: {
    transform: "rotate(180deg)",
  },

  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: "100%",
    aspectRatio: "16/9",
  },

  // player: {
  //   outline: 0,
  //   background: "black",
  //   display: "flex",
  //   position: "absolute",
  //   width: "100vw",
  //   height: "30vw",
  //   justifyContent: "center",
  //   alignItems: "center",
  // },

  loading: {
    background: "black",
    display: "flex",
    height: "250px",
    width: "250px",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function Trending(props) {
  let key = process.env.REACT_APP_API_KEY;

  const classes = useStyles();
  const [type, setType] = useState(null);
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(-1);
  const [trailerId, setTrailerId] = useState(null);
  const [trailerLink, setTrailerLink] = useState(null);

  const URL = `https://api.themoviedb.org/3/${type}/${trailerId}/videos?api_key=${key}&language=en-US`;

  useEffect(() => {
    if (trailerId !== null) {
      fetch(URL)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Bad Response from Server");
        })
        .then((data) => {
          setTrailerLink(data.results[0].key);
          // console.log(data.results[0].key);
        })
        .catch((error) => {
          // console.log(error);
        });
    }
  }, [URL, trailerId]);

  const getYear = (releaseDate) => {
    if (releaseDate) {
      return releaseDate.slice(0, 4);
    } else {
      return releaseDate;
    }
  };

  const handleExpandClick = (index) => {
    setExpanded(expanded === index ? -1 : index);
  };

  const handleOpen = (e) => {
    setOpen(true);
    setTrailerId(e.id);
    setType(e.media_type ? e.media_type : props.type);
  };

  const handleClose = () => {
    setTrailerId(null);
    setTrailerLink(null);
    // setTrailerLink(setTrailerId(null));
    setOpen(false);
  };

  return (
    <Grid
      container
      spacing={0}
      direction="row"
      alignItems="center"
      justify="center"
      // style={{ minHeight: "100vh" }}
      className={classes.root}
    >
      {props.data
        .filter((film) => film.backdrop_path)
        .map((film, index) => (
          <Grid item xs={12} sm={6} md={4} lg={4} xl={3} key={index}>
            <GridListTile className={classes.card}>
              <CardHeader
                title={film.title ? film.title : film.name}
                subheader={
                  <Typography color="primary" paragraph>
                    Release:{" "}
                    {getYear(
                      film.release_date
                        ? film.release_date
                        : film.first_air_date
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
                  id={film.id}
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded === index,
                  })}
                  color="primary"
                  onClick={() => handleExpandClick(index)}
                  aria-expanded={expanded === index}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>

              <Collapse in={expanded === index} timeout="auto" unmountOnExit>
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

      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        // BackdropComponent={Backdrop}
        // BackdropProps={{
        //   timeout: 500,
        // }}
      >
        {trailerLink !== null ? (
          <ReactPlayer
            width="70%"
            height="70%"
            className={classes.player}
            url={`/www.youtube.com/watch?v=${trailerLink}`}
            playing
          />
        ) : (
          <DialogContent width="50%" height="50%" className={classes.loading}>
            <DialogContentText component={"span"} color="primary" variant="h2">
              Not available...
              <CircularProgress color="primary" />
            </DialogContentText>
          </DialogContent>
        )}
      </Modal>
    </Grid>
  );
}
