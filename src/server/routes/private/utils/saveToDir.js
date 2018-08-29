import fs from 'fs';
import { IncomingForm } from 'formidable';

const debug = require('debug')('http');

export function saveToDir(req, res) {
  const dir = 'uploads';
  fs.readdir(dir, (err, files) => {
    if (err) {
      makeDir(req, res, dir);
    } else {
      uploadFiles(req, res, dir);
    }
  })
}

// make directory 
export function makeDir(req, res, dir) {
  fs.mkdir(dir, err => {
    if (err) {
      return console.log(err);
    }
    console.log('dir created!');
    uploadFiles(req, res, dir);
  })
}

// save files in file system
export function uploadFiles(req, res, dir) {

  let form = new IncomingForm(),
      files = [],
      fields = [];

  form.uploadDir = dir;
  form.keepExtensions = true;

  form
    .on('field', (field,value) => {
      fields.push([field,value]); 
    })
    .on('file', (field, file) => {
      const imgPath = split(file.path);
      debug(imgPath);
      saveImage({path:imgPath});
      files.push([field,file]);
    })
    .on('end', () => {
      res.json({success: 'images uploaded!'});
    })
    form.parse(req);
}

// save image path to db
function saveImage(data) {
  debug('saveimage data', data)
  /*
  let content = new Image(data);
  content.save(err => {
    if (err) {
      return debug(err)
    }
    debug('success');
  })
  */
}

// split path
function split(string) {
  let arr = string.split('/');
  return arr[1];
}

export default uploadFiles;
