import request from 'supertest';
import app from '../../tests/app';
import { sendError, sendSuccess } from '../serverResponse';


const testUrl = '/serverresponse';
const successMsg = 'success!';
const errorMsg = 'error!';

const successUrl = `${testUrl}/success`;
const errorUrl = `${testUrl}/error`;

const jsonHeader ='application/json; charset=utf-8';

app.get(successUrl, (req, res) => { 
  sendSuccess(res, successMsg)();
})

app.get(errorUrl, (req, res) => { 
  sendError(res, 404, errorMsg)();
})

describe('sendSuccess', () => {
  it('should send json', (done) => {
    return request(app)
      .get(successUrl)
      .expect('Content-type', jsonHeader)
      .expect({ success: successMsg }) 
      .expect(200, done)
  })
})

describe('sendError', () => {
  it('should send json', (done) => {
    return request(app)
      .get(errorUrl)
      .expect('Content-type', jsonHeader)
      .expect({ failed: errorMsg }) 
      .expect(404, done)
  })
})

