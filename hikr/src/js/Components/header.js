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
  constructor(props){
    super(props);
    this.state = {
      ddval1: "",
      ddval2: "",
    };
  }
  onChange1 = (miles) => {
     this.setState({
       ddval1: miles,
     })
   }
   onChange2 = (difficulty) => {
     this.setState({
       ddval2: difficulty,
     })
   }
  render() {
    return (<div className="App-header">
      <h1 className="aha">
        Find A Hike!
      </h1>
      <div className="container">
        <img id= "main" src={mainImg} alt="Zoo Town"/>
        <div className="button"><GoButton passedMiles={this.state.ddval1} passedDiff={this.state.ddval2}/></div>
        <div className="hikeLength"><Droopdown1 onChange={this.onChange1}/></div>
        <div className="difficulty"><Droopdown2 onChange={this.onChange2}/></div>
      </div>
    </div>);
  }
}
