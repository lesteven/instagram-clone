import { update } from '../../../db/crudFunctions';

function updatePostCount(req) {
  const newData = {
    posts: req.user.posts + 1,
  };
  const oldData = {
    id: req.user.id,
  };
  const table = 'users.credentials';
  const key = 'posts';
  return update(table, key, newData, oldData);
}

export default updatePostCount;
