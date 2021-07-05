import { Route, Switch, Redirect } from "react-router-dom";
import FetchTrending from "../fetch/FetchTrending";
import FetchSearch from "./../fetch/FetchSearch";
import Home from "../tabs/Home";
import Movies from "../tabs/Movies";
import Tvshows from "../tabs/Tvshows";

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/movies" component={Movies} />
        <Route path="/tvshows" component={Tvshows} />
        <Route path="/explore/:type/:date" component={FetchTrending} />
        <Route path="/search/:title" component={FetchSearch} />
        <Redirect to="/" />
      </Switch>
    </main>
  );
};

export default Main;
