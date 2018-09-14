import request from 'supertest';
import app from '../../tests/app';
import {
  handleRequest,
  insertUserIntoDB,
} from '../regStrategy';
import { insertUser } from '../passportQueries';
import userData from './sampleUserData';
import { loginUser } from '../logStrategy';

jest.mock('../passportQueries');
insertUser.mockImplementation(data => data);


const url = '/reg/handleRequest';
const emailUrl = `${url}/email`;
const userUrl = `${url}/user`;
const noneUrl = `${url}/none`;

app.get(emailUrl, (req, res) => {
  const queriedData = [['email'],[]];
  handleRequest(res, null, queriedData);
})

app.get(userUrl, (req, res) => {
  const queriedData = [[],['user']];
  handleRequest(res, null, queriedData);
})

app.get(noneUrl, (req, res) => {
  const queriedData = [[],[]];
  const newData = {
    body: userData,
  }
  handleRequest(res, newData, queriedData);
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
/*
  it('should insert user into db', (done) => {
    return request(app) 
      .get(noneUrl)
      .expect({ success : 'user registered!'}, done)
  })
*/
})


