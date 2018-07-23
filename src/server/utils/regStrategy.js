import Strategy from 'passport-local';
import { findUser, insertUser } from './passportQueries';
import { checkAvailability } from './passportMultiQueries';
import { sendError, sendSuccess } from './serverResponse';

const debug = require('debug')('http');

const insertUserIntoDB = (res, data) => {
  const hashedPw = 'salt and hash pw';
  const userData = {
    ...data,
    password: hashedPw,
  };
  return insertUser(userData);
};

const handleUser = async (res, data, user) => {
  const noUser = !user[0];
  debug('noUser!', noUser);
  if (noUser) {
    await insertUserIntoDB(res, data);
    return sendSuccess(res, 'user registered!')();
  }

  return sendError(res, 400, 'user already exist')();
};

const registerUser = (passport, res) => {
  passport.use('register', new Strategy(
    { passReqToCallback: true },
    (async (req) => {
      debug('req.body:', req.body);

/*
      const finishedQuery = await findUser(req.body)
        .catch(sendError(res, 500, 'error with query'));

      if (finishedQuery) {
        const data = finishedQuery.rows;
        handleUser(res, req.body, data);
      }
*/
      const finishedQuery = await checkAvailability(req.body)
        .catch(sendError(res, 500, 'error with query'));

      debug('registerQuery', finishedQuery);
    }),
  ));
};

export default registerUser;
