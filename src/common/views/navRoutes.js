import makeRouteObject from '../utils/makeRouteObject';
import Home from './homeAuth/Home';
import About from './about/About';
import Accounts from './accounts/Accounts';
import PageTemplate from './pageTemplate/PageTemplate';

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

const navRoutes = [
  makeRouteObject(prefix, homeURL, Home, exactTrue, homeTitle),
  makeRouteObject(prefix, aboutURL, About, exactTrue, aboutTitle),
  makeRouteObject(
    prefix, accountsURL, Accounts, exactFalse,
    accountsTitle,
  ),
  makeRouteObject(
    prefix, templateURL, PageTemplate, exactFalse,
    templateTitle,
  ),
];

export default navRoutes;
