import React from 'react';

const FlashMsg = (props) => {
  const { className, msg } = props;
  return (
    <p className = { className }> { msg } </p>
  )
}

export default FlashMsg
