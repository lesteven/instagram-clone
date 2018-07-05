import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import NavBar from '../navBar/NavBar';
import navRoutes from '../navRoutes';
import MappedRoutes from '../generalComponents/MappedRoutes';


class MainTemplate extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <div className='max-width view'>
          <MappedRoutes routes = { navRoutes } />
        </div>
      </Fragment>
    )
  }
}

export default MainTemplate;
