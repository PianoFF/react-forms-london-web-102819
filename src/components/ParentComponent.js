//this ParentComponent maintains ALL the functions while Form just handles the display of JSX
import React from 'react';
import Form from './Form'
import DisplayFormData from './DiaplayFormData';

let initialState = {
    firstName: "",
    lastName: "",
}
class ParentComponent extends React.Component {
  state = initialState; 
 
  handleFirstNameChange = event => {
    this.setState({
      firstName: event.target.value
    })
  }
 
  handleLastNameChange = event => {
    this.setState({
      lastName: event.target.value
    })
  }

  handleFormSubmit = event =>{
      event.preventDefault(); 
      this.setState(initialState)
  }
 
  render() {
    return (
        <div>
            <Form
                formData={this.state}
                handleFirstNameChange={this.handleFirstNameChange}
                handleLastNameChange={this.handleLastNameChange}
                handleSubmit={this.handleFormSubmit}
            />
            <DisplayFormData
                formData={this.state}
            ></DisplayFormData>
        </div>
    )
  }
}
 
export default ParentComponent;