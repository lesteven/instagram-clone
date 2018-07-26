import React, { Component } from 'react'
import PropTypes from 'prop-types';


class Input extends Component {

  render() {
  const { name, type, value, placeHolder, handleChange } = this.props;
    return (
      <input 
        key = { name }
        type = { type } 
        value = { value }
        placeholder = { placeHolder }
        onChange = { handleChange }
      />

    )
  }
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.strin.isRequired,
  value: PropTypes.string.isRequired,
  placeHolder: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default Input;
