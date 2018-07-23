import { query, multQuery } from '../db/dbQueries';
import { turnToParamsArr, valuesPlaceholder} from './queryHelpers';

const debug = require('debug')('http');

export const userQueries = (sqlStr, keys) => (data) => {
  const params = turnToParamsArr(keys, data);
  return query(sqlStr, params);
};

const insert = insertParam => data => {
  const values = turnToParamsArr(insertParam, data);
 
  const placeholder = valuesPlaceholder(insertParam); 
  const insertSql = `INSERT INTO users.credentials(${insertParam})
    VALUES${placeholder} RETURNING *`;

  const params = turnToParamsArr(insertParam, data);
  debug(insertSql);
  debug(params);
  return query(insertSql, params);
};

const selectSql = 'SELECT * FROM users.credentials WHERE email = $1';
export const findUser = userQueries(selectSql, 'email');


const insertKeys = 'email,name,username,password';
export const insertUser = insert(insertKeys);


