import express from 'express';
import asyncWrap from '../../utils/asyncWrap';
import { savePosts, saveUserimages } from './utils/saveImages';
import updatePostCount from './utils/updatePostCount';
import { sendError } from '../../utils/serverResponse';

const debug = require('debug')('http');

const upload = express.Router();

upload.route('/')

  .get(asyncWrap(async (req, res, next) => {
    await res.json({ success: 'hello upload!' });
  }));

upload.route('/post/:username')

  .post(asyncWrap(async (req, res, next) => {
    debug('params1!!!!', req.params.username);
    debug('logged in user!!!', req.user);
    debug('!!!visted post images!!');
    if (req.params.username === req.user.username) {
      updatePostCount(req);
      return savePosts(req, res);
    }

    // return res.json({ failed: 'failed to post' });
    return sendError(res, 401, 'failed to post')();
  }));

upload.route('/userimage/:username')

  .post(asyncWrap(async (req, res, next) => {
    debug('!!!userimage');
    debug('!!! visisted userimages!!');
    if (req.params.username === req.user.username) {
      return saveUserimages(req, res);
    }
    return sendError(res, 401, 'failed to post')();
  }));

export default upload;
