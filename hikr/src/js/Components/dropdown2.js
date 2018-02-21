import React, {Component} from 'react';
import Dropdown from 'react-dropdown';

const options = [
  'Green',
  'Blue',
  'Black'
];
const defaultOption = options[0];

class Droopdown2 extends Component{
  render() {
    return(
      <div>
        <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Ima placholder..."/>
      </div>
    );
  }
}

export default Droopdown2;
