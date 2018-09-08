import React, { Component } from 'react';
import Auth from '../../auth/Auth';
import FeedPage from '../../feed/FeedPage';


class Home extends Component {
  render() {
    const regRedirect = this.props.redirect;
    const { redirect } = this.props.login;
    if (redirect || regRedirect ) return <FeedPage />;
    else return <Auth />; 
  }
}

export default Home;
