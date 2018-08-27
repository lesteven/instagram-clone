import { connect } from 'react-redux';
import Explore from '../components/Explore';
import { withRouter } from 'react-router-dom';


const mapState = ({ login }) => ({
  login,
})

const mapDispatch = {

}

export default withRouter(connect(mapState, mapDispatch)(Explore));
