import React, {Component} from 'react';
import render from 'react-dom';
import '../../css/header.css';
import mainImg from "../../css/imgs/hikrProtoMainImg.jpg";
import GoButton from "./button.js";
import Droopdown1 from "./dropdown1.js";
import Droopdown2 from "./dropdown2.js";
import ReturnField from "./returnField.js";
import Shorthikes from "./hikes/shorthike.js";

export default class Header extends Component {
  render() {
    return (<div className="App-header">
      <h1 className="aha">
        Find A Hike!
      </h1>
      <div className="container">
        <img id= "main" src={mainImg} alt="Zoo Town"/>
        <div className="button"><GoButton/></div>
        <div className="difficulty"><Droopdown1/></div>
        <div className="hikeLength"><Droopdown2/></div>
        <div className="returnField"><Shorthikes/></div>
      </div>
    </div>);
  }
}
