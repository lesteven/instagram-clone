import React, { Component } from 'react';



class User extends Component {

  render() {
  const { user } = this.props.login;
  const { profile } = this.props.match.params;
    return (
      <div> hello { profile }! </div>
    )
  }
}

export default User;
