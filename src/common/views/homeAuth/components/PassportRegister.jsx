import React, { Component, Fragment } from 'react';
import styles from './css/passportRegister.css';
import preventDefault from '../../../utils/preventDefault';
import createInputObject from '../../../utils/createInputObject';

const text = 'text';

const inputData = [
  createInputObject(text, 'email', 'Email'),
  createInputObject(text, 'name', 'Full Name'),
  createInputObject(text, 'username', 'Username'),
  createInputObject('password', 'password', 'Password'),
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
  submit = preventDefault(() => {
      const { registerUser } = this.props;
      registerUser({test:'hello'});
  })
  render() {
    return(
      <form onSubmit = { this.submit } 
        className='register-form'>
        { this.mappedInputData() }
        <input type = 'submit' value = 'Sign up' />
      </form>
    )
  }
}


export default PassportRegister;
