import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";

function Copyright() {
  return (
    <Typography variant="body2" color="primary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://developers.themoviedb.org/3">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Footer = () => {
  const useStyles = makeStyles((theme) => ({
    footer: {
      backgroundColor: "#000000",
      opacity: 0.9,
      padding: theme.spacing(2),
    },
  }));

  const classes = useStyles();
  return (
    <React.Fragment>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" color="primary" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="primary"
          component="p"
        >
          Wah, this is the best footer....EVER!
        </Typography>
        <Copyright variant="p" color="primary" />
      </footer>
    </React.Fragment>
  );
};

export default Footer;
