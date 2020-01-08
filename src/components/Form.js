import React from 'react';

class Form extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    submittedData: [
      {firstName: 'John',
       lastName: 'Snow'
      }
    ]
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

  
  // handleSubmit = event => {
  //   event.preventDefaul(); 
  //   formData = {
  //     firstName: this.state.firstName, 
  //     lastName: this.state.lastName
  //   }
  //   this.doSomethingWithThisData(formData)
  //   /* 👆 This function could be defined in the current component or passed down as a prop. 
  //     currently, we don't have any server to send our data, see uncommented demonstration.   
  //   */
  // } 

  //👇submission demonstration: 
  handleSubmit = event => {
    event.preventDefault(); 
    // event.persist();
    // console.log(event); 
    let formData= {
      firstName: this.state.firstName,
      lastname: this.state.lastName
    };
    this.setState({
      submittedData:[ ...this.state.submittedData, formData]
    })
  }

  listOfSubmissions = () => {
    return this.state.submittedData.map( data => {
      return <div><span>{data.firstName}</span> <span>{data.lastName}</span></div>
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <lable htmlFor='first-name'>First Name </lable>
          <input type="text" id='first-name' name="firstName" placeholder='first-name' onChange={this.handleFirstNameChange} value={this.state.firstName} />
          <br></br>
          <lable htmlFor='last-name'>Last Name </lable>               
          <input type="text" id='last-name' name="lastName" placeholder='last-name' onChange={event => this.handleLastNameChange(event)} value={this.state.lastName} />
          <input type='submit'></input>
        </form>
        {this.listOfSubmissions()}
      </div>
    )
  }
}

export default Form;