import React from "react";
import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import MoviePage from "./../output/MoviePage";
import TvPage from "./../output/TvPage";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./slick.css";

import ReactPlayer from "react-player";
import CircularProgress from "@material-ui/core/CircularProgress";
import DialogContentText from "@material-ui/core/DialogContentText";
import Modal from "@material-ui/core/Modal";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "50px",
    fontSize: "12px",
    [theme.breakpoints.up("md")]: {
      padding: "80px",
      fontSize: "22px",
    },
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

const Home = () => {
  const classes = useStyles();
  let key = process.env.REACT_APP_API_KEY;
  const [type, setType] = useState("movie");
  const [open, setOpen] = useState(false);
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

  const handleOpen = (e) => {
    setOpen(true);
    setTrailerId(e.id);
    setType(e.media_type ? e.media_type : type);
  };

  const handleClose = () => {
    setTrailerId(null);
    setTrailerLink(null);
    setOpen(false);
  };

  const handleChange = (e, newValue) => {
    setType(newValue);
  };

  return (
    <div className={classes.container}>
      <div className="tabs">
        <h3 style={{ textAlign: "center", color: "#f6f6f6" }}>
          Pick between Movies or Tv-shows to see what's trending!
        </h3>
        <Tabs
          value={type}
          style={{ color: "white" }}
          TabIndicatorProps={{
            style: {
              backgroundColor: "white",
            },
          }}
          onChange={(e, newValue) => handleChange(e, newValue)}
          centered
        >
          <Tab label="Movies" value={"movie"} />
          <Tab label="TV Series" value={"tv"} />
        </Tabs>
      </div>
      {type === "movie" ? (
        <MoviePage handleOpen={handleOpen} />
      ) : (
        <TvPage handleOpen={handleOpen} />
      )}

      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
      >
        {trailerLink === null ? (
          <div className={classes.loading}>
            <DialogContentText component={"span"} color="primary" variant="h2">
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
    </div>
  );
};

export default Home;
