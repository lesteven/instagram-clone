import React, { Component } from 'react';
import MappedRoutes from '../generalComponents/MappedRoutes';
import accountRoutes from './accountRoutes';


class Accounts extends Component {
  render() {
    return (
      <MappedRoutes routes = { accountRoutes }/>
    )
  }
}

export default Accounts;
