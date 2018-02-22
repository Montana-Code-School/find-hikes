import React, {Component} from 'react';
import Dropdown from 'react-dropdown';

const options = [
  'Short',
  'Medium',
  'Long'
];
class Droopdown1 extends Component{
  constructor(props) {
    super(props);
    this.state = {
      ddval1: ""
    };
  }
  update = (e) => {
    console.log(e.value);
    this.props.onChange(e.value);
    this.setState({
      ddval1: e.value,
    });
  }
  render() {
    return(
      <div>
        <Dropdown options={options} onChange={this.update} value={this.state.ddval1}/>
      </div>
    );
  }
}

export default Droopdown1;
