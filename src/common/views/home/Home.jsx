import React, { Component } from 'react';
import SignUp from './components/SignUp';
import styles from './home.css';
import LoginLink from './components/LoginLink';


class Home extends Component {
  render() {
    return (
      <div className='max-width'>  
        <SignUp />
        <LoginLink />
      </div>  
    )
  }
}

export default Home;
