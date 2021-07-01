import { Route } from "react-router-dom";
import "./App.css";
import Fetch from "./components/Fetch";

function App() {
  return (
    <div className="App">
      <Route path="/">
        <Fetch />
      </Route>
    </div>
  );
}

export default App;
