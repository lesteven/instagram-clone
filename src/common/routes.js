import makeRouteObject from './utils/makeRouteObject';
import Home from './views/homeAuth/Home';
import About from './views/about/About';
import Accounts from './views/accounts/Accounts';
import PageTemplate from './views/pageTemplate/PageTemplate';

const prefix = '';
const exactTrue = true;
const exactFalse = false;

const homeURL = '/';
const homeTitle = 'Home';

const aboutURL = '/about';
const aboutTitle = 'About';

const accountsURL = '/accounts';
const accountsTitle = 'Accounts';

const templateURL = '/template';
const templateTitle = 'Test';

const routes = {
  routes: [
    makeRouteObject(
      prefix,
      homeURL,
      Home,
      exactTrue,
      homeTitle,
    ),
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
      templateURL,
      PageTemplate,
      exactFalse,
      templateTitle,
    ),
  ],
};


export default routes;
