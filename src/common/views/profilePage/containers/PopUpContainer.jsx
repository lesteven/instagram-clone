import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SettingsPopUp from '../components/SettingsPopUp';
import { toggleClick } from '../../../redux/popUpModule/popUpModule';
import { toggleFn } from '../../../redux/popUpModule/popUpFunctions';


class PopUpContainer extends Component {
  onClick = toggleFn.bind(this);
  render() {
    const { login, popUp, history } = this.props;
    const { user } = login;
    const { popUpDisplay } = popUp;
    return (
      <SettingsPopUp 
        history = { history }
        user = { user }
        display = { popUpDisplay }
        onClick = { this.onClick }
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
}

export default withRouter(connect(mapState, mapDispatch)(PopUpContainer));
