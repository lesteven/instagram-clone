import { connect } from 'react-redux';
import User from '../components/User';
import { withRouter } from 'react-router-dom';


const mapState = ({ login }) => ({
  login,
})

const mapDispatch = {

}

export default withRouter(connect(mapState, mapDispatch)(User));
