import { connect } from 'react-redux';
import Explore from '../Explore';


const mapState = ({ login }) => ({
  login,
})

const mapDispatch = {

}

export default connect(mapState, mapDispatch)(Explore);
