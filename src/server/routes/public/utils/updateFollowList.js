import { update } from '../../../db/crudFunctions';

const table = 'users.credentials';

function editFollowing(req, following) {
  const newData = {
    following,
  };
  const oldData = {
    id: req.user.id,
  };
  return update(table, newData, oldData);
}

function editFollower(req, data, followers) {
  const newData = {
    followers,
  };
  const oldData = {
    id: data.username,
  };
  return update(table, newData, oldData);
}

// username is the person being followed

// edit follower to username's list
// edit following to follower's list
export function addToFollowLists(req, data) {
  const addFollowing = req.user.following + 1;
  const addFollower = req.body.numFollowers + 1;
  editFollowing(req, addFollowing);
  editFollower(req, data, addFollower);
}

// remove following from follower's list
// remove follower from username's list
export function removeFromFollowLists(req, data) {
  const removeFollowing = req.user.following - 1;
  const removeFollower = req.body.numFollowers - 1;
  editFollowing(req, removeFollowing);
  editFollower(req, data, removeFollower);
}
