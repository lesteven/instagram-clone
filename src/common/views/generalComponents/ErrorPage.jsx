import React, { Component } from 'react';
import MainTemplate from '../mainTemplate/MainTemplate';
import { Link } from 'react-router-dom';
import styles from './css/errorPage.css';


class ErrorPage extends Component {

  render() {
    return (
      <MainTemplate>
        <div className= 'feed-wrapper'>
        <h2> Sorry, this page isn't available. </h2> 
        <p className = 'broken-link'> 
          The link you followed may be broken, 
          or the page may have been removed. 
          <Link to = '/' > Go back to Instagram.</Link></p>
        </div>
      </MainTemplate>
    )
  }
}

export default ErrorPage;
