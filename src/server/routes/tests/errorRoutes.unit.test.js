import express from 'express';
import request from 'supertest';
import fs from 'fs';
import handleError from '../errorRoutes';
import app from '../../tests/app';

const errURL = '/handleErr';
const asyncURL = '/handleAsync';

const errorAlert = 'error alert!';

app.get(errURL, (req, res) => {
  try {
    throw Error('there was an error!');
  } catch (e) {
    res.send(errorAlert);
  }
});


app.get(asyncURL, (req, res, next) => {
  fs.readFile('lala', (err, data) => {
    if (err) {
      next(err);
    } else {
      res.send(data);
    }
  });
});

handleError(app);

describe('handleError', () => {
  it('should not reach json error', (done) => {
    request(app)
      .get(errURL)
      .expect(errorAlert)
      .expect(200, done)
  })

  it('should send back json', (done) => {
    request(app)
      .get(asyncURL)
      .expect('Content-Type', /json/)
      .expect(200, {[asyncURL]:'there was an error' }, done)
  })
})


