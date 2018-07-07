import fs from 'fs';


const handleError = (app) => {
  app.get('/err', (req, res) => {
    try {
      throw Error('there was an error!');
    } catch (e) {
      res.send('error alert!');
    }
  });


  app.get('/async', (req, res, next) => {
    fs.readFile('lala', (err, data) => {
      if (err) {
        next(err);
      } else {
        res.send(data);
      }
    });
  });

  app.use((err, req, res, next) => {
    console.log(err);
    res.send('error handled!');
  });
};

export default handleError;
