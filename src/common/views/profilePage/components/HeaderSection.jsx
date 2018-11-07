import React, { Component, Fragment } from 'react';
import style from '../css/headerSection.css';
import { Link } from 'react-router-dom';


function DiffUser(props) {
  const { user, profile, onClick, follow, followStatus } = props;
  return (
    <div className ='first-row'>
      <h1> { profile } </h1>
      { user == undefined?
          <button className = { followStatus.className }> 
            <Link to = '/accounts/login'>
            Follow 
            </Link> 
          </button> :
        <button className= { followStatus.className }
          onClick = { follow }> 
          { followStatus.text } 
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
        <button className = 'edit-profile'> 
          Edit Profile 
        </button>
      </Link>  
      <button className='settings' onClick = { onClick }>
        <img src ='/settings.svg' />
      </button>
    </div>
  )
}

function SecondRow(props) {
  const { account } = props;
//  console.log('!!!!!!1props!!!', props);
  return (
    <div className ='second-row'>
      <p> <strong>{ account.posts }</strong> 
        { account.posts < 2? ' post' : ' posts' } 
      </p>
      <p> <strong> { account.followers }</strong> 
        { account.followers === 1? ' follower': ' followers' } 
      </p>
      <p> <strong>{ account.following }</strong> following </p>
    </div>
  )
}

function SecondRow2(props) {
  const { account } = props;
//  console.log('!!!!!!1props!!!', props);
  return (
    <div className ='second-row'>
      <p> <strong>{ account.posts }</strong> 
        { account.posts < 2? ' post' : ' posts' } 
      </p>
      <p> <strong> x </strong> 
        followers
      </p>
      <p> <strong> y </strong> following </p>
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
          <SameUser { ...this.props }/>
          :<DiffUser { ...this.props }/> 
        }
        <SecondRow2 {...this.props }/>
        <ThirdRow {...this.props}/>
      </section>
    )
  }
}


export default HeaderSection;
