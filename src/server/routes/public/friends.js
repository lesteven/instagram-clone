import express from 'express';
import asyncWrap from '../../utils/asyncWrap';

const debug = require('debug')('http');

const friends = express.Router();


friends.route('/follow/:username')

  .post(asyncWrap(async (req, res, next) => {
    debug('visited follow!');
    debug('data!!!!', req.body);
    const user = req.user.id;
    const followId = req.body.followId;
    const followUsername = req.params.username;
    res.json({
      success: "you've followed",
      user,
      followId,
      followUsername,
    });
  }));

friends.route('/unfollow/:username')

  .post(asyncWrap(async (req, res, next) => {
    debug('visited unfollow!');
  }));

export default friends;
