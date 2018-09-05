
function sendData(res, user, feed) {
  if (user) {
    res.json({
      success: 'data fetched',
      profile: user.username,
      feed: feed.rows,
    });
  } else {
    res.json({ failed: 'nothing here' });
  }
}

export default sendData;
