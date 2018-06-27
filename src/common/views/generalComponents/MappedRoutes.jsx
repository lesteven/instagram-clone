import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';


function MappedRoutes({ routes }) {
  return (
    <Switch>
      { routes.map(e => 
      <Route exact = { e.exact } path = { `${e.prefix}${e.path}` } 
          component = { e.component } key = { e.path} />
      ) }
    </Switch>
  )
}

export default MappedRoutes;
