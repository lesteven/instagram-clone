import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AuthForm from '../components/AuthForm';
import handleChange from '../inputData/handleInputChange';
import AllFlashMsgs from '../../generalComponents/AllFlashMsgs';
import { reset } from '../inputData/resetState';



class AuthWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.inputState;
  }
  handleChange = handleChange.bind(this);

  mappedInputData = this.props.mappedInput.bind(this);

  resetState = reset.bind(this)(this.props.inputState);

  submit = (e)  => {
    e.preventDefault();
    const { submit, url } = this.props;
    submit(url, this.state);
  }

  componentDidUpdate(prevProps) {
    const previous = prevProps.data.success;
    const success = this.props.data.success;
    if (previous !== success) {
      setTimeout(this.resetState, 300);
    }
  }

  render() {
  const { label, url } = this.props; 
  const error = this.props.error[url];
  const success = this.props.data.success;
    return (
      <Fragment>
        <AuthForm submit = { this.submit } label = { label }>
          { this.mappedInputData() }
        </AuthForm>
        <AllFlashMsgs error = { error } success = { success } />
      </Fragment>
    )
  }
}


AuthWrapper.propTypes = {
  error : PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  inputState: PropTypes.object.isRequired,
  mappedInput: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}


export default AuthWrapper;

