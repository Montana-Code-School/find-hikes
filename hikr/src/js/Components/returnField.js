import React, {Component}from 'react';

class ReturnField extends Component{
  constructor(){
    super();
    this.state = {
      buttonReturn: "",
    };
  }

  render(){
    return(
      <div>
        <div>{this.props.passedReturn}</div>
      </div>
    )
  }
}

export default ReturnField;
