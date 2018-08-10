import makeRouteObject from '../../utils/makeRouteObject';
import LoginPage from '../auth/components/LoginPage';
import NotFound from '../generalComponents/NotFound';
import EditAccounts from './components/EditAccounts';


const exactTrue = true;

const prefix = '/accounts';

const main = '';

const login = '/login';
const loginTitle = 'Login';

const edit = '/edit';
const editTitle = 'Edit';

const accountRoutes = [
  makeRouteObject(prefix, main, NotFound, exactTrue, main),
  makeRouteObject(prefix, login, LoginPage, exactTrue, loginTitle),
  makeRouteObject(prefix, edit, EditAccounts, exactTrue, editTitle),
];

export default accountRoutes;
