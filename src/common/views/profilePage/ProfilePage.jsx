import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainTemplate from '../mainTemplate/MainTemplate';
import ProfileContainer from './containers/ProfileContainer';
import getProfile from '../../redux/profileModule/profileFunctions';
// import FeedContainer from './containers/FeedContainer';
import InfiniteFeed from './containers/InfiniteFeed';
import ErrorPage from '../generalComponents/ErrorPage';


const api = '/api/account/';

class ProfilePage extends Component {
  static fetchData({ store, params }, url) {
    if (params.profile !== 'favicon.ico') {
      const fullUrl = `${url}${api}${params.profile}`;
      return store.dispatch(getProfile(fullUrl));
    }
  }
  componentDidMount() {
    const { feed } = this.props.profile; 
    const { getProfile } = this.props;
    const { params } = this.props.match;
    if (!feed) {
      getProfile(`${api}${params.profile}`);
    } 
  }  
  componentDidUpdate(prevProps) {
    const { getProfile } = this.props;
    const { params } = this.props.match;
    if (prevProps.match.params.profile !== params.profile) {
      console.log('different!');
      getProfile(`${api}${params.profile}`);
    } 
  }
  render() {
    const { params } = this.props.match;
    const { feed } = this.props.profile; 
    if (feed) {
      return (
        <MainTemplate>
          <ProfileContainer />
          <InfiniteFeed />
        </MainTemplate>
      )
    } else if (this.props.profile[`${api}${params.profile}`]){
      return (
        <ErrorPage />        
      )
    } else {
      return (
        <div></div>
      )
    }
  }
}


const mapState = ({ profile }) => ({
  profile,
});

const mapDispatch = {
  getProfile,
}

export default connect(mapState,mapDispatch)(ProfilePage);
