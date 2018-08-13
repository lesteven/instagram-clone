import React, { Component } from 'react';
import styles from '../css/settingsPopUp.css';


class SettingsPopUp extends Component {
  test = (e) => {
    e.preventDefault();
    const { history } = this.props;
    history.push('/accounts/edit');
  }
  render() {
  const { display, onClick } = this.props;
    return (
      <div 
        className = 'popup-wrapper' 
        style={ display }
        onClick = { onClick }
        >
        <div className ='settings-popup'>
          <button onClick = {this.test}>Privacy and Security</button>
          <button>Log out</button>
          <button>Cancel</button>
        </div>
      </div>
    )
  }
}

export default SettingsPopUp;
