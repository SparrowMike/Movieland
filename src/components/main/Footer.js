import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

function Copyright() {
  return (
    <Typography variant="body2" color="primary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Footer = () => {
  const useStyles = makeStyles((theme) => ({
    "@global": {
      //   ul: {
      //     margin: 0,
      //     padding: 0,
      //     listStyle: "none",
    },
    // },
    footer: {
      // color: "white",
      //   borderTop: `1px solid ${theme.palette.divider}`,
      //   marginTop: theme.spacing(8),
      //   paddingTop: theme.spacing(3),
      //   paddingBottom: theme.spacing(3),
      //   [theme.breakpoints.up("sm")]: {
      //     paddingTop: theme.spacing(6),
      //     paddingBottom: theme.spacing(6),
    },
    // },
    footer: {
      // backgroundColor: theme.palette.background.paper,
      backgroundColor: "#000000",
      opacity: 0.8,

      padding: theme.spacing(2),
    },
  }));

  const footers = [
    {
      title: "Company",
      description: ["Team", "Contact us"],
    },
    {
      title: "Features",
      description: ["Cool stuff", "Random feature"],
    },
    {
      title: "Resources",
      description: ["Resource", "Resource name"],
    },
    {
      title: "Legal",
      description: ["Privacy policy", "Terms of use"],
    },
  ];

  const classes = useStyles();
  return (
    <React.Fragment>
      {/* <Container maxWidth="md" component="footer" className={classes.footer}>
        <Grid container spacing={4} justify="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="textSecondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container> */}
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
