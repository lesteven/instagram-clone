import React, { Component } from 'react'
import { connect } from 'react-redux';
import PassportRegister from '../components/PassportRegister';
import { registerUser } from '../../../redux/registerModule/registerFunctions';
import handleChange from '../inputData/handleInputChange';
import { inputData, inputState } from '../inputData/registerInput';


const url = '/api/register';

class RegisterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = inputState;
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = handleChange;
  inputData = inputData;
  mappedInputData = () => { 
    return this.inputData.map(e => 
      <input 
        key = { e.name }
        name = { e.name }
        type = { e.type } 
        value = { this.state[e.name] }
        placeholder = { e.placeHolder }
        onChange = { this.handleChange }
      />
    )
  }
  submit = (e)  => {
    e.preventDefault();
    const { registerUser } = this.props;
    registerUser(url, this.state);
  }
  render() {
    return (
      <PassportRegister submit = { this.submit }>
        { this.mappedInputData() }
      </PassportRegister>
    )
  }
}

const mapState = ({ register }) => ({
  register,
})

const mapDispatch = {
  registerUser
}

export default connect(mapState, mapDispatch)(RegisterContainer);

