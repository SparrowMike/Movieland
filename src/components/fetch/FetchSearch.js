// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router";
// import Results from "./../output/Results";
// import LoadingWindow from "../output/LoadingWindow";

// const FetchSearch = () => {
//   let key = process.env.REACT_APP_API_KEY;
//   const params = useParams();

//   const [data, setData] = useState(null);

//   const URL = `https://api.themoviedb.org/3/search/multi?api_key=${key}&language=en-US&query=${params.title}&page=1&include_adult=false`;

//   useEffect(() => {
//     fetch(URL)
//       .then((response) => {
//         if (response.ok) {
//           return response.json();
//         }
//         throw new Error("Bad Response from Server");
//       })
//       .then((data) => {
//         setData(data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, [URL]);

//   return data === null ? (
//     <LoadingWindow />
//   ) : (
//     <div>
//       <Results data={data.results} key={key} type="movie" />
//     </div>
//   );
// };

// export default FetchSearch;

import React from "react";
import { useParams } from "react-router";
import Results from "./../output/Results";
import LoadingWindow from "../output/LoadingWindow";
import { useInfiniteQuery } from "react-query";
import InfiniteScroll from "react-infinite-scroll-component";
import { CircularProgress, Typography, Grid } from "@material-ui/core";

const FetchSearch = () => {
  let key = process.env.REACT_APP_API_KEY;
  const params = useParams();

  function assertIsCharacterResponse(response) {
    if (!("results" in response && "page" in response)) {
      throw new Error("No results");
    }
    if (response.results.length > 0) {
      const firstResult = response.results[0];
      if (!("title" in firstResult)) {
        throw new Error("No titles");
      }
    }
  }

  async function search({ pageParam = 1 }) {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=${key}&language=en-US&query=${params.title}&page=${pageParam}&include_adult=false`
    );
    if (!response.ok) {
      throw new Error("Problem fetching data");
    }
    const dataFromServer = await response.json();
    console.log(dataFromServer);
    assertIsCharacterResponse(dataFromServer);
    const data = {
      total_results: dataFromServer.total_results,
      results: dataFromServer.results,
      next:
        dataFromServer.page === dataFromServer.total_pages ? 0 : pageParam + 1,
    };
    return data;
  }

  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery(
    "search",
    search,
    {
      getNextPageParam: (lastPage) => lastPage.next,
    }
  );

  console.log(data);

  if (data === undefined) {
    return null;
  }
  const dataLength = data.pages.reduce((counter, page) => {
    return counter + page.results.length;
  }, 0);
  return data.length === 0 ? (
    <LoadingWindow />
  ) : (
    <InfiniteScroll
      dataLength={dataLength}
      next={fetchNextPage}
      hasMore={!!hasNextPage}
      loader={
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          style={{ padding: "75px" }}
        >
          {data.pages[0].total_results !== dataLength ? (
            <>
              <Typography variant="h3" color="primary">
                Loading...
              </Typography>
              <CircularProgress color="primary" />
            </>
          ) : (
            <Typography variant="h3" color="primary">
              All up to date!
            </Typography>
          )}
        </Grid>
      }
    >
      {data.pages.map((data, index) => (
        <Results data={data.results} key={key} type="movie" />
      ))}
    </InfiniteScroll>
  );
};

export default FetchSearch;
