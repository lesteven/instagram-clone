import React, { Component } from 'react';
import RegisterContainer from '../containers/RegisterContainer';


class SignUp extends Component {
  render() {
    return (
      <div className = 'signup-wrapper'>
        <h1 className = 'signup-logo'>Instagram</h1>
        <div className = 'signup-box'>
          <h4> Sign up to see photos and videos from your friends </h4>
          <RegisterContainer />
        </div>
      </div>
    )
  }
}

export default SignUp;
