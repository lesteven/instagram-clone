import fs from 'fs';

const errMsg = `there was an error`;
const handleError = (app) => {

  app.use((err, req, res, next) => {
    console.log(err);
    res.json({ [req.url]: errMsg });
  });
};

export default handleError;
