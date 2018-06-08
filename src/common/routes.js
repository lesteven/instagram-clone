import ClientTemplate from './views/clientTemplate/ClientTemplate';


const prefix = '';

const routes = {

  routes: [
    {
      prefix,
      path: '/',
      component: ClientTemplate,
      exact: false,
      title: '/',
    },
  ],

};

export default routes;
