import React, { Component, Fragment } from 'react'
import AuthWrapper from './AuthWrapper';
import { inputState, mappedInput } from '../inputData/registerInput';

function Register(props) {
  return (
    <AuthWrapper 
      error = { props.error }
      data = { props.login }
      inputState = { inputState }
      mappedInput = { mappedInput }
      submit = { props.loginUser }
      url = '/api/register'
      label = 'Sign Up'
    />
  )
}


export default Register;
