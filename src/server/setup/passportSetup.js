import passport from 'passport';
import session from 'express-session';
import connectPg from 'connect-pg-simple';
import { sessionSecret } from '../../../config';
import { pool } from '../db/dbQueries';
import findUserById from '../utils/passportFindId';


const passportSetup = (app) => {
  const PgSession = connectPg(session);
  const sess = {
    store: new PgSession({
      pool,
    }),
    secret: sessionSecret,
    resave: false,
    saveUninitialized: false,
  };

  app.use(session(sess));
  // app.use(session({ secret : 'testing!'}));
  app.use(passport.initialize());
  app.use(passport.session());

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    findUserById(id, done);
  });
};

export default passportSetup;
