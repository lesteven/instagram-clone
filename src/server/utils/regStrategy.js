import Strategy from 'passport-local';
import { findUser } from './passportQueries';
import { sendError, sendSuccess } from './serverResponse';

const debug = require('debug')('http');

const insertUserIntoDB = (res, data) => {

}

const handleSuccess = (res, data, user) => {
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

      const success = await findUser(req.body)
        .catch(sendError(res, 500, 'error with query'));


      if (success) {
        handleSuccess(res, req.body, success.rows);
      }
    }),

  ));
};

export default registerUser;
