import passport from 'passport';
import { LocalStategy } from 'passport-local';
import session from 'express-session';
import connectPg from 'connect-pg-simple';
import { sessionSecret } from '../../../config';
import { pool } from '../db/dbQueries';


const passportSetup = (app) => {
  const pgSession = connectPg(session);
  const sess = {
    store: new pgSession({
      pool: pool,
    }),
    secret: sessionSecret, 
    resave: false,
    saveUninitialized: false,
  }

  app.use(session(sess));
  app.use(passport.initialize());
  app.use(passport.session());
}

export default passportSetup;
