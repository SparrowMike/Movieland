// import { Route } from "react-router-dom";

import Header from "./components/main/Header";
import Main from "./components/main/Main";
import Footer from "./components/main/Footer";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

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
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <div className="mainContainer">
          <Main />
        </div>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
