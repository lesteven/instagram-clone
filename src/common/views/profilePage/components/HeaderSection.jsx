import React, { Component } from 'react';
import style from '../css/headerSection.css';
import { Link } from 'react-router-dom';


function FirstRow(props) {
  const { profile } = props;
  return (
    <div className ='first-row'>
      <h1> { profile } </h1>
      <Link to = '/accounts/edit'>
        <button> Edit Profile </button>
      </Link>  
      <button className='settings'><img src ='/settings.svg' /></button>
    </div>
  )
}

function SecondRow() {
  return (
    <div className ='second-row'>
      <p> <strong>0</strong> posts </p>
      <p> <strong>0</strong> followers </p>
      <p> <strong>0</strong> following </p>
    </div>
  )
}
function ThirdRow() {
  return (
    <div className = 'third-row'>

    </div>
  )
}

class HeaderSection extends Component {
  render() {
    const { profile } = this.props;
    return (
      <section className = 'header-section'>
        <FirstRow profile = { profile } />
        <SecondRow />
        <ThirdRow />
      </section>
    )
  }
}


export default HeaderSection;
