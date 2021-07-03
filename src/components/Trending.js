import React from "react";
// import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.default,
    listStyle: "none",
    margin: "10px",
  },
  gridList: {
    width: 500,
    height: 280,
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
    "&:hover": {
      background: "grey",
    },
  },
}));

export default function Trending(props) {
  // const [overview, setOverview] = useState(false);

  const classes = useStyles();

  const getYear = (releaseDate) => {
    return releaseDate.slice(0, 4);
  };

  const showOverview = (e) => {
    console.log("Overview:", e.overview);
  };

  return (
    <div className={classes.root}>
      <Typography variant="h2">MOVIES TRENDING TODAY!</Typography>
      <Grid container spacing={1}>
        {props.data.map((film, index) => (
          <Grid item xs={4} key={index}>
            <GridListTile key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w500${film.backdrop_path}`}
                alt={film.title ? film.title : film.name}
              />
              <GridListTileBar
                title={film.title ? film.title : film.name}
                subtitle={
                  <span>
                    Release:
                    {getYear(
                      film.release_date
                        ? film.release_date
                        : film.first_air_date
                    )}
                  </span>
                }
                actionIcon={
                  <IconButton
                    onClick={() => showOverview(film)}
                    aria-label={`info about ${film.title}`}
                    className={classes.icon}
                  >
                    <InfoIcon />
                  </IconButton>
                }
              />
            </GridListTile>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
//
