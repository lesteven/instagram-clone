import { query } from './dbQueries';
import {
  turnToParamsArr,
  valuesPlaceholder
} from '../utils/queryHelpers';


export const find = (table, keys, data) => {
  const params = turnToParamsArr(keys, data);
  const valuesPH = valuesPlaceholder(keys); 

  const findStr = `SELECT * FROM ${table}`;
  const values = `WHERE ${keys} = ${valuesPH}`;

  const sql = `${findStr} ${values}`
  return query(sql, params);
}

export const update = (table, keys, data, newValue) => {
  const params = turnToParamsArr(keys, data);
  
  const updateStr = `UPDATE ${table} SET ${keys} = ($1)`;
  const values = `WHERE ${keys} = ($2)` 
 
  const sql = `${updateStr} ${values}`;
  return query(sql, [newValue, ...params]);
}

export const deleteData = (table, keys, data) => {
  const params = turnToParamsArr(keys, data);
  const valuesPH = valuesPlaceholder(keys); 
  
  const updateStr= `DELETE FROM ${table}`;
  const values =  `WHERE ${keys} = ${valuesPH}`;
  
  const sql = `${updateStr} ${values}`;
  return query(sql, params);
}

export const insert = (table, keys, data) => {
  const params = turnToParamsArr(keys, data);
  const valuesPH = valuesPlaceholder(keys); 

  const insertStr = `INSERT INTO ${table}(${keys})`;
  const values = `VALUES${valuesPH} RETURNING *`

  const sql = `${insertStr} ${values}`;
  return query(sql, params);
}


