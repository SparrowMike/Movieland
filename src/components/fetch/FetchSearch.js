import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Results from "./../output/Results";

const FetchSearch = () => {
  let key = process.env.REACT_APP_API_KEY;

  const params = useParams();
  console.log("FetchSearch Params", params);

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=${key}&language=en-US&query=${params.title}&page=1&include_adult=false`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Bad Response from Server");
      })
      .then((data) => {
        setData(data);
        console.log("fetch search", data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [key, params.title]);

  return data === null ? (
    <h1>LOADING</h1>
  ) : (
    <div>
      <Results data={data.results} key={key} type="movie" />
    </div>
  );
};

export default FetchSearch;
