import React, { Component } from 'react';
import MappedRoutes from '../generalComponents/MappedRoutes';
import homeRoutes from './homeRoutes';


class HomeNav extends Component {
  render() {
    return (
      <MappedRoutes routes = { homeRoutes }/>
    )
  }
}

export default HomeNav;
