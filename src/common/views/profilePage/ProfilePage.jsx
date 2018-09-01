import React, { Component } from 'react';
import MainTemplate from '../mainTemplate/MainTemplate';
import ProfileContainer from './containers/ProfileContainer';
import getProfile from '../../redux/profileModule/profileFunctions';
import FeedContainer from './containers/FeedContainer';


class ProfilePage extends Component {
  static fetchData({ store, params }, url) {
    if (params.profile !== 'favicon.ico') {
      const fullUrl = `${url}/api/account/${params.profile}`;
      return store.dispatch(getProfile(fullUrl));
    }
  }
  render() {
    return (
      <MainTemplate>
        <ProfileContainer />
        <FeedContainer />
      </MainTemplate>
    )
  }
}

export default ProfilePage;
