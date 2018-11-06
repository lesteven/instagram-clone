import React, { Component } from 'react';
import LoginContainer from '../containers/LoginContainer';
import Title from './Title';
import Footer from '../../generalComponents/Footer';

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
      <div className = 'with-footer'>
        <div className = 'top-pad content'>
          <div className = 'signup-wrapper'>
            <Title />
            <LoginContainer />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
export default LoginPage;
