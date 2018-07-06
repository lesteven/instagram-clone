import express from 'express';
import { handleRender } from './ssr/ssrFunctions';
import serverSetup from './setup/serverSetup';
import mountPublicRoutes from './routes/mountPublicRoutes';
import mountPrivateRoutes from './routes/mountPrivateRoutes';
import handleError from './routes/errorExample';


const app = express();

serverSetup(app);

mountPublicRoutes(app);
mountPrivateRoutes(app);

handleError(app);

// react
app.use(handleRender);


if (app.get('env') === 'development') {
  console.log('Development mode!');
} else {
  console.log('Production mode!');
}


export default app;
