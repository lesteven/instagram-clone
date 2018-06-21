import React, { Component } from 'react';
import PpLoginContainer from '../containers/PpLoginContainer';


class SignUp extends Component {
  render() {
    return (
      <div className = 'signup-wrapper'>
        <h1 className = 'signup-logo'>Instagram</h1>
        <div className = 'signup-box'>
          <h4> Sign up to see photos and videos from your friends </h4>
        </div>
      </div>
    )
  }
}

export default SignUp;
