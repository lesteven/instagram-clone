import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './css/loginLink.css';


function LoginLink() {
  return (
    <div className='login-link'>
      <p> Have an account? 
        <Link to = '/accounts/login'> Log in</Link>
      </p>
    </div>
  )
}


export default LoginLink;
