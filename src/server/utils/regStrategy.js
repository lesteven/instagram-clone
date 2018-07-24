import Strategy from 'passport-local';
import { insertUser } from './passportQueries';
import { checkAvailability } from './passportMultiQueries';
import { sendError, sendSuccess } from './serverResponse';
import hashPassword from './hashPassword';


const debug = require('debug')('http');

const insertUserIntoDB = async (res, data) => {
  debug('data!!', data);
  const hashedPw = await hashPassword(data.password);
  const userData = {
    ...data,
    password: hashedPw,
  };
  return insertUser(userData);
};


const handleRequest = async (res, data, queriedData) => {
  debug('queriedData!', queriedData);
  const email = queriedData[0][0];
  const user = queriedData[1][0];

  if (email) {
    return sendError(res, 400, 'email already used')();
  }
  if (user) {
    return sendError(res, 400, 'user already exist')();
  }
  if (!email && !user) {
    await insertUserIntoDB(res, data);
    return sendSuccess(res, 'user registered!')();
  }

  return sendError(res, 400, 'error processing request')();
};

const registerUser = (passport, res) => {
  passport.use('register', new Strategy(
    { passReqToCallback: true },
    (async (req) => {
      debug('req.body:', req.body);

      const finishedQuery = await checkAvailability(req.body)
        .catch(sendError(res, 500, 'error with query'));

      if (finishedQuery) {
        handleRequest(res, req.body, finishedQuery);
      }
    }),
  ));
};

export default registerUser;
