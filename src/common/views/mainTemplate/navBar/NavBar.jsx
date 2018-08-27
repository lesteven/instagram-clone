import React, { Component } from 'react';
import IconContainer from './containers/IconContainer';
import styles from './navbar.css';
import { Link } from 'react-router-dom';


function Logo() {
  return (
    <div className='nav-logo'>
      <Link to = '/'><img src='/ig-logo.svg'/></Link>
      <div></div>
      <Link to = '/'><h1> Instagram</h1></Link>
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
          <IconContainer />
        </nav>    
      </div>
    )
  }
}

export default NavBar;
