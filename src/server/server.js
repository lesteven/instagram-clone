import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import { handleRender } from './ssr/ssrFunctions';


// server
const app = express();
app.use(helmet());
app.use(morgan('dev'));
const port = process.env.PORT || 3000;


// for parsing urlencoded && json in req.body
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(bodyParser.json());


// serve js files
app.use(express.static('dist'));
app.use(express.static('imgs'));


// use handleRender for each request
/*
app.get('/', (req, res) => {
  res.send('hello world');
});
*/


app.use(handleRender);


// Check mode
if (app.get('env') === 'development') {
  console.log('Development mode!');
} else {
  console.log('Production mode!');
}


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

