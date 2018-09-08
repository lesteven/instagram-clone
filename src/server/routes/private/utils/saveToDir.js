import fs from 'fs';
import { IncomingForm } from 'formidable';
import { insert } from '../../../db/crudFunctions';

const debug = require('debug')('http');

// save image path to db
function saveImage(req, imgPath) {
  debug('saveimage data', imgPath);
  const table = 'users.feed';
  const keys = 'username,imgname';
  const feedData = {
    username: req.user.id,
    imgname: imgPath,
  };
  insert(table, keys, feedData);
}

// split path
function split(string) {
  const arr = string.split('/');
  return arr[1];
}

// save files in file system
export function uploadFiles(req, res, dir) {
  const form = new IncomingForm();

  const files = [];

  const fields = [];

  form.uploadDir = dir;
  form.keepExtensions = true;

  form
    .on('field', (field, value) => {
      fields.push([field, value]);
    })
    .on('file', (field, file) => {
      const imgPath = split(file.path);
      debug(imgPath);
      saveImage(req, imgPath);
      files.push([field, file]);
    })
    .on('end', () => {
      res.json({ success: 'images uploaded!' });
    });
  form.parse(req);
}

// make directory
export function makeDir(req, res, dir) {
  fs.mkdir(dir, (err) => {
    if (err) {
      return debug(err);
    }
    debug('dir created!');
    return uploadFiles(req, res, dir);
  });
}

export function saveToDir(req, res) {
  const dir = 'uploads';
  fs.readdir(dir, (err) => {
    if (err) {
      makeDir(req, res, dir);
    } else {
      uploadFiles(req, res, dir);
    }
  });
}


export default uploadFiles;
