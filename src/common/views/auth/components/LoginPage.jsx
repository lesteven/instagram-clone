import React from 'react';
import LoginContainer from '../containers/LoginContainer';
import Title from './Title';


function LoginPage() {
  return(
    <div className = 'signup-wrapper'>
      <Title />
      <LoginContainer />
    </div>
  )
}

export default LoginPage;
