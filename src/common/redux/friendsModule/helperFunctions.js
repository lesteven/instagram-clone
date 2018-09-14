
const followStatus = (data) => {
  if (data.follow) {
    return {
      text: 'Following',
      className: 'following',
    };
  }
  return {
    text: 'Follow',
    className: 'follow',
  };
};

export default followStatus;
