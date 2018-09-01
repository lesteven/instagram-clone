import express from 'express';
import asyncWrap from '../../utils/asyncWrap';
import { find } from '../../db/crudFunctions';
import { query } from '../../db/dbQueries';


const debug = require('debug')('http');

const account = express.Router();

const getFeed = async (user) => {

  const select = `SELECT users.credentials.username,users.feed.imgname FROM users.credentials`;
  const join = `INNER JOIN users.feed ON users.credentials.id = users.feed.username`;
  const where = `WHERE users.credentials.id = ($1)`; 
  const sql = `${select} ${join} ${where}`;
  const params = [user.id]
  const feed = await query(sql, params); 
  debug(sql, params);
  debug('feed!', feed.rows);
  return feed;
}

account.route('/:username')

  .get(asyncWrap(async (req, res, next) => {
    debug('accounts visted!!!');
    const userData = {
      username : req.params.username,
    };
    const data = await find('users.credentials', 'username',userData);
    const user = data.rows[0];
    // debug('fetched data!', user);

    const feed = await getFeed(user);

    if (user) {
      res.json({
        profile: user.username,
        feed: feed.rows
      });
    } else {
      res.json({ hello: req.params.username });
    }
  }));

export default account;
