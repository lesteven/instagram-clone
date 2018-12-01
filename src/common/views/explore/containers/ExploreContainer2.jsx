import React, { Component } from 'react';
import { connect } from 'react-redux';
import Explore from '../components/Explore';
import InfiniteComp from '../../profilePage/components/InfiniteComp';
import InfiniteGrid from '../../profilePage/components/InfiniteGrid';
import { withRouter } from 'react-router-dom';
import getExplore from '../../../redux/exploreModule/exploreFunctions';


class ExploreContainer extends Component {
  loadNextPage = ({ startIndex, stopIndex }) => {
    const { getExplore } = this.props;
    const { feed } = this.props.explore;
    const id = feed[startIndex-1][feed[startIndex-1].length-1].id;
    const url = `/api/explore/older/${id}`;

    return new Promise(resolve => {
      getExplore(url);
    });
  }
  render() {
    const { feed, hasOldPage, fetching } = this.props.explore; 
    const { view } = this.props;
    return (
      <InfiniteGrid
        hasNextPage = { hasOldPage }
        isNextPageLoading = { fetching }
        list = { feed }
        loadNextPage = { this.loadNextPage }
        screenSize = { view.screenSize }
      />
    )
  }
}

const mapState = ({ explore, view }) => ({
  explore,
  view,
});

const mapDispatch = {
  getExplore,
};

export default withRouter(connect(mapState, mapDispatch)(ExploreContainer));
