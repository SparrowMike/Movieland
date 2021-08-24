// import React from "react";
// import { useParams } from "react-router";
// import Results from "../output/Results";
// import LoadingWindow from "../output/LoadingWindow";
// import { useQuery } from "react-query";

// const FetchTrending = () => {
//   let key = process.env.REACT_APP_API_KEY;
//   const { type, date } = useParams();

//   const { status, data } = useQuery("repoData", () =>
//     fetch(
//       `https://api.themoviedb.org/3/trending/${type}/${date}?api_key=${key}`
//     ).then((res) => res.json())
//   );
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
//     <>
//       <Results data={data.results} key={key} />
//     </>
//   );
// };

// export default FetchTrending;
