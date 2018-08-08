import React, { Component } from 'react';
import MappedRoutes from '../generalComponents/MappedRoutes';
import homeRoutes from './homeRoutes';
import styles from './css/home.css';



class HomePage extends Component {
  render() {
    return (
      <MappedRoutes routes = { homeRoutes }/>
    )
  }
}

export default HomePage;
