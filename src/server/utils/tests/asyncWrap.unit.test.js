import asyncWrap from '../asyncWrap';
import express from 'express';
import request from 'supertest';


const app = express();

const expectedResult = data => ({ data });
const urlSuccess = '/'
const promiseError = '/err';
const throwError = '/throw';

const hello = 'hello';
const error = 'error';

app.get(urlSuccess, asyncWrap(async (req, res, next) => {
  const data = await Promise.resolve(hello);
  res.json({ data });  
}));

app.get(promiseError, asyncWrap(async (req, res, next) => {
  const data = await Promise.reject(error);
  res.json({ data });  
}));


app.get(throwError, asyncWrap(async (req, res, next) => {
  throw new Error(error);
}));


describe('asyncWrap', () => {
  it('should return hello', () => {
    return request(app)
      .get(urlSuccess)
      .expect(200, expectedResult(hello))
      .expect('Content-Type', /json/)
  })

  it('should return promise error', () => {
    return request(app)
      .get(promiseError)
      .expect(500)
  })

  it('should return throw error', () => {
    return request(app)
      .get(throwError)
      .expect(500)
  })
});


