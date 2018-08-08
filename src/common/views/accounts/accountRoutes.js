import makeRouteObject from '../../utils/makeRouteObject';
import LoginPage from '../auth/components/LoginPage';
import NotFound from '../generalComponents/NotFound';

const exactTrue = true;

const prefix = '/accounts';

const main = '';

const login = '/login';
const loginTitle = 'Login';


const accountRoutes = [
  makeRouteObject(prefix, main, NotFound, exactTrue, main),
  makeRouteObject(prefix, login, LoginPage, exactTrue, loginTitle),
];

export default accountRoutes;
