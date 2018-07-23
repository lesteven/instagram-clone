import { Pool } from 'pg';
import { pg } from '../../../config';

export const pool = new Pool(pg);

export const mappedQueries = (client, arr, params) => {
  // const queries = arr.map(text => client.query(text));
  let queries = [];
  for (let i = 0; i < arr.length; i++) {
    queries[i] = client.query(arr[i], params[i]); 
  }
 
  return queries;
};


export const queryNow = () => pool.query('SELECT NOW()');

export const query = (text, params) => pool.query(text, params);

export const multQuery = async (textArr, params) => {
  const client = await pool.connect();
  const queries = mappedQueries(client, textArr, params);

  const data = await Promise.all(queries, params)
    .finally(() => {
      client.release();
    });

  return data;
};
