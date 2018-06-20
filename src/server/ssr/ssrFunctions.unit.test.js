import {
  handleRender,
  getData,
  renderFullPage,
  sendError,
  sanitizeData
} from './ssrFunctions';
import express from 'express';
import request from 'supertest';
import React from 'react';
import * as testSetup from '../../../test-setup.js';
import { render, shallow } from 'enzyme';

const errorMsg = 'there was an error';
const serverErr = 500;

const handleFail = (req, res) => {
  try {
    throw new Error('test error');
  }
  catch (e) {
    sendError(res);
  }
}

const appFail = express();
const appSuccess= express();

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

describe('sanitize data', () => {
  const hello = 'hello';
  const output = JSON.stringify(hello);
  it('should return back value', () => {
    expect(sanitizeData(hello)).toBe(output)
  }) 
  it('should return back value', () => {
    const uncleanData = JSON.stringify(`<${hello}/>`);
    expect(sanitizeData(uncleanData)).not.toMatch(/</) ;
  }) 
})


