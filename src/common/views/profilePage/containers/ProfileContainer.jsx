import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import ProfileHeader from '../components/ProfileHeader';
import { withRouter } from 'react-router-dom';
import { resetLogin } from '../../../redux/loginModule/loginModule';


class ProfileContainer extends Component {
  componentDidUpdate(prevProps) {
    const { login, resetLogin } = this.props;
    const { redirect } = login;
    if (prevProps.login.redirect !== redirect) {
      this.props.history.push('/'); 
      resetLogin();
    }  
  }
  render() {
    return (
      <ProfileHeader />
    )
  }
}

const mapState = ({ login }) => ({
  login,
})

const mapDispatch = {
  resetLogin,
}

export default withRouter(connect(mapState, mapDispatch)(ProfileContainer));
