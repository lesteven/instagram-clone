import { connect } from 'react-redux';
import Register from './Register';
import registerUser from '../../../redux/registerModule/registerFunctions';

const mapState = ({ register, error }) => ({
  register,
  error,
})

const mapDispatch = {
  registerUser,
}



export default connect(mapState, mapDispatch)(Register);
