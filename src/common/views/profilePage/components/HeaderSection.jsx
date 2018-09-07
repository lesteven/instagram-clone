import React, { Component } from 'react';
import style from '../css/headerSection.css';
import { Link } from 'react-router-dom';

function DiffUser(props) {
  const { user, profile, onClick, follow } = props;
  return (
    <div className ='first-row'>
      <h1> { profile } </h1>
      { user == undefined?
        <Link to = '/accounts/login'>
          <button> Follow </button>
        </Link> :
        <button className= 'follow' onClick = { follow }> 
          Follow 
        </button>
      } 
    </div>
  )
}
function SameUser(props) {
  const { profile, onClick } = props;
  return (
    <div className ='first-row'>
      <h1> { profile } </h1>
      <Link to = '/accounts/edit'>
        <button> Edit Profile </button>
      </Link>  
      <button className='settings' onClick = { onClick }>
        <img src ='/settings.svg' />
      </button>
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
    const { user, profile, onClick } = this.props;
    return (
      <section className = 'header-section'>
        { user == profile?
          <SameUser { ...this.props }/>:
          <DiffUser { ...this.props }/> 
        }
        <SecondRow />
        <ThirdRow />
      </section>
    )
  }
}


export default HeaderSection;
