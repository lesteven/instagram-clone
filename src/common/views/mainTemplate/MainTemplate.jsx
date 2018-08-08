import React, { Component, Fragment } from 'react';
import NavBar from './navBar/NavBar';


class MainTemplate extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <div className='max-width view'>
          { this.props.children }
        </div>
      </Fragment>
    )
  }
}

export default MainTemplate;
