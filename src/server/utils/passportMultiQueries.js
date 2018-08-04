import { turnToParamsArr } from './queryHelpers';
import { multQuery } from '../db/dbQueries';


export const make2Dparam = (keys, data) => {
  const keysArr = keys.split(',');
  const paramArr = keysArr.map(key => turnToParamsArr(key, data));
  return paramArr;
};

export const makeQueryArr = (keys) => {
  const keysArr = keys.split(',');
  const db = 'users.credentials';

  const queryArr = [];
  for (let i = 0; i < keysArr.length; i += 1) {
    const key = keysArr[i];
    queryArr[i] = `SELECT * FROM ${db} WHERE ${key} = $1`;
  }
  return queryArr;
};

export const checkAvailability = (data) => {
  const keys = 'email,username';
  const paramArr = make2Dparam(keys, data);
  const queryArr = makeQueryArr(keys, data);
  // multQuery(queryArr, paramArr);
  return multQuery(queryArr, paramArr);
};


