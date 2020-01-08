import React from 'react';

class Form extends React.Component {
  state = {
    firstName: "",
    lastName: ""
  }

  handleFirstNameChange = event => {
    this.setState({
      firstName: event.target.value
      /*
      The event contains data about the target, which is whatever DOM element the event was triggered on. 
      That target, being an input, has a value attribute. This attribute is equal to whatever is currently entered into that particular input!
      Keep in mind, this is not the value we provided from state. When we read event.target.value, 
      we get whatever content is present when the event fired. 
      In the case of our first input, that would be a combination of whatever this.state.firstName is equal to plus the last key stroke. */
    })
  }

  handleLastNameChange = event => {
    /* 👇to see event and event's attributes properties: 
    event.persist()
    console.log(event.target)*/
    this.setState({
      lastName: event.target.value
    })
  }



  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <lable htmlFor='first-name'>First Name </lable>
        <input type="text" id='first-name' name="firstName" placeholder='first-name' onChange={this.handleFirstNameChange} value={this.state.firstName} />
        <br></br>
        <lable htmlFor='last-name'>Last Name </lable>               
        <input type="text" id='last-name' name="lastName" placeholder='last-name' onChange={event => this.handleLastNameChange(event)} value={this.state.lastName} />
      </form>
    )
  }
}

export default Form;