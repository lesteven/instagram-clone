import makeRouteObject from '../utils/makeRouteObject';
import Explore from './explore/Explore';


const prefix = '/template';
const exactTrue = true;
// const exactFalse = false;

const exploreURL = '/explore';
const exploreTitle = 'Explore';


const navRoutes = [
  makeRouteObject(prefix, exploreURL, Explore, exactTrue, exploreTitle),

];

export default navRoutes;
