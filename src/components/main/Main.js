import { Route, Switch, Redirect } from "react-router-dom";
import FetchTrending from "../fetch/FetchTrending";
import FetchSearch from "./../fetch/FetchSearch";
import Home from "../tabs/Home";
import Movies from "../tabs/Movies";
import Tvshows from "../tabs/Tvshows";
import LogIn from "./../tabs/LogIn";
import FetchMovies from "./../fetch/FetchMovies";

const Main = () => {
  return (
    <main>
      <Switch>
        <Route path="/trending/:type/:date" component={FetchTrending} />
        <Route path="/movies/:genre" component={FetchMovies} />
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
