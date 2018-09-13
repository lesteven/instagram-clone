

SELECT * 
FROM users.followers INNER JOIN users.feed ON 
  users.followers.username = users.feed.username 
  INNER JOIN users.credentials ON 
  users.feed.username = users.credentials.id 
  WHERE users.followers.follower = 24
  ORDER BY users.feed.id DESC LIMIT 4; 
