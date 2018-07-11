import { Pool } from 'pg';
import { pg } from '../../../config';


const pool = new Pool(pg);


export const queryNow = () => {
  return pool.query('SELECT NOW()');
};

export const query = (text, params) => {
  pool.query(text, params);
};

export const clientQuery = async (textArr, params) => {
  const client = await pool.connect();
  const queries = mappedQueries(client, textArr);

  const data = await Promise.all(queries); 
  
  client.release();
  return data;
} 


export const mappedQueries = (client, arr) => {
  return arr.map(text => Promise.resolve(client.query(text)))
}
