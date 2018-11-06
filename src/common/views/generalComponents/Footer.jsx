import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import styles from './css/footer.css';


function Footer({ login }) {

  return (
    <footer className = 'footer'>
      <Link to = '/about' > About </Link>
    </footer>
  )
}

export default Footer;
