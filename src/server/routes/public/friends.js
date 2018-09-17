import express from 'express';
import asyncWrap from '../../utils/asyncWrap';
import { followUser } from './utils/followUser';

const debug = require('debug')('http');

const friends = express.Router();


friends.route('/follow/:username')

  .post(asyncWrap(async (req, res, next) => {
    debug('visited follow!');
    debug('data!!!!', req.body);
    followUser(req, res);
  }));


export default friends;
