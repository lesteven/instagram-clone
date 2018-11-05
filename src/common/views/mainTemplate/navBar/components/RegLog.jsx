import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/reglog.css';


function RegLog({ login }) {

  return (
    <div className = 'reglog'>
      <Link to = '/accounts/login'> Log In </Link>
      <Link to = '/'> Sign Up </Link>
    </div>
  )
}

export default RegLog;
