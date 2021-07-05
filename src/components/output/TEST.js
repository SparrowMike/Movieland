import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Grid from "@material-ui/core/Grid";

import Card from "@material-ui/core/Card";
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
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
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
}));

export default function TEST(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const getYear = (releaseDate) => {
    return releaseDate.slice(0, 4);
  };

  const handleExpandClick = (e) => {
    setExpanded(!expanded);
    console.log("Overview:", e.overview);
  };

  return (
    <Box display="flex">
      <Card className={classes.root}>
        {props.data.map((film, index) => (
          <Box flexDirection="row" key={index}>
            <CardHeader
              title={film.title ? film.title : film.name}
              subheader={
                <span>
                  Release:{" "}
                  {getYear(
                    film.release_date ? film.release_date : film.first_air_date
                  )}
                </span>
              }
            />
            <CardMedia
              className={classes.media}
              image={`https://image.tmdb.org/t/p/w500${film.backdrop_path}`}
              title={film.title ? film.title : film.name}
            />
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={() => handleExpandClick(film)}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>{film.overview}</Typography>
              </CardContent>
            </Collapse>
          </Box>
        ))}
      </Card>
    </Box>
  );
}
