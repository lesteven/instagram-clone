import makeRouteObject from '../../utils/makeRouteObject';
import HomeContainer from './containers/HomeContainer';
import ExplorePage from '../explore/ExplorePage';


const exactTrue = true;

const prefix = '';

const home = '/';
const homeTitle = 'Home';

const exploreUrl = '/explore';
const exploreTitle = 'ExplorePagePage';


const accountRoutes = [
  makeRouteObject(prefix, home, HomeContainer, exactTrue, homeTitle),
  makeRouteObject(prefix, exploreUrl, ExplorePage, exactTrue, exploreTitle),
];

export default accountRoutes;
