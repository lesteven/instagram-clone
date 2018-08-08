import makeRouteObject from '../../utils/makeRouteObject';
import HomeContainer from './containers/HomeContainer';
import ExplorePage from '../explore/ExplorePage';
import UserPage from '../userPage/UserPage';

const exactTrue = true;

const prefix = '';

const home = '/';
const homeTitle = 'Home';

const exploreUrl = '/explore';
const exploreTitle = 'ExplorePagePage';

const userUrl = '/:profile';
const title = '';


const accountRoutes = [
  makeRouteObject(prefix, home, HomeContainer, exactTrue, homeTitle),
  makeRouteObject(prefix, exploreUrl, ExplorePage, exactTrue, exploreTitle),
  makeRouteObject(prefix, userUrl, UserPage, exactTrue, title),
];

export default accountRoutes;
