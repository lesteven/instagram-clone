

function getUserIds(req, user) {
//  console.log('userrrrrrrrr', user.id);
//  console.log(req.user.id);
  if (user && req.user) {
    return {
      username: user.id,
      follower: req.user.id,
    };
  }
  return {};
}

export default getUserIds;
