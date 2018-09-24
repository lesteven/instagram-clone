import fs from 'fs';
import { uploadFiles, uploadUserimages } from './parseFiles';

const debug = require('debug')('http');


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

const save = (folderName, uploadFn )=> (req, res) => {
  const dir = folderName;
  fs.readdir(dir, (err) => {
    if (err) {
      makeDir(req, res, dir);
    } else {
      uploadFn(req, res, dir);
    }
  });
}

export const savePosts = save('uploads', uploadFiles);
export const saveUserimages = save('userimages', uploadUserimages);

