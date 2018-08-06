import { connect } from 'react-redux';
import Home from '../Home';

const mapState = ({ login }) => ({
  login,
})

const mapDispatch = {

}

export default connect(mapState, mapDispatch)(Home);
