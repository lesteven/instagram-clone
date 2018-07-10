import fs from 'fs';

const handleError = (app) => {

  app.use((err, req, res, next) => {
    res.json({ [req.url]: 'there was an error'});
  });
};

export default handleError;
