import React from 'react';

class Form extends React.Component {
  state = {
    firstName: "First Name",
    lastName: "Last Name "
  }

  handleFirstNameChange = event => {
    this.setState({
      firstName: event.target.value
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
        <input type="text" id='first-name' name="firstName" onChange={this.handleFirstNameChange} value={this.state.firstName} />
        <br></br>
        <lable htmlFor='last-name'>Last Name </lable>               
        <input type="text" id='last-name' name="lastName" onChange={event => this.handleLastNameChange(event)} value={this.state.lastName} />
      </form>
    )
  }
}

export default Form;