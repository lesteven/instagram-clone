import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import styles from './views/sharedCss/app.css';
import { withRouter } from 'react-router-dom';
import routes from './routes';
import MappedRoutes from './views/generalComponents/MappedRoutes';
import { updateScreenSize } from './redux/viewModule/viewModule';

class App extends Component {
  getScreenSize = () => {
    const { updateScreenSize } = this.props;
    updateScreenSize(window.innerWidth);
  }
  componentDidMount() {
    window.addEventListener('resize', this.getScreenSize);
    this.getScreenSize();
  }
  render() {
    return (
      <Fragment>
        <MappedRoutes routes = { routes.routes } />
      </Fragment>
    )
  }
}


const mapDispatch = {
  updateScreenSize,
}

// use withRouter to pass location to App
export default withRouter(connect(null, mapDispatch)(App));
