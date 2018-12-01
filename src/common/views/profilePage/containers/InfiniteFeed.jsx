import React, { Component } from 'react';
import { connect } from 'react-redux';
// import InfiniteComp from '../components/InfiniteComp';
import InfiniteGrid from '../components/InfiniteGrid';
import getProfile from '../../../redux/profileModule/profileFunctions';

/*
  hasNextPage
  - checks if has more data
  isNextPageLoading
  - check if data is being fetched
  list
  - feed data
  loadNextPage
  - gets more data from server
   
*/
class InfiniteFeed extends Component {
  loadNextPage = ({ startIndex, stopIndex }) => {
    const { profile, getProfile } = this.props;
    const { feed } = profile;
    // const id = feed[startIndex-1].id;
    const id = feed[startIndex-1][feed[startIndex-1].length-1].id;
    const url = `/api/account/older/${profile.profile}/${id}`;

    return new Promise(resolve => {
      getProfile(url);
    });
  }
  render() {
    const { feed, hasOldPage, fetchStatus } = this.props.profile; 
    const { view } = this.props;
    return (
      <InfiniteGrid 
        hasNextPage = { hasOldPage }
        isNextPageLoading = { fetchStatus }
        list = { feed }
        loadNextPage = { this.loadNextPage }
        screenSize = { view.screenSize }
      />
    )
  }
}

const mapState = ({ profile, view }) => ({
  profile,
  view,
});

const mapDispatch = {
  getProfile,
}

export default connect(mapState,mapDispatch)(InfiniteFeed);
