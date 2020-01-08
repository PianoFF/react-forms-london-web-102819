// sibling of Form.js; to display form data 
// img for illustration: https://curriculum-content.s3.amazonaws.com/react/react-forms/Image_23_FlowchartControlled.png
// Now we have a component that reads from the same state we're changing with the form.

import React from 'react';
 
class DisplayFormData extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.formData.firstName}</h1>
        <h1>{this.props.formData.lastName}</h1>
      </div>
    )
  }
}
 
export default DisplayFormData;