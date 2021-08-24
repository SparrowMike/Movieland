import React from "react";
import { useParams } from "react-router";
import Results from "./../output/Results";
import LoadingWindow from "../output/LoadingWindow";
import { useInfiniteQuery } from "react-query";

const FetchSearch = () => {
  let key = process.env.REACT_APP_API_KEY;
  const params = useParams();

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
    <Results
      data={data}
      type="movie"
      dataLength={dataLength}
      fetchNextPage={fetchNextPage}
      hasNextPage={hasNextPage}
    />
  );
};

export default FetchSearch;
