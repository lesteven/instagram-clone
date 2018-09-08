import React from 'react';
import { Link } from 'react-router-dom';
import style from './css/paginate.css';


function Paginate({ page, id, path }) {
  return (
    <div className = 'paginate'>
      <span><Link to = ''> Newer </Link></span> 
      <span><Link to = ''> Older </Link></span> 
    </div>
  )
}

export default Paginate;
