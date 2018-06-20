import {
  handleRender,
  getData,
  renderFullPage,
  sendError
} from './ssrFunctions';
import express from 'express';
import request from 'supertest';
import React from 'react';
import * as testSetup from '../../../test-setup.js';
import { render } from 'enzyme';

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


describe('renderFullPage', () => {
  it('should return hello in preloaded state', () => {
    const preloadedState = 'hello';
    const html = <div></div>;
    const wrapper = render(renderFullPage(html, preloadedState));
    //const wrapper = render(<renderFullPage />);
    expect(wrapper.text()).to.contain('hello'); 
  })
});


