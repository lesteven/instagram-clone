import React, { Component } from 'react'
import { connect } from 'react-redux';
import PassportRegister from '../components/PassportRegister';
import registerUser from '../../../redux/registerModule/registerFunctions';
import handleChange from '../inputData/handleInputChange';
import { inputState, mappedInput } from '../inputData/registerInput';


const url = '/api/register';

class RegisterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = inputState;
    this.handleChange = this.handleChange.bind(this);
    this.mappedInputData = this.mappedInputData.bind(this);
  }
  handleChange = handleChange;

  mappedInputData = mappedInput;

  submit = (e)  => {
    e.preventDefault();
    const { registerUser } = this.props;
    registerUser(url, this.state);
  }
  render() {
  const error = this.props.error[url];
  const { register } = this.props;
    return (
      <PassportRegister 
        error = { error }
        submit = { this.submit }
        success = { register.success } >
        { this.mappedInputData() }
      </PassportRegister>
    )
  }
}

const mapState = ({ register, error }) => ({
  register,
  error,
})

const mapDispatch = {
  registerUser
}

export default connect(mapState, mapDispatch)(RegisterContainer);

