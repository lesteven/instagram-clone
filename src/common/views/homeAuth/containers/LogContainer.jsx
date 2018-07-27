import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AuthForm from '../components/AuthForm';
import { inputState, mappedInput } from '../inputData/loginInput';
import handleChange from '../inputData/handleInputChange';
import { reset } from '../inputData/resetState';
import Title from '../components/Title';


class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = inputState;
  }
  mappedInputData = mappedInput.bind(this);

  handleChange = handleChange.bind(this);

  resetState = reset.bind(this)(inputState);

  submit = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <div className = 'signup-wrapper'>
        <Title />
        <AuthForm submit = { this.submit } label = 'Log in'>
          { this.mappedInputData() }
        </AuthForm>
      </div>
    )
  }
}

/*
const mapState = (state) => ({

})

const mapDispatch = (state) => ({

})
*/
export default connect(null, null)(LoginContainer);
