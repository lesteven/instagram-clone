import React, { Component, Fragment } from 'react';
import NavBar from './navBar/NavBar';


class MainTemplate extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <div className='max-width view'>
          <div className= 'feed-wrapper'>
          { this.props.children }
          </div>
        </div>
      </Fragment>
    )
  }
}

export default MainTemplate;
