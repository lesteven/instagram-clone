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

const handleRequest = async (res, data, queriedData) => {
  debug('queriedData!', queriedData);
  const email = queriedData[0][0];
  const user = queriedData[1][0];
  if (email) {
    debug('email used!', email);
    return sendError(res, 400, 'email already used')();
  }
  if (user) {
    debug('user used!', user);
    return sendError(res, 400, 'user already exist')();
  }
  if (!email && !user) {
    
    await insertUserIntoDB(res, data);
    return sendSuccess(res, 'user registered!')();
  }
  else {
    return sendError(res, 400, 'error processing requrest')();
  }
}

const registerUser = (passport, res) => {
  passport.use('register', new Strategy(
    { passReqToCallback: true },
    (async (req) => {
      debug('req.body:', req.body);

      const finishedQuery = await checkAvailability(req.body)
        .catch(sendError(res, 500, 'error with query'));

      if (finishedQuery) {
        handleRequest(res, req.body, finishedQuery) 
      }
    }),
  ));
};

export default registerUser;
