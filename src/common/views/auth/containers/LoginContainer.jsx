import { connect } from 'react-redux';
import Login from './Login';
import loginUser from '../../../redux/loginModule/loginFunctions';


const mapState = ({ login, error}) => ({
  login,
  error,
})

const mapDispatch = {
  loginUser,
}


export default connect(mapState, mapDispatch)(Login);
