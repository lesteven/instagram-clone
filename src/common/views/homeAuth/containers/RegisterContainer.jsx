import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PassportRegister from '../components/PassportRegister';
import registerUser from '../../../redux/registerModule/registerFunctions';
import handleChange from '../inputData/handleInputChange';
import { inputState, mappedInput } from '../inputData/registerInput';
import AllFlashMsgs from '../../generalComponents/AllFlashMsgs';
import { reset } from '../inputData/resetState';


const url = '/api/register';

class RegisterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = inputState;
  }
  handleChange = handleChange.bind(this);

  mappedInputData = mappedInput.bind(this);

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

RegisterContainer.propTypes = {
  register : PropTypes.object.isRequired,
  error : PropTypes.object.isRequired,
  registerUser: PropTypes.func.isRequired,
}


export default connect(mapState, mapDispatch)(RegisterContainer);

