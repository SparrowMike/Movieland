import Navbar from "./components/main/Navbar";
import Main from "./components/main/Main";
import Footer from "./components/main/Footer";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

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
      <ThemeProvider theme={theme}>
        <Navbar />
        <Main />
        <Footer />
      </ThemeProvider>
  );
}

export default App;
