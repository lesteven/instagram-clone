import { findUser, insertUser } from '../passportQueries';
import { query } from '../../db/dbQueries';
import userData from './sampleUserData';
import mockQuery from '../../mocks/mockQuery';


jest.mock('../../db/dbQueries');

query.mockImplementation(mockQuery);

const table = 'users.credentials';
const key = 'email';
const { email, name, username, password } = userData;

describe("find user", () => {
  it('should give correct sql command', () => {
    const sql = `SELECT * FROM ${table} WHERE ${key} = ($1)`;
    const param = [email];
    expect(findUser(userData)).toEqual([sql, param]);
  })
})

describe("insert user", () => {
  it('should give correct sql insert', () => {
    const insert = `INSERT INTO ${table}(email,name,username,password)`;
    const values = `VALUES($1,$2,$3,$4) RETURNING *`;
    
    const sql = `${insert} ${values}`;
    const params = [email, name, username, password];
    expect(insertUser(userData)).toEqual([sql, params]);
  })
})
