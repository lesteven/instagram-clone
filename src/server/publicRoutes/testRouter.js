import express from 'express';

const testRouter = express.Router();

testRouter.route('/')

  .get((req, res) => {
    res.json({ success: 'hello there' });
  });


export default testRouter;
