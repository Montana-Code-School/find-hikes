import React, {Component}from 'react';

class Shorthikes extends Component{
  constructor(){
    super();
    this.state = {
      hikes : []
    };
  }
  componentDidMount(){
    fetch('http://localhost:8080/api/hikes')
      .then(results => {
        return results.json();
      }).then(data => {
        let hikes = data.map((hikes) => {
          return(
            <div key = {hikes.results}>
              <h1> {hikes.name}, {hikes.length}, {hikes.difficulty} </h1>
              <h2> {hikes.location}</h2>
              <h4> {hikes.description}</h4>
            </div>
          )
        })
        this.setState({hikes: hikes});
        console.log("state", this.state.hikes);
      })
  }
  render(){
    return(
      <div className='container2'>
        <div className='container1'>{this.state.hikes}</div>
      </div>
    )
  }
}

export default Shorthikes;
