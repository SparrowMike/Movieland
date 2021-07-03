// import { Route } from "react-router-dom";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    secondary: grey,
  },
});

function App() {
  return (
    <>
      {/*  <ThemeProvider theme={theme}> */}
      <Header />
      <Main />
      <Footer />
      {/* </ThemeProvider> */}
    </>
  );
}

export default App;
