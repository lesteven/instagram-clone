import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import NavBar from './navBar/NavBar';
import Post from '../feed/components/Post';
import { clickGridPost } from '../../redux/popUpModule/popUpModule';


class MainTemplate extends Component {
  closeGrid = () => {
    const { clickGridPost } = this.props;
    clickGridPost();
  }
  render() {
    const { popUp, login, view } = this.props;
    const { gridPost, data } = popUp;
    const { screenSize } = view;
    return (
      <Fragment>
        <div className = 'grid-post' 
          style = { gridPost }
          onClick = { this.closeGrid }>
          { data? <Post data = { data } screenSize = { screenSize } />
            : null } 
        </div>
        <NavBar login = { login } />
        <div className='max-width view'>
          <div className= 'feed-wrapper'>
          { this.props.children }
          </div>
        </div>
      </Fragment>
    )
  }
}


const mapState = ({ popUp, login, view }) => ({
  popUp,
  login,
  view,
});

const mapDispatch = {
  clickGridPost,
};

export default connect(mapState, mapDispatch)(MainTemplate);
