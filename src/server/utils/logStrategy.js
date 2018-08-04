import Strategy from 'passport-local';
import { findUser } from './passportQueries';
import { sendError, sendSuccess } from './serverResponse';


const debug = require('debug')('http');

const handleRequest = async (res, data, queriedData) => {
  const email = queriedData.rows[0];
  
  if (email) {
    debug(email, 'user exist!');
    return sendSuccess(res, 200, 'logged in!');     
  } else {
    debug('email does not exist!');
    return sendError(res, 400, 'invalid email or password');
  }   
  
  return sendSuccess(res, 200, 'logged in!');
}
export const logStrategy = (passport, res) => {
  passport.use('hello', new Strategy(
    { 
      usernameField: 'email',
      passReqToCallback : true 
    },
    (async (req) => {
      const finishedQuery = await findUser(req.body)
        .catch(sendError(res, 500, 'error with query'));

      if (finishedQuery) {
        handleRequest(res, req.body, finishedQuery);
      }
    }),
  ));
};

export default logStrategy;
