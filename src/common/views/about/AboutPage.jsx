import React, { Component } from 'react';
import styles from './css/about.css';
import MainTemplate from '../mainTemplate/MainTemplate';
import data from './data';


class AboutPage extends Component {
  render() {
    console.log('about page!');
    return (
      <MainTemplate>
        <div className = 'about'>
        <h2>About </h2> 
        <p>
          <b className='about-name'>Steven Le  </b>
          (<a href= 'https://www.imstevenle.com'>portfolio</a>)
        </p>
        { data.map((each, index) => <p key = {index}>{ each }</p>) }
          <p>
            You can check out the code at <a href = 'https://github.com/lesteven/instagram-clone'>
              github 
            </a>
          </p>
        </div>
      </MainTemplate>
    )
  }
}

export default AboutPage;
