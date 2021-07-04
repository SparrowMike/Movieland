import React from "react";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(8, 0, 8),
  },

  textShadow: {
    textShadow: "0px 2px 2px rgba(255, 255, 255, 0.4)",
  },

  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));

export default function Home() {
  const classes = useStyles();
  const [value, setValue] = useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log("new value", newValue);
    console.log("event", event);
  };

  return (
    <React.Fragment>
      <div className="home">
        <div className={classes.heroContent}>
          <Container maxWidth="sm" className={classes.textShadow}>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="primary"
              gutterBottom
            >
              Welcome to MovieLand!
            </Typography>
            <Typography variant="h5" align="center" color="primary" paragraph>
              You are two clicks away to find trending Movies and TV Series!
            </Typography>
            <div className={classes.heroButtons}>
              <Tabs
                alignCenter
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
              >
                <Tab label="Movies" color="red" />
                <Tab label="or" disabled />
                <Tab label="TV Series" />
              </Tabs>

              {/* <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button
                    onClick={() => setType(!type)}
                    size="large"
                    variant="contained"
                    color="primary"
                  >
                    Movies
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    onClick={() => setType(!type)}
                    size="large"
                    variant="outlined"
                    color="primary"
                  >
                    TV Series
                  </Button>
                </Grid>
              </Grid>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button
                    onClick={() => setTime(!time)}
                    size="medium"
                    variant="outlined"
                    color="primary"
                  >
                    Daily
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    onClick={() => setTime(!time)}
                    size="medium"
                    variant="contained"
                    color="primary"
                  >
                    Weekly
                  </Button>
                </Grid>
              </Grid> */}
            </div>
          </Container>
        </div>
      </div>
    </React.Fragment>
  );
}
