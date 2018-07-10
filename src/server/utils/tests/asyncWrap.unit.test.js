import asyncWrap from '../asyncWrap';
import express from 'express';
import request from 'supertest';


const app = express();

const expectedResult = data => ({ data });

const asyncURL = '/async_wrap_';
const success = `${asyncURL}success`;
const promiseError = `${asyncURL}err`;
const throwError = `${asyncURL}throw`;
const thenError = `${asyncURL}then`;
const thenSuccess = `${asyncURL}then_success`;

const hello = 'hello';
const error = 'error';

const handleSuccess = (res, data) => () => res.json({data: 'hello'});
const handleFailure = (res, data) => () => res.json({data: 'error'});


app.get(success, asyncWrap(async (req, res, next) => {
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

app.get(thenError, asyncWrap(async (req, res, next) => {
  const data = await Promise.reject(error)
    .catch(e => {
      res.json({
        data: error
      });
    })
}));

app.get(thenSuccess, asyncWrap(async (req, res, next) => {
  const data = await Promise.resolve(hello)
    .then(
      handleSuccess(res, data),
      handleFailure(res, data), 
    )
}));


describe('asyncWrap', () => {
  it('should return hello', (done) => {
    return request(app)
      .get(success)
      .expect('Content-Type', /json/)
      .expect(200, expectedResult(hello),done)
  })

  it('should return promise error', (done) => {
    return request(app)
      .get(promiseError)
      .expect(500, done)
  })

  it('should return throw error', (done) => {
    return request(app)
      .get(throwError)
      .expect(500, done)
  })

  it('should be caught', (done) => {
    return request(app)
      .get(thenError)
      .expect('Content-Type', /json/)
      .expect(200, expectedResult(error), done)
  })

  it('should succeed', (done) => {
    return request(app)
      .get(thenSuccess)
      .expect('Content-Type', /json/)
      .expect(200, expectedResult(hello), done)
  })
});


