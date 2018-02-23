import React, {Component} from 'react';
import SearchFull from "../../css/imgs/hikrProtoSearchFull.png";
import '../../css/button.css';

class GoButton extends Component{
  constructor(){
    super();
    this.state = {
      hikes : []
    };
  }
  render(){
    const imgClick = ()=> {
      console.log(this.props.passedDiff + " " + this.props.passedMiles);
      fetch('http://localhost:8080/api/hikes')
        .then(results => {
          return results.json();
        }).then(data => {
          let hikesReturn = data.map((hikes) => {
            if (this.props.passedDiff == hikes.difficulty && this.props.passedMiles == hikes.lengthKey){
              return(
                <div key = {hikes.results}>
                  <h1> {hikes.name}, {hikes.length}, {hikes.difficulty} </h1>
                  <h2> {hikes.location}</h2>
                  <h4> {hikes.description}</h4>
                </div>
              )
            }
          })
          this.setState({hikes: hikesReturn});
        })
    }
    return(
      <div>
        <div>
          <img id="hikebutton" src={SearchFull} onClick = {() => imgClick()}/>
        </div>
        <div className='container2' id='returnField'>
          <div className='container1'>{this.state.hikes}</div>
        </div>
      </div>
    );
  }
}

export default GoButton;
