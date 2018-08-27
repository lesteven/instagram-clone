import React, { Component } from 'react';
import LoginContainer from './LoginContainer';
import Title from '../components/Title';



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
