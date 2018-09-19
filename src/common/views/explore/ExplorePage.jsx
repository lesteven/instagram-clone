import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import getExplore from '../../redux/exploreModule/exploreFunctions';
import MainTemplate from '../mainTemplate/MainTemplate';
import Explore from './components/Explore';

const api = '/api/explore';

class ExplorePage extends Component {
  static fetchData({ store, params }, url) {
    console.log('fetch from explore'); 
    const fullUrl = `${url}${api}`;
    return store.dispatch(getExplore(fullUrl));
  }
  componentDidMount() {
    const { login, explore, getExplore, history } = this.props;
    if (!login.redirect) {
      history.push('/'); 
    }
    else if (!explore.feed) {
      getExplore(api);
    }
  }
  render() {
    const { explore } = this.props;
    return (
      <MainTemplate>
        { explore.feed? 
          <Explore />
          :null }
      </MainTemplate>
    )
  }
}

const mapState = ({ login, explore }) => ({
  login,
  explore,
});

const mapDispatch = {
  getExplore,
}

export default connect(mapState, mapDispatch)(ExplorePage);
