import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Results from "../output/Results";
import CircularProgress from "@material-ui/core/CircularProgress";

const FetchSearch = () => {
  let key = process.env.REACT_APP_API_KEY;
  let type = "movie";
  const params = useParams();

  console.log("Fetch Search Params", params);

  const [data, setData] = useState(null);

  // const URL = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=${params.sort}&certification_country=US&certification=${params.cert}&release_date.gte=${params.yearGte}-01-01&release_date.lte=${params.yearLte}-01-01&include_adult=false&include_video=false&page=1&with_genres=${params.genre}&with_original_language=${params.lang}&watch_region=${params.country}&with_watch_monetization_types=flatrate`;
  const URL = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=${params.sort}&certification_country=US&certification=${params.cert}&release_date.gte=${params.yearGte}-01-01&release_date.lte=${params.yearLte}-01-01&include_adult=false&include_video=false&page=1&with_genres=${params.genre}&watch_region=${params.country}&with_runtime.gte=0&with_runtime.lte=200&with_watch_monetization_types=flatrate`;

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
        console.log("fetch search", data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [URL]);

  return data === null ? (
    <CircularProgress disableShrink />
  ) : (
    <div>
      <Results data={data.results} key={key} type={type} />
    </div>
  );
};

export default FetchSearch;
