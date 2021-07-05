import React, { useState, useEffect } from "react";
import Trending from "../window/Trending";
import { useParams } from "react-router-dom";

const FetchTrending = () => {
  let key = process.env.REACT_APP_API_KEY;

  const [data, setData] = useState(null);
  const { type } = useParams;
  console.log("Type", type);

  const URL = `https://api.themoviedb.org/3/trending/tv/day?api_key=${key}`;

  useEffect(() => {
    //? https://developers.themoviedb.org/3/discover/movie-discover
    // fetch(
    //   `https://api.themoviedb.org/3/discover/tv?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
    // )

    //? Search trending by TV, MOVIE, ALL or PERSON. It can go by DAY or WEEK.
    fetch(URL)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Bad Response from Server");
      })
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [key]);

  return data === null ? (
    <h1>LOADING</h1>
  ) : (
    <div>
      <Trending data={data.results} key={key} />
    </div>
  );
};

export default FetchTrending;
