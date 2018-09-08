import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import HeaderSection from '../components/HeaderSection';
import PopUpContainer from './PopUpContainer';
import { toggleClick } from '../../../redux/popUpModule/popUpModule';
import { toggleFn } from '../../../redux/popUpModule/popUpFunctions';
import {
  follow,
  unfollow
} from '../../../redux/friendsModule/friendsFunctions';

class HeaderContainer extends Component {
  onClick = toggleFn.bind(this);
  follow = () => {
    const { follow, profile } = this.props;  
    const data = {
      followId: profile.id, 
    }
    const url = `/api/friends/follow/${profile.profile}`
    follow(url, data);
  }
  render() {
    const { follow, unfollow } = this.props;
    const { profile } = this.props.match.params;
    const { userName } = this.props.login;
    return (
      <Fragment>
        <PopUpContainer />
        <HeaderSection
          user = { userName }
          onClick = { this.onClick }
          profile = { profile }
          follow = { this.follow }
          unfollow = { unfollow }
        /> 
      </Fragment>
    )
  }
}


const mapState = ({ profile, login }) => ({
  login,
  profile,
})

const mapDispatch = {
  toggleClick,
  follow,
  unfollow,
}

export default withRouter(connect(mapState, mapDispatch)(HeaderContainer));
