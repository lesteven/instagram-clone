import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Login from './Login';
import { loginUser } from '../../../redux/loginModule/loginFunctions';


class LoginContainer extends Component {
/*
  componentDidMount() {
    console.log('mounted');
    const { redirect } = this.props.login;
   // if (redirect) {
      this.props.history.push('/');
    //}
  }
*/
  componentDidUpdate(prevProps) {
    console.log('updated');
    const { login, history } = this.props;
    const { redirect } = login;
    if (prevProps.login.redirect !== redirect) {
      this.props.history.push('/');
      // console.log(this.props.history);
    }
  }
  render() {
    return (
      <Login {...this.props}/>
    )
  }
}
const mapState = ({ login, error}) => ({
  login,
  error,
})

const mapDispatch = {
  loginUser,
}


export default withRouter(connect(mapState, mapDispatch)(LoginContainer));
