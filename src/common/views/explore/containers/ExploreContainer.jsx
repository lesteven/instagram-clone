import React, { Component } from 'react';
import { connect } from 'react-redux';
import Explore from '../components/Explore';
import InfiniteComp from '../../profilePage/components/InfiniteComp';
import { withRouter } from 'react-router-dom';
import getExplore from '../../../redux/exploreModule/exploreFunctions';


class ExploreContainer extends Component {
  loadNextPage = ({ startIndex, stopIndex }) => {
    const { getExplore } = this.props;
    const { feed } = this.props.explore;
    const id = feed[startIndex-1].id;
    const url = `/api/explore/older/${id}`;

    return new Promise(resolve => {
      getExplore(url);
    });
  }
  render() {
    const { feed, hasOldPage, fetchStatus } = this.props.explore; 
    return (
      <InfiniteComp
        hasNextPage = { hasOldPage }
        isNextPageLoading = { fetchStatus }
        list = { feed }
        loadNextPage = { this.loadNextPage }
      />
    )
  }
}

const mapState = ({ explore }) => ({
  explore,
});

const mapDispatch = {
  getExplore,
};

export default withRouter(connect(mapState, mapDispatch)(ExploreContainer));
