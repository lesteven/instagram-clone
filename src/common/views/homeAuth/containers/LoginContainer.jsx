import { connect } from 'react-redux';
import Login from './Login';
import loginUser from '../../../redux/loginModule/loginFunctions';


const mapState = ({ login, error}) => ({
  login,
  error,
})

const mapDispatch = (state) => ({
  loginUser,
})


export default connect(mapState, mapDispatch)(Login);
