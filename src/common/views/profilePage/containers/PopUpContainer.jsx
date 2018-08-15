import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SettingsPopUp from '../components/SettingsPopUp';
import { toggleClick } from '../../../redux/popUpModule/popUpModule';
import { toggleFn } from '../../../redux/popUpModule/popUpFunctions';
import { logOutUser } from '../../../redux/loginModule/loginFunctions';


class PopUpContainer extends Component {
  onClick = toggleFn.bind(this);
  goToEdit = () => {
    const { history } = this.props;
    history.push('/accounts/edit');
  }
  onKeyPress= (e) => {
    const { display } = this.props.popUp.popUpDisplay;
    if (e.key === 'Escape' && display === 'flex') {
      this.onClick(e);
    }
  }
  logOut = () => {
    const { logOutUser } = this.props;
    const { userName } = this.props.login;
    const logoutUrl = `/api/login/logout/${userName}`; 
    logOutUser(logoutUrl); 
  }
  componentDidMount() {
    document.addEventListener("keydown", this.onKeyPress, false);
  }
  render() {
    const { login, popUp } = this.props;
    const { userName } = login;
    const { popUpDisplay } = popUp;
    return (
      <SettingsPopUp 
        user = { userName }
        display = { popUpDisplay }
        onClick = { this.onClick }
        goToEdit = { this.goToEdit }
        logOut = { this.logOut }
      />
    )
  }
}
const mapState = ({ popUp, login}) => ({
  popUp,
  login,
})

const mapDispatch = {
  toggleClick,
  logOutUser,
}

export default withRouter(connect(mapState, mapDispatch)(PopUpContainer));
