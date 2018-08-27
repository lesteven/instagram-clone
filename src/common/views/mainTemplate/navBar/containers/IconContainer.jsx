import { connect } from 'react-redux';
import ProfileNav from '../components/ProfileNav';


const mapState = ({ login }) => ({
  login,
})

const mapDispatch = {

}

export default connect(mapState, mapDispatch)(ProfileNav);
