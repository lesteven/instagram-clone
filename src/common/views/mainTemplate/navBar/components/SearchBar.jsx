import React, { Component } from 'react';

function SearchBar(props) {
  const { keyPress, search } = props;
  return (
    <div className='nav-searchbar'>
      <input 
        type = 'text' 
        placeholder = 'Search'
        value = { search.value }
        onChange = { keyPress }
      />
    </div>
  )
}

export default SearchBar;
