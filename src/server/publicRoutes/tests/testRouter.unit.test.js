import express from 'express';
import testRouter from '../testRouter';
import request from 'supertest';

const app = express();

app.use('/test', testRouter);

const response = { success: 'hello there' }

describe('testRouter', () => {
  it('should', () => {
    return request(app)
      .get('/test')
      .expect(200, response)
  })

});
