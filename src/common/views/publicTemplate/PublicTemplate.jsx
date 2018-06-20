import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

class PublicTemplate extends Component {
  render() {
    return (
      <Fragment>
        <div className='max-width view'>
          template
        </div>
      </Fragment>
    )
  }
}

export default PublicTemplate;
