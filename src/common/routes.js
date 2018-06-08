import ClientTemplate from './views/clientTemplate/ClientTemplate';
import { Route, Link, Switch, withRouter } from 'react-router-dom';


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
