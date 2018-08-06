import { find, insert } from '../db/crudFunctions';


const userTable = 'users.credentials';


export const findUser = data => find(userTable, 'email', data);

const insertKeys = 'email,name,username,password';
export const insertUser = data => insert(userTable, insertKeys, data);
