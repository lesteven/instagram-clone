import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import AuthWrapper from './AuthWrapper';
import Register from './Register';
import registerUser from '../../../redux/registerModule/registerFunctions';

const mapState = ({ register, error }) => ({
  register,
  error,
})

const mapDispatch = {
  registerUser,
}



export default connect(mapState, mapDispatch)(Register);
