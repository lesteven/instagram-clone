import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SettingsPopUp from '../components/SettingsPopUp';
import { toggleClick } from '../../../redux/popUpModule/popUpModule';
import { toggleFn } from '../../../redux/popUpModule/popUpFunctions';


class PopUpContainer extends Component {
  onClick = toggleFn.bind(this);
  goToEdit = (e) => {
    e.preventDefault();
    const { history } = this.props;
    history.push('/accounts/edit');
  }
  onKeyPress= (e) => {
    if (e.key === 'Escape') {
      const { display } = this.props.popUp.popUpDisplay;
      if (display === 'flex') {
        this.onClick(e);
      } 
    }
  }
  componentDidMount() {
    document.addEventListener("keydown", this.onKeyPress, false);
    
  }
  render() {
    const { login, popUp } = this.props;
    const { user } = login;
    const { popUpDisplay } = popUp;
    return (
      <SettingsPopUp 
        user = { user }
        display = { popUpDisplay }
        onClick = { this.onClick }
        goToEdit = { this.goToEdit }
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
