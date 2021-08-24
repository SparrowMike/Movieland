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
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  input: {
    color: "white",
  },

  form: {
    color: "white",
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  appBar: {
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
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const [title, setTitle] = useState(" ");

  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/search/${title}`);
    e.target.reset();
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="sticky"
        color="secondary"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Link
            variant="button"
            color="primary"
            component={RouterLink}
            to="/"
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
              to="/movies"
              className={classes.link}
            >
              Movies
            </Link>
            <Link
              variant="button"
              color="primary"
              component={RouterLink}
              to="/tvshows"
              className={classes.link}
            >
              TV-Shows
            </Link>
            <Link
              variant="button"
              color="primary"
              component={RouterLink}
              to="/login"
              className={classes.link}
            >
              Login{" "}
            </Link>
          </nav>
          <form
            className={classes.form}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <TextField
              error
              onChange={(e) => setTitle(e.target.value)}
              id="outlined-search"
              variant="outlined"
              label="Search field"
              type="search"
              InputProps={{
                className: classes.input,
              }}
            />
          </form>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
