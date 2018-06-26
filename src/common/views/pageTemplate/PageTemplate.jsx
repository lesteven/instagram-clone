import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import NavBar from '../navBar/NavBar';


class PageTemplate extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <div className='max-width view'>
        </div>
      </Fragment>
    )
  }
}

export default PageTemplate;
