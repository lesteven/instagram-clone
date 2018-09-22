import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import NavBar from './navBar/NavBar';
import Post from '../feed/components/Post';
import { clickGridPost } from '../../redux/popUpModule/popUpModule';


class MainTemplate extends Component {
  render() {
    const { clickGridPost, popUp} = this.props;
    const { gridPost, data } = popUp;
    return (
      <Fragment>
        <div className = 'grid-post' 
          style = { gridPost }
          onClick = { clickGridPost }>
          { data? <Post data = { data } />: null } 
        </div>
        <NavBar />
        <div className='max-width view'>
          <div className= 'feed-wrapper'>
          { this.props.children }
          </div>
        </div>
      </Fragment>
    )
  }
}


const mapState = ({ popUp }) => ({
  popUp,
});

const mapDispatch = {
  clickGridPost,
};

export default connect(mapState, mapDispatch)(MainTemplate);
