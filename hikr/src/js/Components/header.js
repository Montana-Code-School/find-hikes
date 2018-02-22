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
    this.state={
      miles: "",
      hikeDiff: "",
    };
    // this.imgClick = this.imgClick.bind(this);
  }

  // imgClick () {
  //   console.log("im working");
  //   this.setState({
  //     miles: this.state.miles
  //   });
  // }

  updateMiles (newMiles) {
    this.setState({
      miles: newMiles
    });
  }

  otherFn () {

  }

  // updateDifficulty (newDiff) {
  //   this.setState({
  //     difficulty: newDiff
  //   });
  // }
  render() {
    return (<div className="App-header">
      <h1 className="aha">
        Find A Hike! {this.state.miles}
      </h1>
      <div className="container">
        <img id= "main" src={mainImg} alt="Zoo Town"/>
        <div className="button"><GoButton imgClick = {() => this.imgClick}/></div>
        <div className="hikeLength"><Droopdown1 updateMiles = {this.updateMiles}/></div>
        <div className="difficulty"><Droopdown2 difficulty= {() => this.updateDifficulty}/></div>
        <div className="returnField"><Shorthikes/></div>
      </div>
    </div>);
  }
}
