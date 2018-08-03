import express from 'express';
// import passport from 'passport';
import asyncWrap from '../../utils/asyncWrap';
// import logStrategy from '../../utils/logStrategy';

const debug = require('debug')('http');


const userLogin = express.Router();

userLogin.route('/')

  .get(asyncWrap(async (req, res, next) => {
    res.json({ hello: 'hello!' });
  }))

  .post(asyncWrap(async (req, res, next) => {
    debug('reached login post!');
    debug('req.body:', req.body);
    res.json({ status: 'reached login' });
    /*
    logStrategy(passport, res);
    passport.authenticate('logister')(req, res, next);
*/
  }));


export default userLogin;
