import createInputObject from '../../../utils/createInputObject';
import { arrToState, mapInput } from './transformArray';

const text = 'text';

// data to map to jsx
const inputData = [
  createInputObject(text, 'email', 'Email'),
  createInputObject(text, 'name', 'Full Name'),
  createInputObject(text, 'username', 'Username'),
  createInputObject('password', 'password', 'Password'),
];

// for react state data
export const inputState = arrToState(inputData);


// bind function to class in order to map data 
export function mappedInput() {
  const boundMap = mapInput.bind(this);
  return boundMap(inputData);
}
