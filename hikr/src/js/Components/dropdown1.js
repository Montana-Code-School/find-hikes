import React, {Component} from 'react';
import Dropdown from 'react-dropdown';

const options = [
  'Short',
  'Medium',
  'Long'
];
const defaultOption = options[1];
class Droopdown1 extends Component{

  constructor(props){
    super(props);
    this.state={miles: ""};
    // this._onSelect = this._onSelect.bind(this);
  }
  render() {
    console.log(`Droopdown1 ${this.props.miles}`);
    return(
      <div>
        <Dropdown options={options} onChange={(event) => this.props.miles(event.value).bind(this)} value={defaultOption}/>
      </div>

    );
  }
}

export default Droopdown1;
