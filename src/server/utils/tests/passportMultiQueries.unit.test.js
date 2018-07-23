import {
  make2Dparam,
  makeQueryArr,
  checkAvailability,
} from '../passportMultiQueries';
import userData from './sampleUserData';

const { email, name, username, password } = userData;
const db = 'users.credentials';


describe('make2Dparam', () => {
  it('should make 2d arr w/ 1 data point', () => {
    const keys = 'email';
    const expected = [[email]];
    expect(make2Dparam(keys, userData)).toEqual(expected);
  })

  it('should 2d arr with 2 data points', () => {
    const keys = 'email,username';
    const expected = [[email], [username]];
    expect(make2Dparam(keys, userData)).toEqual(expected);
  })
})

describe('makeQueryArr', () => {
  const emailQuery = `SELECT * FROM ${db} WHERE email = $1`;
  const userQuery = `SELECT * FROM ${db} WHERE username = $1`;

  it('should return 2d arr w/ 1 data point', () => {
    const key = 'email';
    const queryArr = [emailQuery];
    expect(makeQueryArr(key, userData)).toEqual(queryArr);
  })

  it('should return 2d arr w/ 2 data points', () => {
    const keys = 'email,username';
    const queryArr = [emailQuery, userQuery];
    expect(makeQueryArr(keys, userData)).toEqual(queryArr);
  })
})

/*
describe('checkAvailability', () => {
  it('should', () => {
    expect(checkAvailability(userData)).toBe('test');
  })
})
*/
