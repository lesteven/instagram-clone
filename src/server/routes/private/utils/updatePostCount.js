import { update } from '../../../db/crudFunctions';
import { query } from '../../../db/dbQueries';

function updatePostCount(req) {
  const userId = req.user.id
  const newData = {
    posts: req.user.posts + 1,
  }
  const oldData = {
    id: req.user.id,
  }
  const table = 'users.credentials';
  const key = 'posts';
  return update(table, key, newData, oldData); 

}

export default updatePostCount;
