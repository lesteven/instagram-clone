import makeRouteObject from '../../utils/makeRouteObject';
import LoginContainer from '../homeAuth/containers/LoginContainer';
import NotFound from '../generalComponents/NotFound';

const exactTrue = true;

const prefix= '/accounts';

const main = '';

const login = '/login';
const loginTitle = 'Login';


const accountRoutes = [
  makeRouteObject(prefix, main, NotFound, exactTrue, main),
  makeRouteObject(prefix, login, LoginContainer, exactTrue, loginTitle),
]

export default accountRoutes;
