import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import HeaderSection from '../components/HeaderSection';
import SettingsPopUp from '../components/SettingsPopUp';


class SectionContainer extends Component {
  onClick = (e) => {
    e.preventDefault();
    console.log('clicked!!');
  }
  render() {
    const { profile } = this.props.match.params;
    return (
      <Fragment>
        <SettingsPopUp />
        <HeaderSection
          onClick = { this.onClick }
          profile = { profile }
        /> 
      </Fragment>
    )
  }
}


const mapState = ({ login }) => ({
  login,
})

const mapDispatch = {

}

export default withRouter(connect(mapState, mapDispatch)(SectionContainer));
