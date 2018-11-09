import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainTemplate from '../mainTemplate/MainTemplate';
import ProfileContainer from './containers/ProfileContainer';
import getProfile from '../../redux/profileModule/profileFunctions';
// import FeedContainer from './containers/FeedContainer';
import InfiniteFeed from './containers/InfiniteFeed';
import ErrorPage from '../generalComponents/ErrorPage';
import { clearProfilePage } from '../../redux/profileModule/profileModule';

const api = '/api/account/';

class ProfilePage extends Component {
  static fetchData({ store, params }, url) {
    if (params.profile !== 'favicon.ico') {
      console.log('static fetched feed!');
      const userId = store.getState().login.userId || '';
      const fullUrl = `${url}${api}${params.profile}/${userId}`;
      console.log('url!!!!!!!!1', fullUrl);
      return store.dispatch(getProfile(fullUrl));
    }
  }
  componentDidMount() {
    const { feed } = this.props.profile; 
    const { getProfile } = this.props;
    const { params } = this.props.match;
    if (!feed || params.profile !== this.props.profile.profile) {
      console.log('there was no feed!');
      getProfile(`${api}${params.profile}`);
    } 
  }  
  componentDidUpdate(prevProps) {
    const { getProfile, clearProfilePage } = this.props;
    const { params } = this.props.match;
    if (prevProps.match.params.profile !== params.profile) {
      console.log('different!');
      clearProfilePage();
      getProfile(`${api}${params.profile}`);
    } 
  }
  render() {
    const { params } = this.props.match;
    const { feed, profile } = this.props.profile; 
    const { userName } = this.props.login;
    const { error } = this.props;
    const url = `${api}${params.profile}`;
    if (feed) {
      return (
        <MainTemplate>
          <ProfileContainer />
          <InfiniteFeed />
        </MainTemplate>
      )
    } else if (error[url]){
      console.log('no username and no profile');
      return (
        <ErrorPage />        
      )
    } else {
      console.log('empty div');
      return ( 
        <div></div>
      )
    }
  }
}


const mapState = ({ login, profile, error }) => ({
  profile,
  login,
  error,
});

const mapDispatch = {
  getProfile,
  clearProfilePage,
}

export default connect(mapState,mapDispatch)(ProfilePage);
