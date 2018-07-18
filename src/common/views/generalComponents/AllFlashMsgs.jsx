import React, { Fragment } from 'react';
import FlashMsg from './FlashMsg';


const AllFlashMsgs= (props) => {
  const { error, success } = props;
  
  return (
    <Fragment>
      { error ?
      <FlashMsg className = 'fail' msg = { error } /> : null
      }
      { success?
      <FlashMsg className = 'success' msg = { success } /> : null
      }
    </Fragment>
  )
}

export default AllFlashMsgs;
