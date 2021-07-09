import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Results from "./../output/Results";
import LoadingWindow from "../output/LoadingWindow";

const FetchSearch = () => {
  let key = process.env.REACT_APP_API_KEY;
  const params = useParams();

  const [data, setData] = useState(null);

  const URL = `https://api.themoviedb.org/3/search/multi?api_key=${key}&language=en-US&query=${params.title}&page=1&include_adult=false`;

  useEffect(() => {
    fetch(URL)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Bad Response from Server");
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [URL]);

  return data === null ? (
    <LoadingWindow />
  ) : (
    <div>
      <Results data={data.results} key={key} type="movie" />
    </div>
  );
};

export default FetchSearch;
