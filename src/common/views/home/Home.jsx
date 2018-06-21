import React, { Component } from 'react';
import SignUp from './components/SignUp';
import styles from './home.css';


class Home extends Component {
  render() {
    return (
      <div className='max-width'>  
        <SignUp />
      </div>  
    )
  }
}

export default Home;
