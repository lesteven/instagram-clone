import React, { Component, Fragment } from 'react';
import ExploreContainer from './containers/ExploreContainer';

class ExplorePage extends Component {
  static fetchData({ store, params }, url) {
    console.log('fetch from explore'); 
  }
  render() {
    return (
      <ExploreContainer />
    )
  }
}

export default ExplorePage;
