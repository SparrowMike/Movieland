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
    color: "white",
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },

  appBar: {
    color: "white",
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 2.5),
    color: "white",
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
        position="static"
        color="primary"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Link
            variant="button"
            color="inherit"
            component={RouterLink}
            to="./"
            className={classes.toolbarTitle}
          >
            <Typography
              variant="h6"
              color="inherit"
              noWrap
              className={classes.toolbarTitle}
            >
              Movieland
            </Typography>
          </Link>
          <nav>
            <Link
              variant="button"
              color="textPrimary"
              component={RouterLink}
              to="./movies"
              className={classes.link}
            >
              Movies
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              component={RouterLink}
              to="./tv-show"
              className={classes.link}
            >
              TV-Shows
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              component={RouterLink}
              to="./explore"
              className={classes.link}
            >
              Explore
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              component={RouterLink}
              to="/about"
              className={classes.link}
            >
              About
            </Link>
          </nav>
          <form
            className={classes.form}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <TextField
              onChange={(e) => setTitle(e.target.value)}
              id="outlined-search"
              variant="outlined"
              label="Search field"
              type="search"
              color="secondary"
            />
          </form>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
