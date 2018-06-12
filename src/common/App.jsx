import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import styles from './sharedViews/sharedCss.css';

class App extends Component {
  render() {
    // mapped out client routes for reactRouter
    return (
      <Fragment>
        'hello react page!'
      </Fragment>
    )
  }
}




// use withRouter to pass location to App
export default App;


