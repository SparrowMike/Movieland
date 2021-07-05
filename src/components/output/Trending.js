import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import { Collapse } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import clsx from "clsx";
import { CardContent } from "@material-ui/core";

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

  expand: {
    transform: "rotate(deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(0deg)",
  },

  gridList: {
    height: "100vh",
    width: 500,
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
  console.log("search props", props);
  const [expanded, setExpanded] = React.useState(false);

  const classes = useStyles();

  const getYear = (releaseDate) => {
    return releaseDate.slice(0, 4);
  };

  const showOverview = (e) => {
    console.log("Overview:", e.overview);
  };

  const handleExpandClick = (e) => {
    setExpanded(!expanded);
    console.log("Overview:", e.overview);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        {props.data.map((film, index) => (
          <Grid item xs={4} key={index}>
            <GridListTile key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w500${film.backdrop_path}`}
                // src={`https://image.tmdb.org/t/p/w500${film.known_for[index].backdrop_path)}`}
                alt={film.title ? film.title : film.name}
              />
              <GridListTileBar
                className={classes.card}
                title={film.title ? film.title : film.name}
                subtitle={
                  <span>
                    Release:{" "}
                    {getYear(
                      film.release_date
                        ? film.release_date
                        : film.first_air_date
                    )}
                  </span>
                }
                actionIcon={
                  <IconButton
                    className={clsx(classes.expand, {
                      [classes.expandOpen]: expanded,
                    })}
                    onClick={() => handleExpandClick(film)}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <InfoIcon />
                  </IconButton>
                }
              />
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>{film.overview}</Typography>
                </CardContent>
              </Collapse>
            </GridListTile>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
//!=========================================
