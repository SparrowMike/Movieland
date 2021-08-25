import React from "react";
import { useState } from "react";
// import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import MoviePage from "./../output/MoviePage";
import TvPage from "./../output/TvPage";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./slick.css";

// const useStyles = makeStyles((theme) => ({
//   mainFeaturedPost: {
//     position: "relative",
//     backgroundColor: theme.palette.grey[800],
//     color: theme.palette.common.white,
//     marginBottom: theme.spacing(4),
// backgroundImage: "url(https://source.unsplash.com/random)",
//     backgroundSize: "cover",
//     height: "350px",
//     backgroundRepeat: "no-repeat",
//     backgroundPosition: "center",
//   },
//   overlay: {
//     position: "absolute",
//     top: 0,
//     bottom: 0,
//     right: 0,
//     left: 0,
//     backgroundColor: "rgba(0,0,0,.3)",
//   },
//   mainFeaturedPostContent: {
//     position: "relative",
//     padding: theme.spacing(3),
//     [theme.breakpoints.up("md")]: {
//       padding: theme.spacing(6),
//       paddingRight: 0,
//     },
//   },
// }));

const Home = () => {
  // const classes = useStyles();
  const [type, setType] = useState("movie");

  const handleChange = (e, newValue) => {
    setType(newValue);
    console.log(newValue);
  };

  // console.log(data.results[0]);

  return (
    <div style={{ padding: "75px" }}>
      <div className="tabs">
        <h3 style={{ textAlign: "center", color: "#f6f6f6" }}>
          Pick between Movies or Tv-shows to see what's trending!
        </h3>
        <Tabs
          value={type}
          style={{ color: "white" }}
          TabIndicatorProps={{
            style: {
              backgroundColor: "white",
            },
          }}
          onChange={(e, newValue) => handleChange(e, newValue)}
          centered
        >
          <Tab label="Movies" value={"movie"} />
          <Tab label="TV Series" value={"tv"} />
        </Tabs>
      </div>
      {type === "movie" ? <MoviePage /> : <TvPage />}
    </div>
  );
};

export default Home;
