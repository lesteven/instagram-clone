import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import MappedPosts from '../../generalComponents/MappedPosts';

class FeedContainer extends Component {
  render() {
    const { feed } = this.props.profile; 
    return (
      <Fragment>
        { feed?
          <MappedPosts data = { feed } />
          : null
        }
      </Fragment>
    )
  }
}

const mapState = ({ profile }) => ({
  profile,
});

const mapDispatch = {

}

export default connect(mapState,mapDispatch)(FeedContainer);
