import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Results from "../output/Results";

const FetchTrending = () => {
  let key = process.env.REACT_APP_API_KEY;

  const params = useParams();

  const [data, setData] = useState(null);

  const URL = `https://api.themoviedb.org/3/trending/${params.type}/${params.date}?api_key=${key}`;
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
        // console.log(data);
      })
      .catch((error) => {
        // console.log(error);
      });
  }, [URL]);

  return data === null ? (
    <h1>LOADING</h1>
  ) : (
    <div>
      <Results data={data.results} key={key} />
    </div>
  );
};

export default FetchTrending;
