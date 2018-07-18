import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import PassportRegister from '../components/PassportRegister';
import registerUser from '../../../redux/registerModule/registerFunctions';
import handleChange from '../inputData/handleInputChange';
import { inputState, mappedInput } from '../inputData/registerInput';
import FlashMsg from '../../generalComponents/FlashMsg';
import AllFlashMsgs from '../../generalComponents/AllFlashMsgs';
import { reset } from '../inputData/resetState';


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

  resetState = reset.bind(this)(inputState);

  submit = (e)  => {
    e.preventDefault();
    const { registerUser } = this.props;
    registerUser(url, this.state);
  }

  componentDidUpdate(prevProps) {
    const previous = prevProps.register.success;
    const success = this.props.register.success;
    if (previous !== success) {
      setTimeout(this.resetState, 300);
    }
  }

  render() {
  const error = this.props.error[url];
  const success = this.props.register.success;
    return (
      <Fragment>
        <PassportRegister submit = { this.submit } >
          { this.mappedInputData() }
        </PassportRegister>
        <AllFlashMsgs error = { error } success = { success } />
      </Fragment>
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

