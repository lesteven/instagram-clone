import { Pool } from 'pg';
import { pg } from '../../../config';


const pool = new Pool(pg);

const query = async () => {
  await pool.query('SELECT NOW()');
};

export default query;
