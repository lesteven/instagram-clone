import express from 'express';
import passport from 'passport';
import asyncWrap from '../../utils/asyncWrap';
import { logStrategy } from '../../utils/logStrategy';
import { sendSuccess } from '../../utils/serverResponse';


const debug = require('debug')('http');


const userLogin = express.Router();

userLogin.route('/')

  .post(asyncWrap(async (req, res, next) => {
    debug('reached login post!');
    debug('req.body:', req.body);

    logStrategy(passport, res);
    passport.authenticate('login')(req, res, next);
    //    res.json({success: 'logged in!'});
  }));

userLogin.route('/:email')

  .get(asyncWrap(async (req, res, next) => {
    // debug('user', req.user);
    // debug('req.params.id!!!!!', req.params.email);
    if (req.params.email === req.user.email) {
      res.json({
        user: req.user.email,
      });
    } else {
      res.json({});
    }
  }));

userLogin.route('/logout/:email')

  .get(asyncWrap(async (req, res, next) => {
    if (req.user && req.params.email === req.user.email) {
      req.logOut();
      res.clearCookie('connect.sid');
      sendSuccess(res, 'You have logged out')();      
    } else {
      res.json({});
    }
  }))
  
export default userLogin;
