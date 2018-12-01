import React, { Component } from 'react';
import { connect } from 'react-redux';
import InfiniteComp from '../../profilePage/components/InfiniteComp';
import getFeed from '../../../redux/feedModule/feedFunctions';

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

const api = '/api/feed/';

class FeedContainer extends Component {
  loadNextPage = ({ startIndex, stopIndex }) => {
    const { getFeed, login } = this.props;
    const { feed } = this.props.feed;
    const id = feed[startIndex-1].id;
    const url = `/api/feed/older/${login.userName}/${id}`;

    return new Promise(resolve => {
      getFeed(url);
    });
  }
  componentDidMount() {
    const { feed } = this.props.feed; 
    const { getFeed } = this.props;
    const { userName } = this.props.login;
    if (!feed && userName) {
      console.log('homefeed, there was no feed!');
      getFeed(`${api}${userName}`);
    } 
  }  
  render() {
    const { feed, hasOldPage, fetchStatus } = this.props.feed; 
    const { view } = this.props;
    if (feed) {
      return (
        <InfiniteComp 
          hasNextPage = { hasOldPage }
          isNextPageLoading = { fetchStatus }
          list = { feed }
          loadNextPage = { this.loadNextPage }
          screenSize = { view.screenSize }
        />
      )
    } else {
      return <div></div>
    }
  }
}

const mapState = ({ feed, login, view }) => ({
  feed,
  login,
  view,
});

const mapDispatch = {
  getFeed,
}

export default connect(mapState,mapDispatch)(FeedContainer);
