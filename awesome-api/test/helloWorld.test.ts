import { expect } from 'chai';
import { agent as request } from 'supertest';
import 'mocha';

import App from '../src/index';

const apiUrl = '/api/v1';

describe('baseRoute', () => {
  it('should GET', async () => {
    const res = await request(App).get(`${apiUrl}/helloWorld`);
    expect(res.status).to.equal(200);
    expect(res.type).to.equal('application/json');
    expect(res.body.message).to.equal('Hello World!');
  });

  it('should GET name', async () => {
    const res = await request(App).get(`${apiUrl}/helloWorld/ahmed`);
    expect(res.status).to.equal(200);
    expect(res.type).to.equal('application/json');
    expect(res.body.message).to.equal('Hello ahmed!');
  });
});
