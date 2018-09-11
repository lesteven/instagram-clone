import express from 'express';
import asyncWrap from '../../utils/asyncWrap';
import { getNewestFeed, getOlderFeed } from './utils/getFeed';
import getUser from './utils/getUser';
import sendData from './utils/sendData';
import getUserIds from './utils/getUserIds';
import { followStatus } from './utils/followUser';


const debug = require('debug')('http');

const account = express.Router();


account.route('/older/:username/:pagekey')
  .get(asyncWrap(async (req, res, next) => {
    const user = await getUser(req);
    const { pagekey } = req.params;
    const feed = await getOlderFeed(user, pagekey);

    const ids = getUserIds(req, user);
    const following = await followStatus(ids);

    sendData(res, user, feed, following);
  }));

account.route('/:username')

  .get(asyncWrap(async (req, res, next) => {
    const user = await getUser(req);
    const feed = await getNewestFeed(user);

    const ids = getUserIds(req, user);
    const following = await followStatus(ids);
    
    debug('following!!!', ids, following); 
    sendData(res, user, feed, following);
  }));


export default account;
