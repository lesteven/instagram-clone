import express from 'express';
import asyncWrap from '../../utils/asyncWrap';
import { queryNow } from '../../db/dbQueries'; 

const test = express.Router();


test.route('/')
  .get(asyncWrap(async (req, res, next) => {
    const data  = await queryNow();
    res.send(data);
  }))

export default test;
