import { connect } from 'react-redux';
import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import { keyPress } from '../../../../redux/searchModule/searchModule';

class SearchContainer extends Component {

  render() {
    return (
      <SearchBar {...this.props}/>
    )
  }
}

const mapState = ({ search }) => ({
  search,
});

const mapDispatch = {
  keyPress,
};

export default connect(mapState, mapDispatch)(SearchContainer);
