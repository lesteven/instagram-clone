import express from 'express';
import asyncWrap from '../../utils/asyncWrap';
import { find } from '../../db/crudFunctions';
import { query } from '../../db/dbQueries';


const debug = require('debug')('http');

const account = express.Router();

account.route('/:username')

  .get(asyncWrap(async (req, res, next) => {
    debug('accounts visted!!!');
    const userData = {
      username : req.params.username,
    };
    const data = await find('users.credentials', 'username',userData);
    const user = data.rows[0];
    // debug('fetched data!', user);
    if (user) {
      const sql = `SELECT * FROM users.credentials INNER JOIN users.feed ON users.credentials.id = users.feed.username WHERE users.credentials.id = ($1)`; 
      const params = [user.id]
      const feed = await query(sql, params); 
      debug(sql, params);
      debug('user id!!!', user.id);
      debug('feed!', feed.rows);
      res.json({feed: 'feed!'});
    } else {
      res.json({ hello: req.params.username });
    }
  }));

export default account;
