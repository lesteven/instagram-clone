import express from 'express';
import asyncWrap from '../../utils/asyncWrap';
import { queryNow } from '../../db/dbQueries';

const userRegister = express.Router();

userRegister.route('/')

  .get(asyncWrap(async (req, res, next) => {
    // throw new Error('error alert!');
    const date = await queryNow();
    res.json({ date: date }); 
  }));


userRegister.route('/test')

  .get((req, res, next) => {
    // throw new Error('error alert!');
    const date  = queryNow()
      .then( data => { 
        res.json({ date: data }); 
      }) 
});


export default userRegister;

