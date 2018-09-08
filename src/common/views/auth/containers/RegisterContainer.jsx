import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Register from './Register';
import { loginUser } from '../../../redux/loginModule/loginFunctions';

class RegisterContainer extends Component {
  render() {
    return (
      <Register { ...this.props} />
    )
  }
}

const mapState = ({ login, error }) => ({
  login,
  error,
})

const mapDispatch = {
  loginUser,
}



export default withRouter(connect(mapState, mapDispatch)(RegisterContainer));
