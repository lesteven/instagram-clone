import React, { Component } from 'react';
import SignUp from './components/SignUp';
import LoginLink from './components/LoginLink';
import WithFooter from '../generalComponents/WithFooter';

class Auth extends Component {
  render() {
    return (
      <WithFooter>
        <SignUp />
        <LoginLink />
      </WithFooter>
    )
  }
}

export default Auth;
