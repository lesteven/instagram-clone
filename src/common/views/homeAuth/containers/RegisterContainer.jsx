import React, { Component } from 'react'
import { connect } from 'react-redux';
import PassportRegister from '../components/PassportRegister';
import { registerUser, testRegister } from '../../../redux/registerModule/registerFunctions';
import preventDefault from '../../../utils/preventDefault';
import handleChange from '../../../utils/handleInputChange';
import { inputData, inputState } from '../inputData/registerInput';



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
  submit = preventDefault(() => {
    const { registerUser } = this.props;
    registerUser(url, {test:'hello'});
  })
  testSubmit = testRegister(this.props);
  render() {
    return (
      <PassportRegister submit = { this.testSubmit }>
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

