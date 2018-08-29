import express from 'express';
import fs from 'fs';
import asyncWrap from '../../utils/asyncWrap';
import { saveToDir, makeDir, uploadFiles } from './utils/saveToDir';


const debug = require('debug')('http');
const upload = express.Router();

upload.route('/')

  .get(asyncWrap(async (req, res, next) => {
    await res.json({ success: 'hello upload!' });
  }))

upload.route('/:username')

  .post(asyncWrap(async (req, res, next) => {
    debug('params1!!!!', req.params.username);
    debug('logged in user!!!', req.user);

    if (req.params.username == req.user.username) {
      return saveToDir(req, res);
    }

    return res.json({failed : 'failed to post' });
  }))


export default upload;
