import React, { Component } from 'react';
import MainTemplate from '../mainTemplate/MainTemplate';
import ProfileContainer from './containers/ProfileContainer';


class ProfilePage extends Component {
  static fetchData({ store }, url) {
    console.log('fetching data!');
  }
  componentDidMount() {
    console.log('will fetch data!!!');
  }
  render() {
    return (
      <MainTemplate>
        <ProfileContainer />
      </MainTemplate>
    )
  }
}

export default ProfilePage;
