import React, { Component, Fragment } from 'react';
import ExploreContainer from '../containers/ExploreContainer';
import styles from '../css/exploreComp.css';


class Explore extends Component {
  render() {
    return (
      <Fragment>
        <div className = 'explore-title'>
          <p> Explore </p>
        </div>
        <ExploreContainer /> 
      </Fragment> 
    )
  }
}

export default Explore;
