import React, { Component } from 'react';
import styles from '../css/settingsPopUp.css';


class SettingsPopUp extends Component {
  render() {
  const { display, onClick, goToEdit, logOut } = this.props;
    return (
      <div 
        className = 'popup-wrapper' 
        style={ display }
        onClick = { onClick }
        >
        <div className ='settings-popup'>
          <button onClick = { goToEdit }>Privacy and Security</button>
          <button onClick = { logOut }>Log out</button>
          <button>Cancel</button>
        </div>
      </div>
    )
  }
}

export default SettingsPopUp;
