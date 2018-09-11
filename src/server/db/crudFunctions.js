import { query } from './dbQueries';
import {
  turnToParamsArr,
  valuesPlaceholder,
} from '../utils/queryHelpers';


const where = (params, data) => {
  const dataKeys = Object.keys(data);
  let values = 'WHERE ';
  for (let i = 0; i < params.length; i++) {
    values += `${dataKeys[i]} = ($${i+1})`; 
    if (i < params.length -1) {
      values += ' and ';
    } 
  }
  return values;
}

export const find = (table, keys, data) => {
  const params = turnToParamsArr(keys, data);
  const valuesPH = valuesPlaceholder(keys);
  
  const findStr = `SELECT * FROM ${table}`;
  const values = where(params, data); 

  const sql = `${findStr} ${values}`;
  return query(sql, params);
};

export const update = (table, keys, newData, oldData) => {
  // const params = turnToParamsArr(keys, oldData);
  const key = Object.keys(newData);
  const updateStr = `UPDATE ${table} SET ${key[0]} = ($1)`;
  const values = `WHERE ${keys} = ($2)`;

  const sql = `${updateStr} ${values}`;
  return query(sql, [newData[key[0]], oldData]);
};

export const deleteData = (table, keys, data) => {
  const params = turnToParamsArr(keys, data);
  const valuesPH = valuesPlaceholder(keys);

  const updateStr = `DELETE FROM ${table}`;
  // const values = `WHERE ${keys} = ${valuesPH}`;
  const values = where(params, data);

  const sql = `${updateStr} ${values}`;
  return query(sql, params);
};

export const insert = (table, keys, data) => {
  const params = turnToParamsArr(keys, data);
  const valuesPH = valuesPlaceholder(keys);

  const insertStr = `INSERT INTO ${table}(${keys})`;
  const values = `VALUES${valuesPH} RETURNING *`;

  const sql = `${insertStr} ${values}`;
  return query(sql, params);
};
