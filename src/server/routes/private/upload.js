import express from 'express';
import asyncWrap from '../../utils/asyncWrap';

const upload = express.Router();

upload.route('/')

  .get(asyncWrap(async (req, res) => {
    await res.json({ success: 'hello upload!' });
  }))

  .post(asyncWrap(async (req, res) => {
    res.json({ success : 'reached upload post' });
  }))


export default upload;
