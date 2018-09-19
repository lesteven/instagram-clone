

const authCheck = (req,res,next) => {
  if (req.user) {
    next();
  } else {
    res.json({'failed': 'must be authenticated'});
  }
}

export default authCheck;
