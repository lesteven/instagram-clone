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
    const { follow } = this.props;
    const { profile } = this.props.match.params;
    const { userName } = this.props.login;
    const followStatus = this.props.friends;
    return (
      <Fragment>
        <PopUpContainer />
        <HeaderSection
          user = { userName }
          onClick = { this.onClick }
          profile = { profile }
          follow = { this.follow }
          followStatus = { followStatus }
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
}

export default withRouter(connect(mapState, mapDispatch)(HeaderContainer));
