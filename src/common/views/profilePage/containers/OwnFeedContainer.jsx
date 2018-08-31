import React, { Component } from 'react';
import { connect } from 'react-redux';

class OwnFeedContainer extends Component {

  render() {
    return (

    )
  }
}

const mapState = ({ login }) => ({
  login,
});

const mapDispatch = {

}

export default connect(mapState,mapDispatch)(OwnFeedContainer);
