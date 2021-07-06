import React, { useState, useEffect } from "react";
// import Trending from "../output/Trending";
import { useParams } from "react-router";
import TEST from "../output/TEST";

const FetchTrending = () => {
  let key = process.env.REACT_APP_API_KEY;

  const params = useParams();

  const [data, setData] = useState(null);

  useEffect(() => {
    //? https://developers.themoviedb.org/3/discover/movie-discover
    // fetch(
    //   `https://api.themoviedb.org/3/discover/tv?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
    // )

    fetch(
      `https://api.themoviedb.org/3/trending/${params.type}/${params.date}?api_key=${key}`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Bad Response from Server");
      })
      .then((data) => {
        setData(data);
        // console.log(data);
      })
      .catch((error) => {
        // console.log(error);
      });
  }, [key, params.type, params.date]);

  return data === null ? (
    <h1>LOADING</h1>
  ) : (
    <div>
      {/* <Trending data={data.results} key={key} /> */}
      <TEST data={data.results} key={key} />
    </div>
  );
};

export default FetchTrending;
