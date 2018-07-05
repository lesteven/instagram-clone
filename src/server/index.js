import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import { handleRender } from './ssr/ssrFunctions';
import testRouter from './publicRoutes/testRouter';
import { errorMount } from './routes/errorExample';


const app = express();
app.use(helmet());
app.use(morgan('dev'));

app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(bodyParser.json());


// serve static files
app.use(express.static('dist'));
app.use(express.static('imgs'));

// api
app.use('/test', testRouter);

// react
app.use(handleRender);

errorMount(app);

if (app.get('env') === 'development') {
  console.log('Development mode!');
} else {
  console.log('Production mode!');
}


export default app;
