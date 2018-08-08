import React, { Component } from 'react';
import { Link } from 'react-router-dom';


function UserNavigation(props) {
  const { user } = props.login;
  return (
    <div className='user-nav'>
      <img src='/compass.svg'/>
      <img src='/heart.svg'/>
      <Link to = { `/${user}` }><img src='/user.svg'/></Link>
    </div>
  )
}

export default UserNavigation;
