import PublicTemplate from './views/publicTemplate/PublicTemplate';


export const makeRouteObject = 
  (prefix, path, component, exact, title) => ({
  prefix,
  path,
  component,
  exact,
  title,
})

const prefix = '';

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
    makeRouteObject(prefix, '/', PublicTemplate, false, '/'),
  ],

};

export default routes;
