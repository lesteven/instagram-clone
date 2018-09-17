import { connect } from 'react-redux';
import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import { keyPress } from '../../../../redux/searchModule/searchModule';
import searchUser from '../../../../redux/searchModule/searchFunctions';

class SearchContainer extends Component {
  findUser = (e) => {
    if (e.key == 'Enter') {
      const { searchUser, search } = this.props;
      console.log('enter!');
      searchUser(`/api/search/${search.value}`);
    } 
  }
  render() {
    return (
      <SearchBar 
        {...this.props}
        findUser = { this.findUser }
      />
    )
  }
}

const mapState = ({ search }) => ({
  search,
});

const mapDispatch = {
  keyPress,
  searchUser,
};

export default connect(mapState, mapDispatch)(SearchContainer);
