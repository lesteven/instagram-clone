import Strategy from 'passport-local';
import { insertUser } from './passportQueries';
import { checkAvailability } from './passportMultiQueries';
import { sendError } from './serverResponse';
import { hashPassword } from './passwordEncryption';
import { loginUser } from './logStrategy';

const debug = require('debug')('http');

export const insertUserIntoDB = async (res, data) => {
  debug('data!!', data);
  const hashedPw = await hashPassword(data.password);
  const userData = {
    ...data,
    password: hashedPw,
  };
  return insertUser(userData);
};


export const handleRequest = async (res, req, queriedData) => {
  const email = queriedData[0][0];
  const user = queriedData[1][0];

  if (email) {
    return sendError(res, 400, 'email already used')();
  }
  if (user) {
    return sendError(res, 400, 'user already exist')();
  }
  if (!email && !user) {
    const userInserted = await insertUserIntoDB(res, req.body);
    return loginUser(req, res, userInserted.rows[0]);
  }

  return sendError(res, 400, 'error processing request')();
};

const regStrategy = (passport, res) => {
  passport.use('register', new Strategy(
    { passReqToCallback: true },
    (async (req) => {
      debug('req.body:', req.body);

      const finishedQuery = await checkAvailability(req.body)
        .catch(sendError(res, 500, 'error with query'));

      if (finishedQuery) {
        handleRequest(res, req, finishedQuery);
      }
    }),
  ));
};

export default regStrategy;
