import routes from './routes';
import accountRoutes from './views/accounts/accountRoutes';
import homeRoutes from './views/home/homeRoutes';


const masterRoutes = [
  ...routes.routes,
  ...accountRoutes,
  ...homeRoutes,
];

export default masterRoutes;
