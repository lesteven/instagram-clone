import { query } from '../db/dbQueries';
import { turnToParamsArr } from './queryHelpers';
import generateSqlInsert from './generateSql';
import { find, insert } from '../db/crudFunctions';


const debug = require('debug')('http');

const userTable = 'users.credentials';


export const findUser = (data) => {
  return find(userTable, 'email', data);
}

const insertKeys = 'email,name,username,password';
export const insertUser = (data) => {
  return insert(userTable, insertKeys, data);
}

