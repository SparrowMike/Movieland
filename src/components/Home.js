import React from "react";
import { useState } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Button } from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const useStyles = makeStyles((theme) => ({
  main: {
    padding: theme.spacing(8, 0, 8),
  },

  textShadow: {
    textShadow: "1px 2px 2px rgba(255, 255, 255, 0.4)",
    margin: "auto",
  },

  selection: {
    textColor: theme.palette.error.main,
    // textShadow: "10px 12px 12px rgba(255, 255, 255, 0.4)",
  },
}));

export default function Home() {
  const classes = useStyles();
  const [type, setType] = useState(0);
  const [date, setDate] = useState(0);

  const handleType = (event, newValue) => {
    setType(newValue);
    console.log(newValue);
    // console.log("event", event);
  };
  const handleDate = (event, newValue) => {
    setDate(newValue);
    console.log(newValue);
  };

  return (
    <React.Fragment>
      <div className="home">
        <div className={classes.main}>
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
            <Tabs
              value={type}
              indicatorColor="primary"
              textColor="primary"
              onChange={handleType}
              centered
            >
              <Tab label="Movies" />
              <Tab label="or" disabled />
              <Tab label="TV Series" />
            </Tabs>
            <Tabs
              className={classes.selection}
              value={date}
              indicatorColor="primary"
              textColor="primary"
              onChange={handleDate}
              centered
            >
              <Tab label="Daily" />
              <Tab label="Weekly" />
            </Tabs>
            <Button
              color="primary"
              disableElevation
              onClick={() => console.log("smurfs")}
            >
              Show Trending!
            </Button>
          </Container>
        </div>
      </div>
    </React.Fragment>
  );
}
