import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import styles from './sharedViews/sharedCss.css';
import TopLvlRoutes from './views/topLvlRoutes/TopLvlRoutes';
import { withRouter } from 'react-router-dom';
import routes from './routes';

class App extends Component {
  render() {
    return (
      <Fragment>
        <TopLvlRoutes />
      </Fragment>
    )
  }
}




// use withRouter to pass location to App
export default withRouter(App);
