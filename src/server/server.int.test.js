import app from './index';
import request from 'supertest';


describe('server', () => {
  it('should', () => {
    return request(app)
      .get('/')
      .expect(200)
  })

});
