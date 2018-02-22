import React, {Component} from 'react';
import SearchFull from "../../css/imgs/hikrProtoSearchFull.png";
import '../../css/button.css';

class GoButton extends Component{
  constructor(){
    super();
    this.state = {
      buttonReturn : ""
    };
  }
  update = (e) => {
    this.props.onClick(e.value);
    this.setState({
      buttonReturn: e.value
    });
  }
  imgClick = ()=> {
   console.log(this.props.passedDiff);
   console.log(this.props.passedMiles);

 }
  render(){

    return(
      <div>
        <div>
          <img id="hikebutton" src={SearchFull} onClick = {this.update, this.imgClick}value= {this.state.buttonReturn}/>
        </div>
      </div>
    );
  }
}

export default GoButton;
