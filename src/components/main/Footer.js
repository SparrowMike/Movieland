import React from "react";
// import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, useScrollTrigger, Slide } from "@material-ui/core";

function Copyright() {
  return (
    <Typography variant="body2" color="primary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://developers.themoviedb.org/3">
        TMDb
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction={"up"} in={!trigger}>
      {children}
    </Slide>
  );
}

const Footer = (props) => {
  const useStyles = makeStyles((theme) => ({
    footer: {
      backgroundColor: "#000000",
    },
  }));

  const classes = useStyles();
  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <footer className={classes.footer}>
          <Typography
            variant="subtitle1"
            align="center"
            color="primary"
            component="p"
          >
            This product uses the TMDb API but is not endorsed or certified by
            TMDb.{" "}
          </Typography>
          <Copyright variant="p" color="primary" />
        </footer>
      </HideOnScroll>
    </React.Fragment>
  );
};

export default Footer;
