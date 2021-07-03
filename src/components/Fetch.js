import React, { useState, useEffect } from "react";
import Trending from "./Trending";

const Fetch = () => {
  const [data, setData] = useState(null);
  let key = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    // fetch(
    //   `  https://api.themoviedb.org/3/genre/movie/list?api_key=${key}&language=en-US` //! By Genre
    // )
    //? Search trending by TV, MOVIE, ALL or PERSON. It can go by DAY or WEEK.

    fetch(`https://api.themoviedb.org/3/trending/tv/day?api_key=${key}`)
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
      {/* <TestTrending data={data.results} key={key} /> */}
    </div>
  );
};

export default Fetch;
