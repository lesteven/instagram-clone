import React, { Component } from 'react';
import LoginContainer from '../containers/LoginContainer';
import Title from './Title';

/*
function LoginPage() {
  return(
    <div className = 'top-pad'>
      <div className = 'signup-wrapper'>
        <Title />
        <LoginContainer />
      </div>
    </div>
  )
}
*/

class LoginPage extends Component {
  render() {
    return(
      <div className = 'top-pad'>
        <div className = 'signup-wrapper'>
          <Title />
          <LoginContainer />
        </div>
      </div>
    )
  }
}
export default LoginPage;
