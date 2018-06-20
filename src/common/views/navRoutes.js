import makeRouteObject from '../utils/makeRouteObject';
import Home from './home/Home';
import About from './about/About';


const prefix = '';
const aboutURL = '/about';
const aboutTitle = 'About';

const homeURL = '/';
const homeTitle = 'Home';

const navRoutes = {
  routes: [
    makeRouteObject(prefix, homeURL, Home, true, homeTitle),
    makeRouteObject(prefix, aboutURL, About, true, aboutTitle),
  ],
};

export default navRoutes;
