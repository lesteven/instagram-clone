import React, { Component, Fragment } from 'react';

const text = 'text';

const inputObect = (type, name, placeholder) => ({
  type,
  name,
  placeHolder,
})

const inputData = [
  inputObject(text, 'email', 'Email'),
  inputObject(text, 'name', 'Full Name'),
  inputObject(text, 'username', 'Username'),
  inputObject('password', 'password', 'Password'),
]


class PassportLogin extends Component {
  mappedInputData = () => {
    inputData.map(e => 
      <input 
        type = {e.type} 
        value = {e.name} 
        placeholder = {e.placeHolder}
      />
    )
  } 
  render() {
    return(
      <Fragment>
        { this.mappedInputData() }
      </Fragment>
    )
  }
}


export default PassportLogin;
