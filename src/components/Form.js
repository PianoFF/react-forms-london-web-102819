// img for illustration: https://curriculum-content.s3.amazonaws.com/react/react-forms/Image_22_FlowchartReactProps.png
// parent component (State) ==> (passed down as props) form values from state, event callback functions;
// form component (controlled using props) ==> (via callback functions) update state. 
import React from 'react';

class Form extends React.Component {
  render() {
    const {handleFirstNameChange, handleLastNameChange, handleSubmit ,formData} = this.props; 
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <lable htmlFor='first-name'>First Name </lable>
          <input 
            type="text" 
            id='first-name' 
            name="firstName" 
            placeholder='first-name' 
            onChange={handleFirstNameChange} 
            value={formData.firstName}
            />
          <br></br>
          <lable htmlFor='last-name'>Last Name </lable>               
          <input 
            type="text" 
            id='last-name' 
            name="lastName" 
            placeholder='last-name' 
            onChange={event => handleLastNameChange(event)} 
            value={formData.lastName}
            />
          <input type='submit'/> 
        </form>
      </div>
    )
  }
}

export default Form;