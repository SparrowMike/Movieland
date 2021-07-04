import { Route, Switch } from "react-router-dom";
import Fetch from "../Fetch";
import Home from "../Home";
import Movies from "../Movies";
import Tvshows from "./../Tvshows";

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/explore" component={Fetch} />
        <Route path="/movies" component={Movies} />
        <Route path="/tvshows" component={Tvshows} />
      </Switch>
    </main>
  );
};

export default Main;
