import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import styles from './views/sharedCss/app.css';
import { withRouter } from 'react-router-dom';
import routes from './routes';
import MappedRoutes from './views/generalComponents/MappedRoutes';


class App extends Component {
  render() {
    return (
      <Fragment>
        <MappedRoutes routes = { routes.routes } />
      </Fragment>
    )
  }
}



// use withRouter to pass location to App
export default withRouter(App);
