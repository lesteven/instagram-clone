import React, { Component } from 'react';
import MainTemplate from '../mainTemplate/MainTemplate';
import UserContainer from './containers/UserContainer';

class UserPage extends Component {
  render() {
    return (
      <MainTemplate>
        <UserContainer />
      </MainTemplate>
    )
  }
}

export default UserPage;
