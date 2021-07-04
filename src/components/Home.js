import React from "react";
import { useState } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Button } from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const useStyles = makeStyles((theme) => ({
  textShadow: {
    textShadow: "1px 1px 1px rgba(255, 255, 255, 0.4)",
  },
  button: {
    margin: theme.spacing(3),
  },
  typographyHeader: {
    fontSize: 75,
  },
}));
 
export default function Home() {
  const classes = useStyles();
  const [type, setType] = useState(0);
  const [date, setDate] = useState(0);

  const handleType = (event, newValue) => {
    setType(newValue);
    console.log(newValue);
  };
  const handleDate = (event, newValue) => {
    setDate(newValue);
    console.log(newValue);
  };

  return (
    <React.Fragment>
      <div className="home">
        <Container maxWidth="sm" className={classes.textShadow}>
          <Typography
            className={classes.typographyHeader}
            component="h1"
            variant="h2"
            align="center"
            color="primary"
            gutterBottom
          >
            Welcome to MovieLand!
          </Typography>
          <Typography variant="h5" align="center" color="primary">
            You are three clicks away to find trending Movies and TV Series!
          </Typography>
          <Tabs
            value={type}
            TabIndicatorProps={{
              style: {
                backgroundColor: "lightgrey",
              },
            }}
            textColor="primary"
            onChange={handleType}
            centered
          >
            <Tab label="Movies" />
            <Tab label="or" disabled />
            <Tab label="TV Series" />
          </Tabs>
          <Tabs
            TabIndicatorProps={{
              style: {
                backgroundColor: "lightgrey",
              },
            }}
            value={date}
            textColor="primary"
            onChange={handleDate}
            centered
          >
            <Tab label="Daily" />
            <Tab label="Weekly" />
          </Tabs>
          <Button
            variant="contained"
            className={classes.button}
            color="primary"
            disableElevation
            size="large"
            onClick={() => console.log("submit")}
          >
            Show Trending!
          </Button>
        </Container>
      </div>
    </React.Fragment>
  );
}
