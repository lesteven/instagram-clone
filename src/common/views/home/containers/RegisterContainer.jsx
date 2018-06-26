import { connect } from 'react-redux';
import PassportRegister from '../components/PassportRegister';
import { registerAC } from 
  '../../../reduxModules/registerModule/registerModule';


const mapStateToProps = ({ register }) => ({
  register,
})

const mapDispatchToProps = {
  registerAC
}

const PpRegisterContainer = 
  connect(mapStateToProps, mapDispatchToProps)(PassportRegister);

export default PpRegisterContainer;
