import React, { Component } from 'react';
import styles from '../css/settingsPopUp.css';


class SettingsPopUp extends Component {

  render() {
    return (
      <div className = 'popup-wrapper'>
        <div className ='settings-popup'>
          <button>Privacy and Security</button>
          <button>Log out</button>
          <button>Cancel</button>
        </div>
      </div>
    )
  }
}

export default SettingsPopUp;
