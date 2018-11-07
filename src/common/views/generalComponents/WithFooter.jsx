import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import styles from './css/footer.css';



function WithFooter(props) {
  return (
    <div className='max-width with-footer'>  
      <div className = 'content'>
        { props.children }
      </div>
      <footer className = 'footer'>
        <Link to = '/about' > About </Link>
      </footer>
    </div>  
  )
}

export default WithFooter;
