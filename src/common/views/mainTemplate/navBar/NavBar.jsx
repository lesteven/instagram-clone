import React, { Component } from 'react';
import UserNavigation from './components/UserNavigation';
import styles from './navbar.css';

function Logo() {
  return (
    <div className='nav-logo'>
      <img src='/ig-logo.svg'/>
      <div></div>
      <h1> Instagram</h1>
    </div>
  )
} 

function SearchBar() {
  return (
    <div className='nav-searchbar'>
      <input type='text' placeholder='Search'/>
    </div>
  )
}


class NavBar extends Component {
  render() {
    return (
      <div className='nav-wrapper'>
        <nav className='nav-bar max-width'>
          <Logo />
          <SearchBar />
          <UserNavigation />
        </nav>    
      </div>
    )
  }
}

export default NavBar;
