import React, { Component } from 'react';
import Auth from './components/Auth';
import MainTemplate from '../mainTemplate/MainTemplate';
import styles from './home.css';


class Home extends Component {
  render() {
  const { redirect } = this.props;
  if (redirect) return <MainTemplate />;
  else return <Auth />; 
  }
}

export default Home;
