import React, { Component } from 'react';
import MappedRoutes from '../generalComponents/MappedRoutes';
import homeRoutes from './homeRoutes';
import styles from './css/home.css';
import getFeed from '../../redux/feedModule/feedFunctions';


const api = '/api/feed/';

class HomePage extends Component {
  static fetchData({ store, params }, url) {
    if (params.profile !== 'favicon.ico') {
      console.log('static feed page fetch data!');
      const userName = store.getState().login.userName;
      const fullUrl = `${url}${api}${userName}`;
      console.log(fullUrl);
      return store.dispatch(getFeed(fullUrl));
    }
  }
  render() {
    return (
      <MappedRoutes routes = { homeRoutes }/>
    )
  }
}

export default HomePage;
