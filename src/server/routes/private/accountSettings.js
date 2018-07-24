import express from 'express';
import asyncWrap from '../../utils/asyncWrap';

const accountSettings = express.Router();

accountSettings.route('/')

  .get(asyncWrap(async (req, res) => {
    await res.json({ success: 'hello account settings!' });
  }));


export default accountSettings;
