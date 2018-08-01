import { query } from '../db/dbQueries';
import { turnToParamsArr } from './queryHelpers';
import generateSqlInsert from './generateSql';
import { find, insert } from '../db/crudFunctions';


const debug = require('debug')('http');

const userTable = 'users.credentials';

export const userQueries = (sqlStr, keys) => (data) => {
  const params = turnToParamsArr(keys, data);
  return query(sqlStr, params);
};


const insertQuery = (table, insertKeys) => (data) => {
  const insertSql = generateSqlInsert(table, insertKeys);
  const params = turnToParamsArr(insertKeys, data);

  debug(insertSql);
  debug(params);

  return query(insertSql, params);
};

const selectSql = 'SELECT * FROM users.credentials WHERE email = $1';
// export const findUser = userQueries(selectSql, 'email');

export const findUser = (data) => {
  return find(userTable, 'email', data);
}

const insertKeys = 'email,name,username,password';
export const insertUser = insertQuery(userTable, insertKeys);
/*
export const insertUser = (data) => {
  return insert(userTable, insertKeys, data);
}
*/
