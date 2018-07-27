import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from './css/form.css';


class AuthForm extends Component {
  render() {
  const { submit, label } = this.props;
    return(
      <form onSubmit = { submit } 
        className='auth-form'>
        { this.props.children }
        <input type = 'submit' value = { label } />
      </form>
    )
  }
}

AuthForm.propTypes = {
  submit: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default AuthForm;
