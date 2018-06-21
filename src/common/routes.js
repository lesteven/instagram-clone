import PublicTemplate from './views/publicTemplate/PublicTemplate';
import makeRouteObject from './utils/makeRouteObject';
import navRoutes from './views/navRoutes';


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
    ...navRoutes.routes,
  ],

};


export default routes;
