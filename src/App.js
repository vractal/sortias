import React, { Component } from "react";
import "./App.css";
import Sortias from "./Sortias";
import theme from "./theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";

const App = () => (
  <div className="App">
    <CssBaseline />

    <MuiThemeProvider theme={theme}>
      <Sortias />
    </MuiThemeProvider>
  </div>
);

export default App;
