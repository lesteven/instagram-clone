import express from 'express';
import asyncWrap from '../../utils/asyncWrap';
import searchUser from './utils/searchUser';


const debug = require('debug')('http');

const search = express.Router();

search.route('/:username')
  .get(asyncWrap(async (req, res, next) => {
    debug('reached search router!');
    const data = await searchUser(req);
    res.json({
      'success': 'success!',
      data: data.rows,
    });
  }))

export default search;
