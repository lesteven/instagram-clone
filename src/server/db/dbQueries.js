import { Pool } from 'pg';
import { pg } from '../../../config';

export const pool = new Pool(pg);

export const mappedQueries = (client, arr) => {
  const queries = arr.map(text => client.query(text));
  return queries;
};


export const queryNow = () => pool.query('SELECT NOW()');

export const query = (text, params) => pool.query(text, params);

export const multQuery = async (textArr, params) => {
  const client = await pool.connect();
  const queries = mappedQueries(client, textArr);

  const data = await Promise.all(queries, params)
    .finally(() => {
      client.release();
    });

  return data;
};

