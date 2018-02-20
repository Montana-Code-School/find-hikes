import React, { Component } from 'react';
import Header from './Components/header.js';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import '../css/App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <div className="App">
            <Header />
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;
