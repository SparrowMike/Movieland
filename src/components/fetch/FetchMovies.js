import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import MoviesDisplayed from "../output/MoviesDisplayed";

const FetchSearch = () => {
  let key = process.env.REACT_APP_API_KEY;

  const params = useParams();
  console.log("FetchSearch Params", params);

  const [data, setData] = useState(null);

  const URL = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=${params.sort}&certification_country=US&certification=${params.cert}&include_adult=false&include_video=false&page=1&year=${params.year}}&with_genres=${params.genre}&with_watch_monetization_types=flatrate`;

  useEffect(() => {
    // fetch(
    //   `https://api.themoviedb.org/3/discover/tv?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${params.genre}&with_watch_monetization_types=flatrate`
    // )

    // `https://api.themoviedb.org/3/discover/tv?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${params.genre}&with_watch_monetization_types=flatrate`

    fetch(
      // `${URL}&language=en-US&sort_by=popularity.desc&certification=${params.age}&with_genres=${params.genre}&with_watch_monetization_types=flatrate`
      URL
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Bad Response from Server");
      })
      .then((data) => {
        setData(data);
        console.log("fetch search", data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [URL]);

  return data === null ? (
    <h1>LOADING</h1>
  ) : (
    <div>
      <MoviesDisplayed data={data.results} key={key} />
    </div>
  );
};

export default FetchSearch;
