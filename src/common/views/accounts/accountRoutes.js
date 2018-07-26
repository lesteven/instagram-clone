import makeRouteObject from '../../utils/makeRouteObject';
import LoginContainer from '../homeAuth/containers/LoginContainer';


const exactTrue = true;

const prefix= '/accounts';
const login = '/login';
const loginTitle = 'Login';


const accountRoutes = [
  makeRouteObject(prefix, login, LoginContainer, exactTrue, loginTitle),
]

export default accountRoutes;
