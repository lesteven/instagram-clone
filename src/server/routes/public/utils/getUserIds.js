


function getUserIds(req, user) {
  console.log('userrrrrrrrr', user.id);
  console.log(req.user.id);
  if (user.id && req.user.id) {
   return {
      username: user.id,
      follower: req.user.id,
    }
  } else {
    return {}; 
  }
}

export default getUserIds;
