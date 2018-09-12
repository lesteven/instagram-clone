

function getUserIds(req, user) {
  console.log('userrrrrrrrr', user.id);
  console.log('req.user.id', req.user.id);
  if (user.id && req.user.id) {
    return {
      username: user.id,
      follower: req.user.id,
    };
  }
  return {};
}

export default getUserIds;
