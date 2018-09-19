import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import ExploreContainer from './containers/ExploreContainer';
import getExplore from '../../redux/exploreModule/exploreFunctions';


const api = '/api/explore';

class ExplorePage extends Component {
  static fetchData({ store, params }, url) {
    console.log('fetch from explore'); 
    const fullUrl = `${url}${api}`;
    return store.dispatch(getExplore(fullUrl));
  }
  render() {
    return (
      <ExploreContainer />
    )
  }
}

const mapState = ({ explore }) => ({
  explore,
});

const mapDispatch = {
  getExplore,
}

export default connect(mapState, mapDispatch)(ExplorePage);
