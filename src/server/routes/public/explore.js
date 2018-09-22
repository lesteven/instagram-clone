import express from 'express';
import asyncWrap from '../../utils/asyncWrap';
import getExploreFeed from './utils/getExplore';
import { checkFeed } from './utils/sendData';

const debug = require('debug')('http');

const explore = express.Router();

explore.route('/')

  .get(asyncWrap(async (req, res) => {
    debug('reached explore page!');
    const feed = await getExploreFeed();
    const modifiedFeed = checkFeed(feed);
    res.json({
      success: 'reached explore',
      ...modifiedFeed,
    });
  }));

explore.route('/older/:pagekey')

  .get(asyncWrap(async (req, res) => {
    const feed = await getExploreFeed(req.params.pagekey);
    const modifiedFeed = checkFeed(feed);
    res.json({
      success: 'reached explore',
      ...modifiedFeed,
    });
  }));


export default explore;
