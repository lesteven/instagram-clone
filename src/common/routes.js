import makeRouteObject from './utils/makeRouteObject';
import HomePage from './views/home/HomePage';
import AboutPage from './views/about/AboutPage';
import AccountsPage from './views/accounts/AccountsPage';

const prefix = '';
const exactTrue = true;
const exactFalse = false;

const homeURL = '/';
const homeTitle = 'Home';

const aboutURL = '/about';
const aboutTitle = 'About';

const accountsURL = '/accounts';
const accountsTitle = 'Accounts';


const routes = {
  routes: [
    makeRouteObject(
      prefix,
      aboutURL,
      AboutPage,
      exactTrue,
      aboutTitle,
    ),
    makeRouteObject(
      prefix,
      accountsURL,
      AccountsPage,
      exactFalse,
      accountsTitle,
    ),
    makeRouteObject(
      prefix,
      homeURL,
      HomePage,
      exactFalse,
      homeTitle,
    ),
  ],
};


export default routes;
