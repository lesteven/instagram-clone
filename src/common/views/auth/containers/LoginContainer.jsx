import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Login from './Login';
import { loginUser } from '../../../redux/loginModule/loginFunctions';


class LoginContainer extends Component {
  componentDidUpdate(prevProps) {
    console.log('updated');
    const { login, history } = this.props;
    const { redirect } = login;
    if (prevProps.login.redirect !== redirect) {
      this.props.history.push('/');
      // console.log(this.props.history);
    }
  }
  componentDidMount() {
    const { login, history } = this.props;
    if (login.userName) {
      history.push('/');
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
