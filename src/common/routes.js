import makeRouteObject from './utils/makeRouteObject';
import HomeNav from './views/home/HomeNav';
import About from './views/about/About';
import Accounts from './views/accounts/Accounts';

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
      About,
      exactTrue,
      aboutTitle,
    ),
    makeRouteObject(
      prefix,
      accountsURL,
      Accounts,
      exactFalse,
      accountsTitle,
    ),
    makeRouteObject(
      prefix,
      homeURL,
      HomeNav,
      exactFalse,
      homeTitle,
    ),
  ],
};


export default routes;
