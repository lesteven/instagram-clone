import express from 'express';
import passport from 'passport';
import asyncWrap from '../../utils/asyncWrap';
import { queryNow, multQuery } from '../../db/dbQueries';
import regStrategy from '../../utils/regStrategy';

const debug = require('debug')('http');


const userRegister = express.Router();

userRegister.route('/')

  .get(asyncWrap(async (req, res, next) => {
    // throw new Error('error alert!');
    const date = await queryNow();
    res.json({ date });
  }))

  .post(asyncWrap(async (req, res, next) => {
    debug('reached post!');
    debug('req.body:', req.body);

    regStrategy(passport, res); 
    passport.authenticate('register')(req, res, next);
  }));

userRegister.route('/hey')

  .get(asyncWrap(async (req, res, next) => {
    const query = 'SELECT NOW()';
    const queryArr = [query, query];

    const data = await multQuery(queryArr);
    res.json({ data });
  }));


export default userRegister;

