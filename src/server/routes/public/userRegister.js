import express from 'express';
import passport from 'passport';
import asyncWrap from '../../utils/asyncWrap';
import regStrategy from '../../utils/regStrategy';

const debug = require('debug')('http');


const userRegister = express.Router();

userRegister.route('/')

  .post(asyncWrap(async (req, res, next) => {
    debug('reached post!');
    debug('req.body:', req.body);

    regStrategy(passport, res);
    passport.authenticate('register')(req, res, next);
  }));


export default userRegister;
