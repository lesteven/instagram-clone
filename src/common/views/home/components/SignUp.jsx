import React, { Component } from 'react';
import RegisterContainer from '../containers/RegisterContainer';
import styles from './css/signUp.css'

function PolicyAgreement() {
  return (
    <p> 
      By signing up, you agree to our 
      <strong> Terms</strong>, 
      <strong> Data Policy</strong> and 
      <strong> Cookies Policy</strong>. 
    </p>
  )
}

class SignUp extends Component {
  render() {
    return (
      <div className = 'signup-wrapper'>
        <h1 className = 'signup-logo'>Instagram</h1>
        <h4> Sign up to see photos and videos from your friends </h4>
        <RegisterContainer />
        <PolicyAgreement />
      </div>
    )
  }
}

export default SignUp;
