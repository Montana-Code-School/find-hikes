import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import '../css/App.css';
import Header from './Components/header.js';


class App extends Component {
  render() {
    return (<div className="App">
      <Header/>
    </div>);
  }
}

export default App;
