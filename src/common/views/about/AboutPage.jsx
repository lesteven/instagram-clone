import React, { Component } from 'react';
import styles from './css/about.css';
import MainTemplate from '../mainTemplate/MainTemplate';

class AboutPage extends Component {
  render() {
    console.log('about page!');
    return (
      <MainTemplate>
        <div className = 'about'>
        <h2> About </h2> 
        <b>Steven Le</b>
        </div>
      </MainTemplate>
    )
  }
}

export default AboutPage;
