import { query } from '../dbQueries';
import { find, update, deleteData, insert } from '../crudFunctions';
import userData from '../../utils/tests/sampleUserData';


const { email, name, username, password } = userData;
const table = 'users.credentials';

jest.mock('../dbQueries');
query.mockImplementation((sql, params) => {
  return [sql, params];
})

/*
describe('find', () => {
  it('should', () => {
  })
})

describe('update', () => {
  it('should', () => {

  })

})

describe('delete', () => {
  it('should', () => {

  })

})
*/
describe('insert', () => {
  it('should', () => {
    const keys = 'email';
    const params = [email];
    const sql = `INSERT INTO ${table}(${keys}) VALUES($1) RETURNING *`;
    expect(insert(table, keys, userData)).toEqual([sql, params]);
  })

})
