
CREATE FUNCTION addPosts() RETURNS void AS $$
DECLARE
  i INTEGER := 1;

BEGIN

  FOR i IN 1..17 LOOP     
    INSERT INTO users.feed (username, imgname)
      VALUES (4, CONCAT(i,'.jpg'));
  END LOOP;

END;
$$ LANGUAGE plpgsql;
