import { Pool } from 'pg';
import { pg } from '../../../config';


const pool = new Pool(pg);

const query = async () => {
  const data = await pool.query('SELECT NOW()');
  console.log(data);
}

export default query;
