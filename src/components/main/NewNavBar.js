import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  useMediaQuery,
  useScrollTrigger,
  Slide,
  Menu,
  MenuItem,
} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useState } from "react";
import { TextField } from "@material-ui/core";
import { useHistory } from "react-router";

import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";

import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  search: {
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

  navBar: {
    backgroundColor: "black",
    paddingTop: "10px",
    paddingbottom: "10px",
  },

  menuButton: {
    marginRight: theme.spacing(1),
  },
}));

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  console.log(props);

  return (
    <Slide appear={false} direction={"down"} in={!trigger}>
      {children}
    </Slide>
  );
}

export default function SimpleMenu(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [title, setTitle] = useState(" ");
  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/search/${title}`);
    e.target.reset();
  };

  return (
    <div className="navBar">
      <React.Fragment>
        <CssBaseline />
        <HideOnScroll {...props}>
          <AppBar>
            <Toolbar className={classes.navBar}>
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
              {!isMobile ? (
                <>
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
                        className: classes.search,
                      }}
                    />
                  </form>
                </>
              ) : (
                <>
                  <CssBaseline />
                  <IconButton
                    color="primary"
                    className={classes.menuButton}
                    edge="start"
                    aria-label="menu"
                    onClick={handleClick}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem component={RouterLink} to="/">
                      <Typography variant="h6"> Home </Typography>
                    </MenuItem>
                    <MenuItem component={RouterLink} to="/movies">
                      <Typography variant="h6"> Movies </Typography>
                    </MenuItem>
                    <MenuItem component={RouterLink} to="/tvshows">
                      <Typography variant="h6"> TV-Shows</Typography>
                    </MenuItem>{" "}
                    <MenuItem component={RouterLink} to="/login">
                      <Typography variant="h6"> Login </Typography>
                    </MenuItem>{" "}
                  </Menu>
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
                    />
                  </form>
                </>
              )}
            </Toolbar>
          </AppBar>
        </HideOnScroll>
      </React.Fragment>
    </div>
  );
}
