import React, { Component, Fragment } from 'react';
import MainTemplate from '../mainTemplate/MainTemplate';
import LoginPage from '../auth/components/LoginPage';


class Explore extends Component {
  componentDidMount() {
    const { redirect } = this.props.login;
    const { history } = this.props;
    if (!redirect) {
      history.push('/accounts/login');
    }
  }
  render() {
    const { redirect } = this.props.login;
    if (redirect) {
      return (
        <MainTemplate>
          <p> explore! </p>
        </MainTemplate>
      )
    } else {
      return (
        <div></div>
      )   
    }
  }
}

export default Explore;
