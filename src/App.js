import { Route, Switch, Redirect } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Navbar from "./components/main/Navbar";
import Footer from "./components/main/Footer";
import FetchSearch from "./components/fetch/FetchSearch";
import Home from "./components/pages/Home";
import Movies from "./components/pages/Movies";
import Tvshows from "./components/pages/Tvshows";
import FetchMovies from "./components/fetch/FetchMovies";
import FetchTvShows from "./components/fetch/FetchTvShows";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#f6f6f6",
    },
    secondary: {
      main: "#000000",
    },
  },
});

function App() {
  const queryClient = new QueryClient();

  return (
    <div className="main">
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <Navbar />
          <Switch>
            <Route
              path="/movies/:genre/:cert/:sort/:yearGte/:yearLte/:country"
              component={FetchMovies}
            />
            <Route path="/search/:title" component={FetchSearch} />
            <Route
              path="/tvshows/:genre/:cert/:sort/:yearGte/:yearLte/:country"
              component={FetchTvShows}
            />
            <Route path="/movies" component={Movies} />
            <Route path="/tvshows" component={Tvshows} />
            <Route exact path="/" component={Home} />
            <Redirect to="/" />
          </Switch>
          <Footer />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
