import React, { Component, Fragment } from 'react';
import styles from './css/passportRegister.css';
import FlashMsg from '../../generalComponents/FlashMsg';


class PassportRegister extends Component {
  render() {
  const { submit, error, success } = this.props;
    return(
      <form onSubmit = { submit } 
        className='register-form'>
        { this.props.children }
        <input type = 'submit' value = 'Sign up' />
        { error ?
        <FlashMsg className = 'fail' msg = { error } /> : null
        }
        { success?
        <FlashMsg className = 'success' msg = { success } /> : null
        }
      </form>
    )
  }
}


export default PassportRegister;
