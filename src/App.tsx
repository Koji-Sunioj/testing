import React from "react";
import { createTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import Routes from "./Routes";
import Navbar from "./Components/Navbar/Navbar";

const theme = createTheme({
  palette: {
    primary: {
      main: "#42a5f5",
    },
    secondary: {
      main: "#ba68c8",
    },
  },

  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Routes />
      </ThemeProvider>
    </>
  );
}
