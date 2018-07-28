import React from 'react'
import AuthWrapper from './AuthWrapper';
import { inputState, mappedInput } from '../inputData/loginInput';

function Login(props) {
  return (
    <AuthWrapper 
      error = { props.error }
      data = { props.login }
      inputState = { inputState }
      mappedInput = { mappedInput }
      submit = { props.loginUser }
      url = '/api/login'
      label = 'Log in'
    />
  )
}


export default Login;
