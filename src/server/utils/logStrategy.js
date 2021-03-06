import Strategy from 'passport-local';
import { findUser } from './passportQueries';
import { sendError } from './serverResponse';
import { validatePassword } from './passwordEncryption';


// const debug = require('debug')('http');
export const loginUser = (req, res, user) => {
  req.login(user, (err) => {
    if (err) sendError(res, 200, 'there was an error');
    // return sendSuccess(res, 'logged in!')();
    return res.status(200).json({
      success: 'logged in!',
      redirect: true,
      userEmail: user.email,
      userName: user.username,
    });
  });
};


export const handleRequest = async (req, res, data, queriedData) => {
  const user = queriedData.rows[0];
  const userPassword = user ? user.password : '';
  const valid = await validatePassword(data.password, userPassword);

  // debug('user!!', user);
  if (user && valid) {
    return loginUser(req, res, user);
  }
  return sendError(res, 400, 'invalid email or password')();
};
export const logStrategy = (passport, res) => {
  passport.use('login', new Strategy(
    {
      usernameField: 'email',
      passReqToCallback: true,
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
