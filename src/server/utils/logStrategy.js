import Strategy from 'passport-local';
import { findUser } from './passportQueries';
import { sendError, sendSuccess } from './serverResponse';
import { validatePassword } from './passwordEncryption';


const debug = require('debug')('http');

const handleRequest = async (req, res, data, queriedData) => {
  const user = queriedData.rows[0];
  const valid = await validatePassword(data.password, user.password);

  if (user && valid) {
    const loggedIn = req.login(user.email, (err) => {
      if (err) sendError(res, 200, 'there was an error')
      return sendSuccess(res, 'logged in!')(); 
    })
  } else {
    return sendError(res, 400, 'invalid email or password')();
  }

}
export const logStrategy = (passport, res) => {
  passport.use('login', new Strategy(
    { 
      usernameField: 'email',
      passReqToCallback : true 
    },
    (async (req) => {
      const finishedQuery = await findUser(req.body)
        .catch(sendError(res, 500, 'error with query'));

      if (finishedQuery) {
        handleRequest(req, res, req.body, finishedQuery);
      }
    }),
  ));
};

export default logStrategy;
