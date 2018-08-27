import makeRouteObject from '../../utils/makeRouteObject';
import HomeContainer from './containers/HomeContainer';
import ExplorePage from '../explore/ExplorePage';
import ProfilePage from '../profilePage/ProfilePage';
import UploadPage from '../upload/UploadPage';


const exactTrue = true;

const prefix = '';

const home = '/';
const homeTitle = 'Home';

const exploreUrl = '/explore';
const exploreTitle = 'ExplorePagePage';

const uploadUrl = '/upload';
const uploadTitle = 'Upload';

const profileUrl = '/:profile';
const title = '';


const accountRoutes = [
  makeRouteObject(prefix, home, HomeContainer, exactTrue, homeTitle),
  makeRouteObject(prefix, exploreUrl, ExplorePage, exactTrue, exploreTitle),
  makeRouteObject(prefix, uploadUrl, UploadPage, exactTrue, uploadTitle),
  makeRouteObject(prefix, profileUrl, ProfilePage, exactTrue, title),
];

export default accountRoutes;
