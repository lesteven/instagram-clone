import { connect } from 'react-redux';
import UserNavigation from '../components/UserNavigation';


const mapState = ({ login }) => ({
  login,
})

const mapDispatch = {

}

export default connect(mapState, mapDispatch)(UserNavigation);
