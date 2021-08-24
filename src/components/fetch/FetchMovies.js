import React from "react";
import { useInfiniteQuery } from "react-query";
import { useParams } from "react-router";
import Results from "../output/Results";
import LoadingWindow from "../output/NotAvailable";

export function FetchMovies() {
  let key = process.env.REACT_APP_API_KEY;
  const params = useParams();
  let genre = "movie";

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

  async function getMovies({ pageParam = 1 }) {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=${params.sort}&certification_country=US&certification=${params.cert}&release_date.gte=${params.yearGte}-01-01&release_date.lte=${params.yearLte}-01-01&include_adult=false&include_video=false&page=${pageParam}&with_genres=${params.genre}&watch_region=${params.country}&with_runtime.gte=0&with_runtime.lte=200&with_watch_monetization_types=flatrate`
    );
    if (!response.ok) {
      throw new Error("Problem fetching data");
    }
    const dataFromServer = await response.json();
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
    "movies",
    getMovies,
    {
      getNextPageParam: (lastPage) => lastPage.next,
    }
  );

  if (data === undefined) {
    return null;
  }
  const dataLength = data.pages.reduce((counter, page) => {
    return counter + page.results.length;
  }, 0);

  return data.length === 0 ? (
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
}
