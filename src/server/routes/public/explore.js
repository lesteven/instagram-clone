import express from 'express';
import asyncWrap from '../../utils/asyncWrap';
import { getNewestExplore, getOlderExplore } from'./utils/getExplore';
import { checkFeed } from './utils/sendData';

const debug = require('debug')('http');

const explore = express.Router();

explore.route('/')

  .get(asyncWrap(async (req, res) => {
    debug('reached explore page!');
    const feed = await getNewestExplore();
    const modifiedFeed = checkFeed(feed); 
    res.json({
      'success': 'reached explore',
      ...modifiedFeed,
    });    
  }));

explore.route('/older/:pagekey')

  .get(asyncWrap(async (req, res) => {
      const feed = await getNewestExplore(req.params.pagekey);
      const modifiedFeed = checkFeed(feed); 
      res.json({
        'success': 'reached explore',
        ...modifiedFeed,
      });    
  }));


export default explore;
