import React, { Component } from 'react';
import IconContainer from './containers/IconContainer';
import SearchContainer from './containers/SearchContainer';
import styles from './css/navbar.css';
import { Link } from 'react-router-dom';
import RegLog from './components/RegLog';

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
    const { login } = this.props;
    return (
      <div className='nav-wrapper'>
        <nav className='nav-bar max-width'>
          <Logo />
          <SearchContainer />
          { login.userName? <IconContainer /> : <RegLog /> }
        </nav>    
      </div>
    )
  }
}

export default NavBar;
