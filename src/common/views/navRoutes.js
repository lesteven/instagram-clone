import makeRouteObject from '../utils/makeRouteObject';
import Explore from './explore/Explore';
import LoginContainer from './homeAuth/containers/LoginContainer';

const prefix = '/template';
const exactTrue = true;
// const exactFalse = false;

const exploreURL = '/explore';
const exploreTitle = 'Explore';

const accounts = '/accounts';
const acclogin = '/login';
const loginTitle = 'Login';

const navRoutes = [
  makeRouteObject(prefix, exploreURL, Explore, exactTrue, exploreTitle),
  makeRouteObject(accounts, acclogin, LoginContainer, exactTrue, loginTitle),
];

export default navRoutes;
