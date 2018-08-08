import makeRouteObject from '../../utils/makeRouteObject';
import HomeContainer from './containers/HomeContainer';
import ExplorePage from '../explore/ExplorePage';
import ProfilePage from '../profilePage/ProfilePage';

const exactTrue = true;

const prefix = '';

const home = '/';
const homeTitle = 'Home';

const exploreUrl = '/explore';
const exploreTitle = 'ExplorePagePage';

const profileUrl = '/:profile';
const title = '';


const accountRoutes = [
  makeRouteObject(prefix, home, HomeContainer, exactTrue, homeTitle),
  makeRouteObject(prefix, exploreUrl, ExplorePage, exactTrue, exploreTitle),
  makeRouteObject(prefix, profileUrl, ProfilePage, exactTrue, title),
];

export default accountRoutes;
