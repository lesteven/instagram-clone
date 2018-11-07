import React, { Component } from 'react';
import LoginContainer from '../containers/LoginContainer';
import Title from './Title';
import WithFooter from '../../generalComponents/WithFooter';


class LoginPage extends Component {
  render() {
    return(
      <WithFooter> 
        <div className = 'top-pad'>
          <div className = 'signup-wrapper'>
            <Title />
            <LoginContainer />
          </div>
        </div>
      </WithFooter>
    )
  }
}
export default LoginPage;
