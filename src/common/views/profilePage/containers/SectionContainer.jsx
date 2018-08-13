import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import HeaderSection from '../components/HeaderSection';
import PopUpContainer from './PopUpContainer';
import { toggleClick } from '../../../redux/popUpModule/popUpModule';
import { toggleFn } from '../../../redux/popUpModule/popUpFunctions';


class SectionContainer extends Component {
  onClick = toggleFn.bind(this);
  render() {
    const { profile } = this.props.match.params;
    return (
      <Fragment>
        <PopUpContainer />
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
  toggleClick,
}

export default withRouter(connect(mapState, mapDispatch)(SectionContainer));
