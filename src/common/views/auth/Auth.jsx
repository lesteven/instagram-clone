import React, { Component } from 'react';
import SignUp from './components/SignUp';
import LoginLink from './components/LoginLink';
import Footer from '../generalComponents/Footer';

class Auth extends Component {
  render() {
    return (
      <div className='max-width with-footer'>  
        <div className = 'content'>
          <SignUp />
          <LoginLink />
        </div>
        <Footer />
      </div>  
    )
  }
}

export default Auth;
