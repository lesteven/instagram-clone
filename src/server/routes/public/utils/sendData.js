
/*
  get feed and check if there is more data
*/
function checkFeed(feed) {
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
  if (user) {
    const feedData = checkFeed(feed);
    const data = {
      success: 'data fetched',
      profile: user.username,
      id: user.id,
      posts: user.posts,
      ...feedData,
      ...follow,
    };
    res.json(data);
  } else {
    res.json({ failed: 'nothing here' });
  }
}

export default sendData;
