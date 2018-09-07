import express from 'express';
import asyncWrap from '../../utils/asyncWrap';

const debug = require('debug')('http');

const friends = express.Router();


friends.route('/follow/:username')

  .post(asyncWrap(async (req, res, next) => {
    debug('visited follow!');
    const id = req.user.id;
    const followingId = req.params.username;
    req.json({
      id,
      followingId,
    })    
  }));

friends.route('/unfollow/:username')

  .post(asyncWrap(async (req, res, next) => {
    debug('visited unfollow!');

  }));

export default friends;
