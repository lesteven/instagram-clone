import { query } from '../db/dbQueries';

export function findUser(req) {
  const string = 'SELECT * FROM users.credentials WHERE email = $1';
  return query(string, [req.email]);
}

export function updateUser() {

}
