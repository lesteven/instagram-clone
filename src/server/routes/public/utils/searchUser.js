import { query } from '../../../db/dbQueries';


const searchUser = (req) => {
  const table = 'users.credentials';
  const select = `SELECT username,name FROM ${table}`;
  const where = `WHERE username = ($1)`; 
  const param = [req.params.username];
  const sql = `${select} ${where}`;
  return query(sql, param);
}

export default searchUser;
