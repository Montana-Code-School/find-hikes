import React, {Component} from 'react';
import Dropdown from 'react-dropdown';

const options = [
  'Short',
  'Medium',
  'Long'
];
const defaultOption = options[1];
class Droopdown1 extends Component{
  render() {
    return(
      <div>
        <Dropdown options={options} onChange={this._onSelect} value={defaultOption}/>
      </div>
    );
  }
}

export default Droopdown1;
