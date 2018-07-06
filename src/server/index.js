import express from 'express';
import { handleRender } from './ssr/ssrFunctions';
import serverSetup from './setup/serverSetup';
import publicRoutes from './routes/publicRoutes';
import privateRoutes from './routes/privateRoutes';
import handleError from './routes/errorExample';


const app = express();

serverSetup(app);

app.use('/api', publicRoutes);
app.use('/api', privateRoutes);

handleError(app);

// react
app.use(handleRender);


if (app.get('env') === 'development') {
  console.log('Development mode!');
} else {
  console.log('Production mode!');
}


export default app;
