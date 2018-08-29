import React, { Component } from 'react';
import Auth from '../../auth/Auth';
import FeedPage from '../../feed/FeedPage';


class Home extends Component {
  render() {
    const { redirect } = this.props.login;
    if (redirect) return <FeedPage />;
    else return <Auth />; 
  }
}

export default Home;
