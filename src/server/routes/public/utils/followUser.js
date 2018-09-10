import { insert, find, deleteData } from '../../../db/crudFunctions';


const db = 'users.followers';
const key = 'username,follower';

export async function followUser(req, res) {
  const user = req.user.id;
  const followId = req.body.followId;
  const followUsername = req.params.username;

  const data = {
    username: followId,
    follower: user,
  };
  const found = await find(db, key, data);
  
  if (!found.rows[0]) {
    console.log('dont exist');
    const finished = await insert(db, key, data); 
  } else {
    console.log('already exist!');
  }
  return res.json({
    success: "you've followed",
    user,
    followId,
    followUsername,
  });
}

export function unfollowUser(req, res) {


}
