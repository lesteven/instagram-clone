import express from 'express';
import asyncWrap from '../../utils/asyncWrap';
import { find } from '../../db/crudFunctions';
import { query } from '../../db/dbQueries';
import { getNewestFeed, getOlderFeed } from './utils/getFeed';
import getUser from './utils/getUser';


const debug = require('debug')('http');

const account = express.Router();


account.route('/older/:username/:pagekey')
  .get(asyncWrap(async (req, res, next) => {
      const user = await getUser(req);      
      const { pagekey } = req.params;
      const feed = await getOlderFeed(user, pagekey);
      res.json({
          profile: user.username,
          feed: feed.rows,
      });
  }))

account.route('/:username')

  .get(asyncWrap(async (req, res, next) => {
    const user = await getUser(req);

    const feed = await getNewestFeed(user);

    if (user) {
      res.json({
        profile: user.username,
        feed: feed.rows
      });
    } else {
      res.json({ hello: req.params.username });
    }
  }));


export default account;
