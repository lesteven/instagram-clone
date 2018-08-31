import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from '../components/Home';
import { withRouter } from 'react-router-dom';
import Auth from '../../auth/Auth';
import FeedPage from '../../feed/FeedPage';

class HomeContainer extends Component {
  render() {
    const regRedirect = this.props.register.redirect;
    const logRedirect = this.props.login.redirect;
    if (logRedirect || regRedirect ) return <FeedPage />;
    else return <Auth />; 
  }
}

const mapState = ({ login, register }) => ({
  login,
  register,
})

const mapDispatch = {

}

export default withRouter(connect(mapState, mapDispatch)(HomeContainer));
