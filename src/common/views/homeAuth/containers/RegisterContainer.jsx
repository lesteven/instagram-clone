import { connect } from 'react-redux';
import PassportRegister from '../components/PassportRegister';
import registerUser from '../../../redux/registerModule/registerFunctions';

const mapStateToProps = ({ register }) => ({
  register,
})

const mapDispatchToProps = {
  registerUser
}

const PpRegisterContainer = 
  connect(mapStateToProps, mapDispatchToProps)(PassportRegister);

export default PpRegisterContainer;
