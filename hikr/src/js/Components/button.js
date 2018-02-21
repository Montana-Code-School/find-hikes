import React, {Component} from 'react';
import SearchFull from "../../css/imgs/hikrProtoSearchFull.png";
import '../../css/button.css';
import Droopdown1 from "./dropdown1.js";
import Droopdown2 from "./dropdown2.js";

class GoButton extends Component{
  render(){
    const imgClick = ()=> {
      console.log(Droopdown1);
    };
    return(
      <div>
        <img id="hikebutton" src={SearchFull} onClick = {() => imgClick()}/>
      </div>
    );
  }
}

export default GoButton;
