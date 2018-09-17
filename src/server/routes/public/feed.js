import express from 'express';
import asyncWrap from '../../utils/asyncWrap';
import { getNewestFeed, getOlderFeed } from './utils/getNewsFeed';
import getUser from './utils/getUser';
import sendData from './utils/sendData';


const debug = require('debug')('http');

const feed = express.Router();


feed.route('/older/:username/:pagekey')
  .get(asyncWrap(async (req, res, next) => {
    const user = await getUser(req);
    const { pagekey } = req.params;
    const userFeed = await getOlderFeed(user, pagekey);

    sendData(res, user, userFeed);
  }));

feed.route('/:username')

  .get(asyncWrap(async (req, res, next) => {
    debug('!!!reached feed server!');
    const user = await getUser(req);
    const userFeed = await getNewestFeed(user);

    sendData(res, user, userFeed);
  }));


export default feed;
