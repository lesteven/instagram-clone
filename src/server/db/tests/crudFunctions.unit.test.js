import { query } from '../dbQueries';
import { find, update, deleteData, insert } from '../crudFunctions';
import userData from '../../utils/tests/sampleUserData';


const { email, name, username, password } = userData;
const table = 'users.credentials';

jest.mock('../dbQueries');
query.mockImplementation((sql, params) => {
  return [sql, params];
})

const key = 'email';
const param = [email];

describe('find', () => {
  it('should select w/ one value', () => {
    const sql = `SELECT * FROM ${table} WHERE ${key} = ($1)`;
    expect(find(table, key, userData)).toEqual([sql, param])
  })
})

describe('update', () => {
  it('should update w/ one value', () => {
    const newEmail = 'ricflair@gmail.com';
    const updateStr = `UPDATE ${table} SET ${key} = ($1)`;
    const values = `WHERE ${key} = ($2)`;

    const sql = `${updateStr} ${values}`;
    const updateParams = [newEmail, ...param];
    expect(update(table, key, userData, newEmail))
      .toEqual([sql, updateParams])
  })

})

describe('delete', () => {
  it('should delete w/ one value', () => {
    const deleteStr = `DELETE FROM ${table}`;
    const values = `WHERE ${key} = ($1)`;
    
    const sql = `${deleteStr} ${values}`;
    expect(deleteData(table, key, userData)).toEqual([sql, param])
  })

})

describe('insert', () => {
  it('should insert one value', () => {
    const sql = `INSERT INTO ${table}(${key}) VALUES($1) RETURNING *`;
    expect(insert(table, key, userData)).toEqual([sql, param]);
  })
  it('should insert multiple values', () => {
    const keys = 'email,name,username,password';
    const params = [email, name, username, password];
    const place = `($1,$2,$3,$4)`;
    const sql = `INSERT INTO ${table}(${keys}) VALUES${place} RETURNING *`;
    expect(insert(table, keys, userData)).toEqual([sql, params]);
  })
})
