import React, { Component } from 'react';
import styles from '../css/searchResults.css';
import { Link } from 'react-router-dom';


function SearchResults({ data }) {
  return (
    <div className = 'search-results'>
      <div className = 'arrow'></div>
        <div className = 'all-search-data'>
          { data.map((e) => 
            <Link to = {`/${e.username}`} 
              key = { e.username + '/' + e.name }>
            <div className = 'search-data'>
              <img src = '/user.svg' />
              <div className = 'search-userinfo'>
                <p> { e.username } </p>
                <p> { e.name } </p>
              </div>
            </div>
            </Link>
          )} 
        </div>
    </div>
  )
}

export default SearchResults;
