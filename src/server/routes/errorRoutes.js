const debug = require('debug')('http');


const errMsg = 'there was an error';

const handleError = (app) => {
  app.use((err, req, res, next) => {
    debug('handleRender:', err);
    res.json({ [req.url]: errMsg });
  });
};

export default handleError;
