import express from 'express';
import asyncWrap from '../../utils/asyncWrap';
import { queryNow, clientQuery } from '../../db/dbQueries';

const userRegister = express.Router();

userRegister.route('/')

  .get(asyncWrap(async (req, res, next) => {
    // throw new Error('error alert!');
    const date = await queryNow();
    res.json({ date: date }); 
  }));



userRegister.route('/hey')

  .get(asyncWrap(async (req, res, next) => {
    const query = 'SELECT NOW()';
    const queryArr = [query, query];

    const data = await clientQuery(queryArr)
/*
      .then(
        (data) => res.json({ data }),
        (err) => res.json({err: err.message})
      )
*/
    res.json({data});
  }))


export default userRegister;

