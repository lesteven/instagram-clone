import {
  mappedQueries,
  query,
  multQuery,
} from '../dbQueries';
import mockQuery from '../../mocks/mockQuery';

const table = 'users.credentials';

describe('mapped queries', () => {
  it('should generate query array', () => {
    const sql = `SELECT * FROM ${table} where email = ($1)`;
    const sql2 = `SELECT * FROM ${table} where email = ($2)`;
    const queries = [sql, sql2];

    const emailOne = 'test@gmail.com';
    const emailTwo = 'ricflair@gmail.com'; 
    const emails = [emailOne, emailTwo];

    const client = {
      query: mockQuery,
    };
    
    const expected = [[sql,emailOne],[sql2,emailTwo]];
    expect(mappedQueries(client, queries, emails)).toEqual(expected);
  })
})
