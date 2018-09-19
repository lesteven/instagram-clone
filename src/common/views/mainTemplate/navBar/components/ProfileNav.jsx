import React, { Component } from 'react';
import { Link } from 'react-router-dom';


function ProfileNav(props) {
  const { userName } = props.login;
  return (
    <div className='user-nav'>
      <Link to = { '/upload' }> <img src='/upload.svg'/></Link>
      <Link to = '/explore'><img src='/compass.svg'/></Link>
      <img src='/heart.svg'/>
      <Link to = { `/${userName}` }><img src='/user.svg'/></Link>
    </div>
  )
}

export default ProfileNav;
