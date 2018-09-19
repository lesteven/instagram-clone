import { query } from '../../../db/dbQueries';

const limit = 4;


const getExplore = limit => async (pageKey) => {
  const where = pageKey ? `WHERE users.feed.id < ${pageKey}` : '';

  const select = 'SELECT users.feed.id, users.feed.imgname,'
    + 'users.feed.created_at, users.credentials.username '
    + 'FROM users.credentials';

  const join = 'INNER JOIN users.feed ON users.credentials.id ='
    + ' users.feed.username';
   
  const order = `ORDER BY users.feed.id DESC LIMIT ${limit}`;

  const sql = `${select} ${join} ${where} ${order}`;
  
  console.log(sql);

  const feed = await query(sql);
  
  return feed;
}

export const getNewestExplore = getExplore(limit);
export const getOlderExplore = getExplore(limit);
