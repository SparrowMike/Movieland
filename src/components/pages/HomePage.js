import Slider from "react-slick";
import { useState } from "react";
import { useQuery } from "react-query";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Rating from "@material-ui/lab/Rating";

import { makeStyles } from "@material-ui/core/styles";

import React from "react";
import LoadingWindow from "../output/NotAvailable";

const HomePage = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 1180,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  let key = process.env.REACT_APP_API_KEY;
  const [type, setType] = useState("movie");

  const { status, data } = useQuery("repoData", () =>
    fetch(
      `https://api.themoviedb.org/3/trending/${type}/week?api_key=${key}`
    ).then((res) => res.json())
  );

  console.log(data);
  return (
    <div>
      <div className="tabs">
        <h4>Select</h4>
        <Tabs
          value={type}
          style={{ color: "red" }}
          textColorPrimary="red"
          TabIndicatorProps={{
            style: {
              color: "red",
              backgroundColor: "red",
            },
          }}
          textColor="primary"
          onChange={(e, newValue) => setType(newValue)}
          centered
        >
          <Tab label="Movies" value={"movie"} />
          <Tab label="TV Series" value={"tv"} />
        </Tabs>
      </div>

      <Slider {...settings}>
        {status === "loading"
          ? LoadingWindow
          : data.results.map((movie, index) => (
              <div key={index} className="card">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt="movier"
                  key={index}
                  className="image"
                />
                <div className="card-desc">
                  <h4 style={{ color: "white" }}>
                    {movie.title ? movie.title : movie.name}
                  </h4>
                  <p>{movie.overview}</p>
                  <h4>Rating:</h4>
                  <Rating
                    defaultValue={movie.vote_average}
                    max={10}
                    precision={0.1}
                    iconEmpty="red"
                    readOnly
                  />
                </div>
              </div>
            ))}
      </Slider>
    </div>
  );
};

export default HomePage;
