import express from 'express';
import { handleRender } from './ssr/ssrFunctions';
import serverSetup from './setup/serverSetup';
import passportSetup from './setup/passportSetup';
import publicRoutes from './routes/publicRoutes';
import privateRoutes from './routes/privateRoutes';
import handleError from './routes/errorRoutes';

const debug = require('debug')('http');

const app = express();

serverSetup(app);
passportSetup(app);

const api = '/api';
const notFound = `${api}/*`;

app.use(api, publicRoutes);
app.use(api, privateRoutes);
app.use(notFound, (req, res) => {
  res.status(404).send('nothing here');
});

handleError(app);

// react
app.use(handleRender);


if (app.get('env') === 'development') {
  debug('Development mode!');
} else {
  debug('Production mode!');
}


export default app;
