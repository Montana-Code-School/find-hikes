import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';

export default class ReturnField extends Component {
  constructor () {
    super();
    this.state = {
      hikes : []
    };
  }

  componentDidMount(){
    let self = this;
    axios.get('/api/hikes')
      .then(function (response) {
        self.setState(
          {
            hikes : response.data
          }
        );
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        Hike!
        {this.state.hikes.map(hikes =>
          <div>
            <h4>{hikes.name}</h4>
            <br/>
            <br/>
          </div>
        )}
      </div>
    );
  }
}
