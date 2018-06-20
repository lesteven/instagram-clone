import PublicTemplate from './views/publicTemplate/PublicTemplate';
import makeRouteObject from './utils/makeRouteObject';


const prefix = '';
const homeURL = '/';


const routes = {

  routes: [
  /*
    {
      prefix,
      path: '/',
      component: PublicTemplate,
      exact: false,
      title: '/',
    },
  */
    makeRouteObject(prefix, homeURL, PublicTemplate, false, homeURL),
  ],

};

export default routes;
