    
function sendData(res, user, feed) { 
  if (user) {
    res.json({
      profile: user.username,
      feed: feed.rows
    });
  } else {
    res.json({ hello: 'nothing here' });
  }
}

export default sendData;
