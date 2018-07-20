import Strategy from 'passport-local';
import { findUser } from './passportQueries';
import { sendError, sendSuccess } from './serverResponse';

const debug = require('debug')('http');

const handleSuccess = (res, user) => {
  if (!user[0]) {
    return sendSuccess(res, 'user registered!')();
  }

  return sendError(res, 400, 'user already exist')();
};

const registerUser = (passport, res) => {
  passport.use('register', new Strategy(
    { passReqToCallback: true },
    (async (req) => {
      debug('req.body:', req.body);
      // res.json({ failed: 'testing'});

      const success = await findUser(req)
        .catch(sendError(res, 500, 'error with query'));


      if (success) {
        handleSuccess(res, success.rows);
      }
    }),

  ));
};

export default registerUser;
