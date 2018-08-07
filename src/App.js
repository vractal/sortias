import React, { Component } from "react";
import "./App.css";
import Sortias from "./Sortias";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CssBaseline />

        <MuiThemeProvider>
        <Sortias />
      </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
