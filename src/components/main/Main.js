import { Route, Switch } from "react-router-dom";
import FetchTrending from "../fetch/FetchTrending";
import Home from "../window/Home";
import Movies from "../window/Movies";
import Tvshows from "./../window/Tvshows";

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/movies" component={Movies} />
        <Route path="/tvshows" component={Tvshows} />
        <Route path="/explore" component={FetchTrending} />
      </Switch>
    </main>
  );
};

export default Main;
