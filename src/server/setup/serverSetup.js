import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import helmet from 'helmet';


const serverSetup = (app) => {
  app.use(helmet());
  app.use(morgan('dev'));

  app.use(bodyParser.urlencoded({
    extended: true,
  }));
  app.use(bodyParser.json());

  // get gzip files
  app.get('*.js', (req, res, next) => {
    req.url += '.gz';
    res.set('Content-Encoding', 'gzip');
    res.set('Content-Type', 'text/javascript');
    next();
  });

  app.get('*.css', (req, res, next) => {
    req.url += '.gz';
    res.set('Content-Encoding', 'gzip');
    res.set('Content-Type', 'text/css');
    next();
  });

  // serve static files
  app.use(express.static('dist'));
  app.use(express.static('imgs'));
  app.use(express.static('uploads'));
  app.use(express.static('userimages'));
};

export default serverSetup;
