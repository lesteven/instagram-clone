import React, { Component } from 'react';
import IconContainer from './containers/IconContainer';
import SearchContainer from './containers/SearchContainer';
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


class NavBar extends Component {
  render() {
    return (
      <div className='nav-wrapper'>
        <nav className='nav-bar max-width'>
          <Logo />
          <SearchContainer />
          <IconContainer />
        </nav>    
      </div>
    )
  }
}

export default NavBar;
