import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Register from './Register';
import registerUser from '../../../redux/registerModule/registerFunctions';
import { loginUser } from '../../../redux/loginModule/loginFunctions';

class RegisterContainer extends Component {
/*
  componentDidUpdate(prevProps) {
    console.log('register updated');
    const { register, history } = this.props;
    const { redirect } = register;
    if (prevProps.register.redirect !== redirect) {
      this.props.history.push('/');
      console.log('register push history!', this.props.history);
    }
  }
*/
  render() {
    return (
      <Register { ...this.props} />
    )
  }
}

const mapState = ({ register, error }) => ({
  register,
  error,
})

const mapDispatch = {
  loginUser,
}



export default withRouter(connect(mapState, mapDispatch)(RegisterContainer));
