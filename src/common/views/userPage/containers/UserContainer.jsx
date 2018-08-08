import { connect } from 'react-redux';
import User from './User';

const mapState = ({ login }) => ({
  login,
})

const mapDispatch = {

}

export default connect(mapState, mapDispatch)(User);
