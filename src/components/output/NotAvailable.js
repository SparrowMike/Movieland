import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: "black",
    height: "100vh",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}));

export default function LoadingWindow() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container direction="row" justify="center" alignItems="center">
        <Typography variant="h3" color="primary">
          No available information...
        </Typography>
        <CircularProgress color="primary" />
      </Grid>
    </div>
  );
}
