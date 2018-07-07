import { Pool } from 'pg';
import { pg } from '../../../config';


const pool = new Pool(pg);


export const queryNow = () => {
  return pool.query('SELECT NOW()');
};

export const query = (text, params) => {
  pool.query(text, params);
};

