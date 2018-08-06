import React, { Component } from 'react';
import './App.css';
import Sortias from './Sortias'
import CssBaseline from '@material-ui/core/CssBaseline';


class App extends Component {
  render() {
    return (
      <div className="App">
        <CssBaseline />
        <Sortias />
      </div>
    );
  }
}

export default App;
