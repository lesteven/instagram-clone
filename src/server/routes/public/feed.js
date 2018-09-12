import express from 'express';
import asyncWrap from '../../utils/asyncWrap';
import { getNewestFeed, getOlderFeed } from './utils/getFeed';
import getUser from './utils/getUser';
import sendData from './utils/sendData';
import getUserIds from './utils/getUserIds';
import { followStatus } from './utils/followUser';


const debug = require('debug')('http');

const feed = express.Router();


feed.route('/older/:username/:pagekey')
  .get(asyncWrap(async (req, res, next) => {
    const user = await getUser(req);
    const { pagekey } = req.params;
    const feed = await getOlderFeed(user, pagekey);

    sendData(res, user, feed);
  }));

feed.route('/:username')

  .get(asyncWrap(async (req, res, next) => {
    const user = await getUser(req);
    const feed = await getNewestFeed(user);

    sendData(res, user, feed);
  }));


export default feed;
