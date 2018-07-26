import {
  filterName,
  turnToObject,
  arrToState,
} from '../inputData/transformArray';

const email = 'email';
const username = 'username';
const password = 'password';
const fullName = 'name';

const data = [
  { name: email, test : 5 },
  { name: username, test : 6 },
  { name: password, test : 7},
  { name: fullName, test : 8 },
]

describe('filterName', () => {
  it('should only let names through', () => {
    const arr = [email, username, password, fullName];
    expect(data.map(filterName)).toEqual(arr);
  })
})

describe('turnToObject', () => {
  it('should turn array to object', () => {
    const arr = [1,2,3,4,5];
    const object = {
      1:'',
      2:'',
      3:'',
      4:'',
      5:'',
    }
    expect(arr.reduce(turnToObject,{})).toEqual(object);
  })
})


describe('arrToState', () => {
  it('should turn array into state object', () => {
    const state = {
      [email]: '',
      [username]: '',
      [password]: '',
      [fullName]: '',
    }
    expect(arrToState(data)).toEqual(state);
  })
})
