import React from "react";
import { useParams } from "react-router";
import Results from "../output/Results";
import { useInfiniteQuery } from "react-query";
import LoadingWindow from "../output/LoadingWindow";

const FetchSearch = () => {
  let key = process.env.REACT_APP_API_KEY;
  const params = useParams();
  let genre = "tv";

  function assertIsCharacterResponse(response) {
    if (!("results" in response && "page" in response)) {
      throw new Error("No results");
    }
    if (response.results.length > 0) {
      const firstResult = response.results[0];
      if (!("id" in firstResult)) {
        throw new Error("No id");
      }
    }
  }

  async function getTv({ pageParam = 1 }) {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/tv?api_key=${key}&language=en-US&sort_by=${params.sort}&certification_country=US&certification=${params.cert}&first_air_date.gte=${params.yearGte}-01-01&first_air_date.lte=${params.yearLte}-01-01&include_adult=false&include_video=false&page=${pageParam}&with_genres=${params.genre}&watch_region=${params.country}&with_runtime.gte=0&with_runtime.lte=200&with_watch_monetization_types=flatrate`
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

  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery("tv", getTv, {
    getNextPageParam: (lastPage) => lastPage.next,
  });

  if (data === undefined) {
    return null;
  }
  const dataLength = data.pages.reduce((counter, page) => {
    return counter + page.results.length;
  }, 0);

  return data === null ? (
    <LoadingWindow />
  ) : (
    <>
      <Results
        data={data}
        genre={genre}
        dataLength={dataLength}
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
      />
    </>
  );
};

export default FetchSearch;
