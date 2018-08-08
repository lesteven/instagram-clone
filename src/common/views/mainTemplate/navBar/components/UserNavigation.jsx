import React, { Component } from 'react';
import { Link } from 'react-router-dom';


function UserNavigation() {
  return (
    <div className='user-nav'>
      <img src='/compass.svg'/>
      <img src='/heart.svg'/>
      <img src='/user.svg'/>
    </div>
  )
}

export default UserNavigation;
