import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { GridListTile } from "@material-ui/core";
import DialogContentText from "@material-ui/core/DialogContentText";
import CircularProgress from "@material-ui/core/CircularProgress";
import Modal from "@material-ui/core/Modal";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ReactPlayer from "react-player";
import Rating from "@material-ui/lab/Rating";
import NotAvailable from "../output/NotAvailable";
import InfiniteScroll from "react-infinite-scroll-component";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "80px",
    marginBottom: "80px",
    alignItems: "flex-start",
    listStyle: "none",
  },
  card: {
    padding: "5px",
    background: "#000000",
    contain: "content",
    color: "white",
    "&:hover": {
      background: "#780000",
    },
  },
  media: {
    height: 0,
    margin: 5,
    paddingTop: "56.25%", // 16:9
    transition: ".3s ease-in-out",
    "&:hover": {
      transform: "scale(1.05)",
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
  player: {
    outline: "none",
  },
  loading: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    outline: "none",
  },
}));

export default function Trending({
  data,
  genre,
  dataLength,
  fetchNextPage,
  hasNextPage,
}) {
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
        })
        .catch((error) => {
          console.log(error);
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
    setType(e.media_type ? e.media_type : genre);
  };

  const handleClose = () => {
    setTrailerId(null);
    setTrailerLink(null);
    setOpen(false);
  };

  console.log(dataLength);

  return dataLength === 0 ? (
    <NotAvailable />
  ) : (
    <InfiniteScroll
      dataLength={dataLength}
      next={fetchNextPage}
      hasMore={!!hasNextPage}
      loader={
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          style={{ padding: "75px" }}
        >
          {data.pages[0].total_results !== dataLength ? (
            <>
              <Typography variant="h3" color="primary">
                Loading...
              </Typography>
              <CircularProgress color="primary" />
            </>
          ) : (
            <Typography variant="h3" color="primary">
              All up to date!
            </Typography>
          )}
        </Grid>
      }
    >
      <Grid
        container
        spacing={0}
        direction="row"
        alignItems="center"
        justify="center"
        className={classes.root}
      >
        {data.pages.map((data, index) =>
          data.results
            .filter((film) => film.backdrop_path)
            .map((film, index) => (
              <Grid item xs={12} sm={6} md={4} lg={4} xl={3} key={film.id}>
                <GridListTile className={classes.card}>
                  <CardMedia
                    className={classes.media}
                    image={`https://image.tmdb.org/t/p/w500${film.backdrop_path}`}
                    title={film.title ? film.title : film.name}
                    onClick={() => handleOpen(film)}
                  />
                  <CardActions disableSpacing style={{ paddingBottom: 0 }}>
                    <CardHeader
                      style={{ padding: 0, paddingLeft: 9 }}
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
                  <Collapse
                    in={expanded === index}
                    timeout="auto"
                    unmountOnExit
                  >
                    <CardContent style={{ paddingTop: 0 }}>
                      <Typography variant="h6">Overview: </Typography>
                      <Typography color="primary" paragraph>
                        {film.overview}
                      </Typography>
                      <Typography variant="h6">Rating: </Typography>
                      <Rating
                        defaultValue={film.vote_average}
                        max={10}
                        precision={0.1}
                        readOnly
                      />
                    </CardContent>
                  </Collapse>
                </GridListTile>
              </Grid>
            ))
        )}
        <Modal
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
        >
          {trailerLink === null ? (
            <div className={classes.loading}>
              <DialogContentText
                component={"span"}
                color="primary"
                variant="h2"
              >
                Loading...
                <CircularProgress color="primary" />
              </DialogContentText>
            </div>
          ) : (
            <ReactPlayer
              width="60%"
              height="60%"
              className={classes.player}
              url={`/www.youtube.com/watch?v=${trailerLink}`}
              playing
            />
          )}
        </Modal>
      </Grid>
    </InfiniteScroll>
  );
}
