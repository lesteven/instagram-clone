import { find } from '../../../db/crudFunctions';

const debug = require('debug')('http');

async function getUser(req) {
  // debug('accounts visted!!!');
  const userData = {
    username: req.params.username,
  };
  const data = await find('users.credentials', 'username', userData);
  const user = data.rows[0];
  return user;
}

export default getUser;
