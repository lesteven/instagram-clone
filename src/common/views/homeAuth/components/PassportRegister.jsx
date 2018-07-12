import React, { Component, Fragment } from 'react';
import styles from './css/passportRegister.css';


const text = 'text';

const inputObject = (type, name, placeHolder) => ({
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


class PassportRegister extends Component {
  mappedInputData = () => { 
    return inputData.map(e => 
      <input 
        key = { e.name }
        type = { e.type } 
        placeholder = { e.placeHolder }
        onChange = { () => console.log('hello') }
      />
    )
  }

  render() {
  const { registerAC } = this.props;
    return(
      <form onSubmit = { registerAC } className='register-form'>
        { this.mappedInputData() }
        <input type = 'submit' value = 'Sign up' />
      </form>
    )
  }
}


export default PassportRegister;
