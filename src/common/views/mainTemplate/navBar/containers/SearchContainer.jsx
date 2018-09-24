import { connect } from 'react-redux';
import React, { Component, Fragment } from 'react';
import SearchBar from '../components/SearchBar';
import {
  keyPress,
  clearSearch,
} from '../../../../redux/searchModule/searchModule';
import searchUser from '../../../../redux/searchModule/searchFunctions';
import SearchResult from '../components/SearchResults';


class SearchContainer extends Component {
  findUser = (e) => {
    if (e.key == 'Enter') {
      const { searchUser, search } = this.props;
      console.log('enter!');
      searchUser(`/api/search/${search.value}`);
    } 
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
            <SearchResult data = { data } clear = { clearSearch } />
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
};

export default connect(mapState, mapDispatch)(SearchContainer);
