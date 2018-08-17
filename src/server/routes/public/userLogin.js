import express from 'express';
import passport from 'passport';
import asyncWrap from '../../utils/asyncWrap';
import { logStrategy } from '../../utils/logStrategy';
import { sendSuccessLong } from '../../utils/serverResponse';


const debug = require('debug')('http');


const userLogin = express.Router();

userLogin.route('/')

  .post(asyncWrap(async (req, res, next) => {
    debug('reached login post!');
    debug('req.body:', req.body);

    logStrategy(passport, res);
    passport.authenticate('login')(req, res, next);
  }));

userLogin.route('/:username')

  .get(asyncWrap(async (req, res, next) => {
    if (req.params.username === req.user.username) {
      res.json({
        userEmail: req.user.email,
        userName: req.user.username,
      });
    } else {
      res.json({});
    }
  }));

userLogin.route('/logout/:username')

  .get(asyncWrap(async (req, res, next) => {
    if (req.user && req.params.username === req.user.username) {
      req.logOut();
      res.clearCookie('connect.sid');
      const data = {
        redirect: false,
        loggedOut: true,
      };
      sendSuccessLong(res, 'You have logged out', data)();
    } else {
      res.json({});
    }
  }));

export default userLogin;
