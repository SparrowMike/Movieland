import { Route, Switch, Redirect } from "react-router-dom";
import FetchTrending from "../fetch/FetchTrending";
import FetchSearch from "./../fetch/FetchSearch";
import Home from "../tabs/Home";
import Movies from "../tabs/Movies";
import Tvshows from "../tabs/Tvshows";
import LogIn from "./../tabs/LogIn";
import FetchMovies from "./../fetch/FetchMovies";
import FetchTvShows from "../fetch/FetchTvShows";

const Main = () => {
  return (
    <main>
      <Switch>
        <Route
          // path="/movies/:genre/:cert/:sort/:yearGte/:yearLte/:country/:language"
          path="/movies/:genre/:cert/:sort/:yearGte/:yearLte/:country"
          component={FetchMovies}
        />
        <Route
          path="/tvshows/:genre/:cert/:sort/:yearGte/:yearLte/:country"
          component={FetchTvShows}
        />
        <Route path="/trending/:type/:date/" component={FetchTrending} />
        <Route path="/search/:title" component={FetchSearch} />
        <Route path="/movies" component={Movies} />
        <Route path="/tvshows" component={Tvshows} />
        <Route path="/login" component={LogIn} />
        <Route exact path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    </main>
  );
};

export default Main;
