import React, { Component } from 'react';
import { render } from 'react-dom';
import '../../css/header.css';

export default class Header extends Component {
  render() {
    return (
      <div className="App-header">
        <h1 className="aha">
          Find A Hike!
        </h1>
        <img src="https://s-media-cache-ak0.pinimg.com/originals/59/ce/ba/59ceba0c989a064bbc34b88f4a6c728b.jpg" className= "mainImg" alt="logo" />
        <br/>
      </div>
    );
  }
}
