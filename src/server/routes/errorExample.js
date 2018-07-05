import fs from 'fs';


export const errorMount = app => {
  app.get('/err', (req, res, next) => {
    try {
      throw Error('there was an error!');
    } 

  catch (e) {
      next(e);
//      res.send('error alert!');
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
    res.send('error handled!');
  });
}
