import React, { Component } from 'react';
import SignUp from './SignUp';
import LoginLink from './LoginLink';


class Auth extends Component {
  render() {
    return (
      <div className='max-width'>  
        <SignUp />
        <LoginLink />
      </div>  
    )
  }
}

export default Auth;
