import React, { Component } from 'react';
import { connect } from 'react-redux';
import InfiniteComp from '../components/InfiniteComp';


class InfiniteFeed extends Component {
  render() {
    const { feed } = this.props.profile; 
    const fn = () => {};
    return (
      <InfiniteComp 
        hasNextPage = { fn }
        isNextPageLoading = { fn }
        list = { feed }
        loadNextPage = { fn }
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
