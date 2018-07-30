import { query } from './dbQueries';
import {
  turnToParamsArr,
  valuesPlaceholder
} from '../utils/queryHelpers';


export const find = (table, keys, data) => {
  const params = turnToParamsArr(keys, data);
  const sql = `SELECT * FROM ${table} WHERE `
}

export const update = (table, keys, data) => {
  const params = turnToParamsArr(keys, data);
  
}

export const deleteData = (table, keys, data) => {
  const params = turnToParamsArr(keys, data);

}

export const insert = (table, keys, data) => {
  const params = turnToParamsArr(keys, data);
  const valuesPH = valuesPlaceholder(keys); 
  const sql = `INSERT INTO ${table}(${keys}) VALUES${valuesPH} RETURNING *`;
  return query(sql, params);
}


