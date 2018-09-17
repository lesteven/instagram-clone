import React, { Component } from 'react';

function SearchBar(props) {
  const { keyPress, search, findUser } = props;
  return (
    <div className='nav-searchbar'>
      <input 
        type = 'text' 
        placeholder = 'Search'
        value = { search.value }
        onChange = { keyPress }
        onKeyPress = { findUser }
      />
    </div>
  )
}

export default SearchBar;
