import React, { Component, Fragment } from 'react';
import styles from './css/passportRegister.css';




class PassportRegister extends Component {
  render() {
  const { submit } = this.props;
    return(
      <form onSubmit = { submit } 
        className='register-form'>
        { this.props.children }
        <input type = 'submit' value = 'Sign up' />
      </form>
    )
  }
}


export default PassportRegister;
