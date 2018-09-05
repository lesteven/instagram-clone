import React, { Component } from 'react';
import { connect } from 'react-redux';
import InfiniteComp from '../components/InfiniteComp';

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
    const { profile } = this.props;
    const { feed } = profile;
    const id = feed[startIndex-1].id;
    const url = `/api/accounts/${profile.profile}/${id}`;

  }
  render() {
    const { feed, } = this.props.profile; 
    const fn = () => {};
    return (
      <InfiniteComp 
        hasNextPage = { fn }
        isNextPageLoading = { false }
        list = { feed }
        loadNextPage = { this.loadNextPage }
      />
    )
  }
}

const mapState = ({ profile }) => ({
  profile,
});

const mapDispatch = {

}

export default connect(mapState,mapDispatch)(InfiniteFeed);
