import request from 'supertest';
import app from '../../tests/app';
import { handleRequest } from '../regStrategy';


const url = '/reg/handleRequest';
const emailUrl = `${url}/email`;
const userUrl = `${url}/user`;

app.get(emailUrl, (req, res) => {
  const queriedData = [['email'],[]];
  handleRequest(res, null, queriedData);
})

app.get(userUrl, (req, res) => {
  const queriedData = [[],['user']];
  handleRequest(res, null, queriedData);
})

describe('handleRequest', () => {
  it('should say email used', (done) => {
    return request(app)
      .get(emailUrl)
      .expect({ failed : 'email already used' }, done)
  })
  it('should say user used', (done) => {
    return request(app)
      .get(userUrl)
      .expect({ failed : 'user already exist' }, done)
  })
})
