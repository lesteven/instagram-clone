import React, { Component } from 'react'


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

export default Input;
