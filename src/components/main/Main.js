import { Route, Switch } from "react-router-dom";
import Fetch from "../Fetch";
import Explore from "../Explore";
import Home from "../Home";

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route path="/about" component={Explore} /> */}
        <Route path="/explore" component={Fetch} />
      </Switch>
    </main>
  );
};

export default Main;
