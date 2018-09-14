import { insert, find, deleteData } from '../../../db/crudFunctions';
import {
  addToFollowLists,
  removeFromFollowLists,
} from './updateFollowList';

const debug = require('debug')('http');

const db = 'users.followers';
const key = 'username,follower';

export async function findIfFollow(data) {
  const isFollowing = await find(db, key, data);
  return isFollowing;
}

export async function followStatus(data) {
  const sendData = {};
  if (Object.keys(data).length == 2) {
    const found = await find(db, key, data);
    if (!found.rows[0]) {
      sendData.follow = false;
    } else {
      sendData.follow = true;
    }
  } 
  
  return sendData;
}

export async function insertResult(req, data, found) {
  const sendData = {};
  debug('insertResult', data, found.rows, req.user);
  if (!found.rows[0]) {
    debug('dont exist');
    addToFollowLists(req, data);
    const finished = await insert(db, key, data);
    
    sendData.follow = true;
  } else {
    debug('already exist!');
    removeFromFollowLists(req, data);
    const finished = await deleteData(db, key, data);
    sendData.follow = false;
  }
  return sendData;
}

export async function checkFollowing(req, data) {
  const found = await find(db, key, data);
  const sendData = await insertResult(req, data, found);

  return sendData;
}

export async function followUser(req, res) {
  const userId = req.user.id;
  const followId = req.body.followId;
  const followUsername = req.params.username;

  const data = {
    username: followId,
    follower: userId,
  };

  const sendData = await checkFollowing(req, data);

  return res.json({
    success: 'action completed',
    ...sendData,
  });
}
