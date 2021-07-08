import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: "auto",
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

// const year = new Date(film.release_date);

const getYear = (releaseDate) => {
  return releaseDate.slice(0, 4);
};

export default function TestTrending(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile
          key="Subheader"
          cols={2}
          style={{ height: "auto" }}
        ></GridListTile>
        {props.data.map((film, index) => (
          <GridListTile key={index}>
            <img
              src={`https://image.tmdb.org/t/p/w500${film.backdrop_path}`}
              alt={film.title}
            />
            <GridListTileBar
              title={film.title}
              subtitle={<span>Release: {getYear(film.release_date)}</span>}
              actionIcon={
                <IconButton
                  aria-label={`info about ${film.title}`}
                  className={classes.icon}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
