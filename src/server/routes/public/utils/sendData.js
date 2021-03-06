
/*
  get feed and check if there is more data
*/
export function checkFeed(feed) {
  const feedObj = {};
  if (feed.rows.length === 4) {
    feedObj.feed = feed.rows.slice(0, 3);
    feedObj.hasOldPage = true;
  } else {
    feedObj.feed = feed.rows;
    feedObj.hasOldPage = false;
  }
  return feedObj;
}


function sendData(res, user, feed, follow) {
//  console.log('user in sendData', user);
  if (user) {
    const feedData = checkFeed(feed);
    const data = {
      success: 'data fetched',
      profile: user.username,
      id: user.id,
      posts: user.posts,
      following: user.following,
      followers: user.followers,
      userimage: user.userimage,
      ...feedData,
      ...follow,
    };
    res.json(data);
  } else {
    res.json({ failed: 'nothing here' });
  }
}

export default sendData;
