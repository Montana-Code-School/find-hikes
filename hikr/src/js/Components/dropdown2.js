import React, {Component} from 'react';
import Dropdown from 'react-dropdown';

const options = [
  'Green',
  'Blue',
  'Black'
];

class Droopdown2 extends Component{
  constructor(props) {
    super(props);
    this.state = {
      ddval2: "",
    };
  }
  update = (e) => {
    console.log(e.value);
    this.props.onChange(e.value);
    this.setState({
      ddval2: e.value
    });
  }
  render() {
    return(
      <div>
        <Dropdown options={options} onChange={this.update} value={this.state.ddval2}/>
      </div>
    );
  }
}

export default Droopdown2;
