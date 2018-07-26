import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
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

PassportRegister.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default PassportRegister;
