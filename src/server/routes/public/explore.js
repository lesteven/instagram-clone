import express from 'express';
import asyncWrap from '../../utils/asyncWrap';

const debug = require('debug')('http');

const explore = express.Router();

explore.route('/')

  .get(asyncWrap(async (req, res) => {
      debug('reached explore page!');
      res.json({'success': 'reached explore'});    
  }));


export default explore;
