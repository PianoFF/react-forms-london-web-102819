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
 /* CAN THESE TWO BE ABSTRACTED? 
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
👇*/

/*
Since each one is changing a different value in our state, we've got them separated here. 
Imagine that once we've got a more complicated form, this route may result in a very cluttered component.
Instead of separate methods, we could actually condense this down into one abstracted component:
  🙌Since event is being passed in as the argument, we have access to some of the event.target 
  attributes that may be present.
  If we give our inputs name attributes, we can access them as event.target.name:
*/
  handleChange = event => {
      this.setState({
          [event.target.name]: event.target.value
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
                handleChange={this.handleChange}
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