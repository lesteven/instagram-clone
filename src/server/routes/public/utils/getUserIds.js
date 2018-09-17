

function getUserIds(req, user) {
//  console.log('inside getUserIds');
  if (user && req.user) {
    return {
      username: user.id,
      follower: req.user.id,
    };
  }
  if (user && req.params.user) {
    return {
      username: user.id,
      follower: req.params.user,
    };
  }
  return {};
}

export default getUserIds;
