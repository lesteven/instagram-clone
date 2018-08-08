import React, { Component } from 'react';
import Auth from '../auth/Auth';
import Feed from '../feed/Feed';
import styles from './home.css';


class Home extends Component {
  render() {
    const { redirect } = this.props.login;
    if (redirect) return <Feed />;
    else return <Auth />; 
  }
}

export default Home;
