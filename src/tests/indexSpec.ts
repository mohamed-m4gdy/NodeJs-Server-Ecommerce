import supertest from 'supertest';
import app from '../index';

// Create A Request object
const request = supertest(app);

describe('Test Basic EndpointServer', () => {
  it('Get The / Endpoint', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
  });
});
