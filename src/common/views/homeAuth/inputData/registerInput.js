import createInputObject from '../../../utils/createInputObject';


const text = 'text';

export const inputData = [
  createInputObject(text, 'email', 'Email'),
  createInputObject(text, 'name', 'Full Name'),
  createInputObject(text, 'username', 'Username'),
  createInputObject('password', 'password', 'Password'),
]

const filterName = object => object.name;
const inputArr = inputData.map(filterName);

const turnToObject = (acc, value) => {
  acc[value] = '';
  return acc;
}

export const inputState = inputArr.reduce(turnToObject, {});
