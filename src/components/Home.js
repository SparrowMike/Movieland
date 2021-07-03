import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(15, 0, 0),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardContent: {
    flexGrow: 1,
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className="home">
      <React.Fragment>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Welcome to MovieLand!
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              You are two clicks away to find trending Movies and TV Series!
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button size="large" variant="contained" color="secondary">
                    Movies
                  </Button>
                </Grid>
                <Grid item>
                  <Button size="large" variant="outlined" color="secondary">
                    TV Series
                  </Button>
                </Grid>
              </Grid>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button size="medium" variant="outlined" color="secondary">
                    Daily
                  </Button>
                </Grid>
                <Grid item>
                  <Button size="medium" variant="contained" color="secondary">
                    Weekly
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </React.Fragment>
    </div>
  );
}
