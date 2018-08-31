import express from 'express';
import asyncWrap from '../../utils/asyncWrap';


const debug = require('debug')('http');

const account = express.Router();

account.route('/:username')

  .get(asyncWrap(async (req, res, next) => {
    debug('accounts visted!!!');
    res.json({hello: req.params.username});
  }))

export default account;

