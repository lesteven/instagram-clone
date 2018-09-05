import { query } from '../../../db/dbQueries';

const debug = require('debug')('http');


export const getFeed = limit => async (user, pageKey) => {
  const keyIndex = pageKey ? `AND users.feed.id < ${pageKey}` : '';

  if (user) {
    const select = 'SELECT users.credentials.username, '
      + 'users.feed.imgname, users.feed.created_at, '
      + 'users.feed.id FROM users.credentials';
    const join = 'INNER JOIN users.feed ON users.credentials.id = users.feed.username';
    const where = `WHERE users.credentials.id = ($1) ${keyIndex}`;
    const order = `ORDER BY users.feed.id DESC LIMIT ${limit}`;

    const sql = `${select} ${join} ${where} ${order}`;

    const params = [user.id];
    const feed = await query(sql, params);

    debug(sql, params);

    return feed;
  }
  return [];
};

const limit = 3;

export const getNewestFeed = getFeed(limit);

export const getOlderFeed = getFeed(limit);
