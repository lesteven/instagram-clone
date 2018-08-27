import { connect } from 'react-redux';
import Home from '../components/Home';

const mapState = ({ login }) => ({
  login,
})

const mapDispatch = {

}

export default connect(mapState, mapDispatch)(Home);
