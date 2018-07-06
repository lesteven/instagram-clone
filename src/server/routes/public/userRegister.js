import express from 'express';
import asyncWrap from '../../utils/asyncWrap';

const userRegister = express.Router();

userRegister.route('/')

  .get(asyncWrap(async (req, res) => {
    await res.json({ success: 'hello new user!' });
  }));


export default userRegister;

