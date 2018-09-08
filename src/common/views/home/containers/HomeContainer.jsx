import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from '../components/Home';
import { withRouter } from 'react-router-dom';
import Auth from '../../auth/Auth';
import FeedPage from '../../feed/FeedPage';

class HomeContainer extends Component {
  render() {
    const { redirect }= this.props.login;
    if (redirect) return <FeedPage />;
    else return <Auth />; 
  }
}

const mapState = ({ login }) => ({
  login,
})

const mapDispatch = {

}

export default withRouter(connect(mapState, mapDispatch)(HomeContainer));
