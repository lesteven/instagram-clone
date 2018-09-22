import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Post from '../../feed/components/Post';
import GridPost from '../components/GridPost';
import { clickGridPost } from '../../../redux/popUpModule/popUpModule';

class GridPostContainer extends Component {
  render() {
  const { popUp, data, clickGridPost } = this.props;
    return (
      <div onClick = { clickGridPost }>
        <GridPost data = { data } />
      </div>
    )
  }
}


const mapState = ({ popUp }) => ({
  popUp,
});

const mapDispatch = {
  clickGridPost,
};

export default connect(mapState, mapDispatch)(GridPostContainer);
