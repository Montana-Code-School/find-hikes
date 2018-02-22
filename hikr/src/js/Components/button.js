import React, {Component} from 'react';
import SearchFull from "../../css/imgs/hikrProtoSearchFull.png";
import '../../css/button.css';
import Droopdown1 from "./dropdown1.js";
import Droopdown2 from "./dropdown2.js";

class GoButton extends Component{
  constructor(props){
    super(props);
  }
  render(){

    return(
      <div>
        <img id="hikebutton" src={SearchFull} onClick = {this.props.imgClick()}/>
      </div>
    );
  }
}

export default GoButton;
