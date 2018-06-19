import {
  handleRender,
  getData,
  renderFullPage
} from './ssrFunctions';
import express from 'express';
import request from 'supertest';

const appFail = express();
const appSuccess= express();

const errorMsg = 'there was an error';
const serverErr = 500;
const handleFail = (req, res) => {
  try {
    throw new Error('test error');
  }
  catch (e) {
    res.status(serverErr).send(errorMsg);
  }
}

appFail.use(handleFail);
appSuccess.use(handleRender);

describe('handleRender', () => {
  it('should return error', () => {
    return request(appFail)
      .get('/')
      .expect(serverErr)
      .expect(errorMsg);
  })
  it('should return success', () => {
    return request(appSuccess)
      .get('/')
      .expect(200);
  });
});

describe('getData', () => {

});

describe('renderFullPage', () => {

});


