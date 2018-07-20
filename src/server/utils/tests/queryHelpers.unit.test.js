import { turnToParamsArr, dataToString } from '../queryHelpers';


const userData = {
  email: 'tester@gmail.com',
  name: 'Ric Flair',
  username: 'the_greatest',
  password: 'unhashed_pw',
}

const { email, name, username, password } = userData;

describe('turnToParamsArr', () => {
  it('should single value array', () => {
    const string = 'email';
    expect(turnToParamsArr(string, userData)[0]).toBe(userData.email);
  })
  it('should turn to multiple value array', () => {
    const string = 'email,name,username,password';
    const arr = [email, name, username, password];
    expect(turnToParamsArr(string, userData)).toEqual(arr);
  }) 
})

describe('dataToString', () => {
  it('should turn to single value string', () => {
    const key = 'email';
    const valueStr = `(${email})`;
    expect(dataToString(key, userData)).toBe(valueStr);
  })
  it('should turn to multi value string', () => {
    const keys = 'email,name,username,password';
    const valueStr = `(${email},${name},${username},${password})`;
    expect(dataToString(keys, userData)).toBe(valueStr);
  })
})
