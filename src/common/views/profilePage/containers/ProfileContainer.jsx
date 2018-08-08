import { connect } from 'react-redux';
import Profile from '../components/Profile';
import { withRouter } from 'react-router-dom';


const mapState = ({ login }) => ({
  login,
})

const mapDispatch = {

}

export default withRouter(connect(mapState, mapDispatch)(Profile));
