import React from 'react';
import PropTypes from 'prop-types';


const FlashMsg = (props) => {
  const { className, msg } = props;
  return (
    <p className = { className }> { msg } </p>
  )
}

FlashMsg.propTypes = {
  className : PropTypes.oneOf(['fail','success'])
}

export default FlashMsg
