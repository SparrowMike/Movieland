import { useState } from "react";
import React from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  form: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    opacity: 0.8,
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 2.5),
  },
}));

export default function Header() {
  const classes = useStyles();
  const [title, setTitle] = useState(" ");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title) {
      console.log(title);
    }
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="secondary"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Link
            variant="button"
            color="primary"
            component={RouterLink}
            to="./"
            className={classes.toolbarTitle}
          >
            <Typography
              variant="h6"
              color="primary"
              noWrap
              className={classes.toolbarTitle}
            >
              Movieland
            </Typography>
          </Link>
          <nav>
            <Link
              variant="button"
              color="primary"
              component={RouterLink}
              to="./movies"
              className={classes.link}
            >
              Movies
            </Link>
            <Link
              variant="button"
              color="primary"
              component={RouterLink}
              to="./tv-show"
              className={classes.link}
            >
              TV-Shows
            </Link>
            <Link
              variant="button"
              color="primary"
              component={RouterLink}
              to="/explore"
              className={classes.link}
            >
              Explore
            </Link>
          </nav>
          <form
            className={classes.form}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <TextField
              color="primary"
              onChange={(e) => setTitle(e.target.value)}
              id="outlined-search"
              variant="outlined"
              label="Search field"
              type="search"
            />
          </form>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
