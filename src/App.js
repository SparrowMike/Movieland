// import Navbar from "./components/main/Navbar";
import Main from "./components/main/Main";
import Footer from "./components/main/Footer";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import NewNavBar from "./components/main/NewNavBar";

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
    <div className="main">
      <ThemeProvider theme={theme}>
        <NewNavBar />
        {/* <Navbar /> */}
        <Main />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
