import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Trending from "../output/Trending";

const FetchTrending = () => {
  let key = process.env.REACT_APP_API_KEY;

  const params = useParams();

  const [data, setData] = useState(null);

  useEffect(() => {
    // https://api.themoviedb.org/3/movie/739542/videos?api_key=28f61172b752209fb2807f08057c9e1f&language=en-US
    // https://www.youtube.com/watch?v=

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
        console.log(data);
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
      <Trending data={data.results} key={key} />
    </div>
  );
};

export default FetchTrending;
