import { IncomingForm } from 'formidable';
import { insert } from '../../../db/crudFunctions';

const debug = require('debug')('http');

// save image path to db
function saveImagePost(req, imgPath) {
  debug('saveimage data', imgPath);
  const table = 'users.feed';
  const keys = 'username,imgname';
  const feedData = {
    username: req.user.id,
    imgname: imgPath,
  };
  insert(table, keys, feedData);
}
function saveUserimages(req, imgPath) {
  const table = 'users.credentials';

}

// split path
function split(string) {
  const arr = string.split('/');
  return arr[1];
}

// save files in file system
const genUpload = saveFn => (req, res, dir) => {
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
      saveFn(req, imgPath);
      files.push([field, file]);
    })
    .on('end', () => {
      res.json({ success: 'images uploaded!' });
    });
  form.parse(req);
}

export const uploadFiles = genUpload(saveImagePost);
export const uploadUserimages = genUpload(saveUserimages);
