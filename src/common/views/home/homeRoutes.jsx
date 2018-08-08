import makeRouteObject from '../../utils/makeRouteObject';
import HomeContainer from './HomeContainer';
import ExploreContainer from '../explore/containers/ExploreContainer';


const exactTrue = true;

const prefix = '';

const home = '/';
const homeTitle = 'Home';

const exploreUrl = '/explore';
const exploreTitle = 'ExploreContainer';


const accountRoutes = [
  makeRouteObject(prefix, home, HomeContainer, exactTrue, homeTitle),
  makeRouteObject(prefix, exploreUrl, ExploreContainer, exactTrue, exploreTitle),
];

export default accountRoutes;
