import { connect } from 'react-redux';
import React, { Component, Fragment } from 'react';
import SearchBar from '../components/SearchBar';
import {
  keyPress,
  clearSearch,
} from '../../../../redux/searchModule/searchModule';
import searchUser from '../../../../redux/searchModule/searchFunctions';
import SearchResult from '../components/SearchResults';
import { clearProfilePage } from '../../../../redux/profileModule/profileModule';

class SearchContainer extends Component {
  findUser = (e) => {
    if (e.key == 'Enter') {
      const { searchUser, search } = this.props;
      console.log('enter!');
      searchUser(`/api/search/${search.value}`);
    } 
  }
  clear = () => {
    const { clearSearch, clearProfilePage } = this.props;
    clearSearch()
    clearProfilePage();
  }
  render() {
    const { clearSearch } = this.props;
    const { data } = this.props.search;
    return (
      <Fragment>
        <SearchBar 
          {...this.props}
          findUser = { this.findUser }
          >
          {data? 
            <SearchResult data = { data } clear = { this.clear } />
            : null } 
        </SearchBar>
      </Fragment>
    )
  }
}

const mapState = ({ search }) => ({
  search,
});

const mapDispatch = {
  keyPress,
  searchUser,
  clearSearch,
  clearProfilePage,
};

export default connect(mapState, mapDispatch)(SearchContainer);
