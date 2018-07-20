import { query } from '../db/dbQueries';
import { turnToParamsArr, dataToString } from './queryHelpers';


export const userQueries = (sqlStr, keys) => (data) => {
  const params = turnToParamsArr(keys, data);
  return query(sqlStr, params);
};

const insert = insertParam => (data) => {
  const values = dataToString(data);
  const insertSql = `INSERT INTO users.credentials (${insertParam})
    VALUES ${values}`;

  const keys = insertParam;
  const params = turnToParamsArr(keys, data);
  return query(insertSql, params);
};

const selectSql = 'SELECT * FROM users.credentials WHERE email = $1';
export const findUser = userQueries(selectSql, 'email');


const insertKeys = 'email,name,username,password';
export const insertUser = insert(insertKeys);
