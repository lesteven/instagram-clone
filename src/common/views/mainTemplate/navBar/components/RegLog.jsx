import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

function RegLog({ login }) {

  return (
    <Fragment>
      <Link to = '/accounts/login'> Log In </Link>
      <Link to = '/'> Sign Up </Link>
    </Fragment>
  )
}

export default RegLog;
