import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import styles from './sharedViews/sharedCss.css';
import TopLvlRoutes from './sharedViews/topLvlRoutes/TopLvlRoutes';


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
export default App;
