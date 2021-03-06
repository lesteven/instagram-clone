import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import HeaderSection from '../components/HeaderSection';
import PopUpContainer from './PopUpContainer';
import { toggleClick } from '../../../redux/popUpModule/popUpModule';
import { toggleFn } from '../../../redux/popUpModule/popUpFunctions';
import {
  follow,
} from '../../../redux/friendsModule/friendsFunctions';
import { clearFeed } from '../../../redux/feedModule/feedModule';


class HeaderContainer extends Component {
  onClick = toggleFn.bind(this);
  follow = () => {
    const { follow, profile, clearFeed } = this.props;  
    const data = {
      followId: profile.id, 
      numFollowers: profile.followers,
    }
    const url = `/api/friends/follow/${profile.profile}`
    follow(url, data);
    clearFeed();
  }
  render() {
    const { follow } = this.props;
    const { profile } = this.props.match.params;
    const { userName } = this.props.login;
    const followStatus = this.props.friends;
    const account = this.props.profile;
    return (
      <Fragment>
        <PopUpContainer />
        <HeaderSection
          user = { userName }
          onClick = { this.onClick }
          profile = { profile }
          follow = { this.follow }
          followStatus = { followStatus }
          account = { account }
        /> 
      </Fragment>
    )
  }
}


const mapState = ({ profile, login, friends }) => ({
  login,
  profile,
  friends
})

const mapDispatch = {
  toggleClick,
  follow,
  clearFeed,
}

export default withRouter(connect(mapState, mapDispatch)(HeaderContainer));
