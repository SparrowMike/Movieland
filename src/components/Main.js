import { Route, Switch } from "react-router-dom";
import Fetch from "./Fetch";
import About from "./About";
import Explore from "./Explore";

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Fetch} />
        <Route path="/about" component={About} />
        <Route path="/explore" component={Explore} />
      </Switch>
    </main>
  );
};

export default Main;
