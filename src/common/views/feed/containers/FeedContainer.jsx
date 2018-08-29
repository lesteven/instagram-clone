import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from '../components/Post';

class FeedContainer extends Component {

  render() {
    return (
      <div className= 'feed-wrapper'>
        <Post 
          userimage = '/user.svg'
          username = 'user1'
          postimage = '/slug.jpg'
          />
        <Post 
          userimage = '/user.svg'
          username = 'user2'
          postimage = '/milky-way.jpg'
          />
      </div>
    )
  }
}

const mapState = ({ feed }) => ({

});

const mapDispatch = {

};

export default connect(mapState,mapDispatch)(FeedContainer);
