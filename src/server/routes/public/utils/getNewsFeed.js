import { query } from '../../../db/dbQueries';

const debug = require('debug')('http');


export const getFeed = limit => async (user, pageKey) => {
  const keyIndex = pageKey ? `AND users.feed.id < ${pageKey}` : '';
  debug('keyIndex!!', keyIndex);
  if (user) {
    const select = 'SELECT users.feed.id, users.feed.imgname, users.feed.created_at, users.credentials.username FROM users.followers';
    const join = 'INNER JOIN users.feed ON users.followers.username = users.feed.username'
    const join2 = 'INNER JOIN users.credentials ON users.feed.username =users.credentials.id';
    const where = `WHERE users.followers.follower = ($1) ${keyIndex}`;
    const order = `ORDER BY users.feed.id DESC LIMIT ${limit}`;
    const sql = `${select} ${join} ${join2} ${where} ${order}`;
    
    const params = [user.id];
    debug(sql, params);
    const feed = await query(sql, params);
    debug(feed.rows);

    return feed;
  }
  return [];
};

const limit = 4;

export const getNewestFeed = getFeed(limit);

export const getOlderFeed = getFeed(limit);
