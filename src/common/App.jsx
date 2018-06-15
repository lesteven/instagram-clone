import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import styles from './sharedViews/sharedCss.css';


class App extends Component {
  render() {
    return (
      <Fragment>
        'hello react page!'
      </Fragment>
    )
  }
}




// use withRouter to pass location to App
export default App;
