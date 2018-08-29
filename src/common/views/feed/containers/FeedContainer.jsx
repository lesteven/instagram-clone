import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from '../components/Post';
import MappedPosts from '../../generalComponents/MappedPosts';


class FeedContainer extends Component {

  render() {
  const data = [
    {
      userimage :'/user.svg',
      username : 'user1',
      imgname :'/slug.jpg'
    }, 
    {
      userimage :'/user.svg',
      username : 'user2',
      imgname : '/milky-way.jpg'
    },
    {
      userimage :'/user.svg',
      username : 'user3',
      imgname : '/milky-way.jpg'
    }
  ];
    return (
      <div className= 'feed-wrapper'>
        <MappedPosts data = { data } />
      </div>
    )
  }
}

const mapState = ({ feed }) => ({

});

const mapDispatch = {

};

export default connect(mapState,mapDispatch)(FeedContainer);
