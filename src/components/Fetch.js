import React, { useState, useEffect } from "react";

const Fetch = () => {
  const [data, setData] = useState(null);
  let key = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${key}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Bad Response from Server");
      })
      .then((data) => {
        setData(data);
        console.log(data.results[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return data === null ? (
    <h1>LOADING</h1>
  ) : (
    <div>
      <h3> Title: {data.results[0].title}</h3>
      <p>Overview: {data.results[0].overview}</p>
      <p>
        Average vote of {data.results[0].vote_average} based on{" "}
        {data.results[0].vote_count} votes
      </p>
      <p>Release Date: {data.results[0].release_date}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500${data.results[0].backdrop_path}`}
        alt=""
      />
    </div>
  );
};

export default Fetch;
