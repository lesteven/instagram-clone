import React, { Component } from 'react';
import { connect } from 'react-redux';
import MappedPosts from '../../generalComponents/MappedPosts';

class FeedContainer extends Component {

  render() {
  const { feed } = this.props.profile; 
    return (
      <div className= 'feed-wrapper'>
        <MappedPosts data = { feed } />
      </div>
    )
  }
}

const mapState = ({ profile }) => ({
  profile,
});

const mapDispatch = {

}

export default connect(mapState,mapDispatch)(FeedContainer);
