import React from "react";
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
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import ReactPlayer from "react-player";

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

    "&:hover": { background: "#9d0208" },
  },
  media: {
    height: 0,
    margin: 5,
    paddingTop: "56.25%", // 16:9
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

  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function MoviesDisplayed(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const getYear = (releaseDate) => {
    if (releaseDate) {
      return releaseDate.slice(0, 4);
    } else {
      return releaseDate;
    }
  };

  const handleExpandClick = (e) => {
    setExpanded(!expanded);
    console.log("Overview:", e.id);
  };

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
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
              onClick={handleOpen}
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
                onClick={() => handleExpandClick(film)}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
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
    </Grid>
  );
}
