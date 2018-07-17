import Strategy from 'passport-local';

const debug = require('debug')('http');

const registerUser = (passport, res) => {
  passport.use('register', new Strategy(
    {
      passReqToCallback: true,
    },
    (req, username, password, done) => {
      debug('req.body:', req.body);
//      res.json({ failed: 'testing'});
      res.json({success: 'testing'});
    }

  ))
}

export default registerUser;
