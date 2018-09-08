import express from 'express';
import asyncWrap from '../../utils/asyncWrap';
import { getNewestFeed, getOlderFeed } from './utils/getFeed';
import getUser from './utils/getUser';
import sendData from './utils/sendData';

// const debug = require('debug')('http');

const account = express.Router();


account.route('/older/:username/:pagekey')
  .get(asyncWrap(async (req, res, next) => {
    const user = await getUser(req);
    const { pagekey } = req.params;
    const feed = await getOlderFeed(user, pagekey);

    sendData(res, user, feed);
  }));

account.route('/:username')

  .get(asyncWrap(async (req, res, next) => {
    const user = await getUser(req);
    const feed = await getNewestFeed(user);

    sendData(res, user, feed);
  }));


export default account;
