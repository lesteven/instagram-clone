import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from '../../routes'; 

class TopLvlRoutes extends Component {
  routes = () => {
    return routes.routes.map(e => {
      <Route exact = { e.exact } path = { e.path } 
          component = { e.component } key = { e.path} />
    })
  }
  render() {
    return (
      <Switch>
        { this.routes() }
      </Switch>
    )
  }
}

export default TopLvlRoutes;
