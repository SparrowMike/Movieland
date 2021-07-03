const Trending = (props) => {
  console.log(props);
  return (
    <>
      <h1> Trending Movies</h1>
      {props.data.map((film, index) => {
        return (
          <div key={index} className="trending">
            <h3>Title: {film.title ? film.title : film.name}</h3>
            <h3>Release Date: {film.release_date}</h3>
            <h4>{film.overview}</h4>

            <img
              src={`https://image.tmdb.org/t/p/w500${film.backdrop_path}`}
              alt=""
            />
          </div>
        );
      })}
    </>
  );
};

export default Trending;
