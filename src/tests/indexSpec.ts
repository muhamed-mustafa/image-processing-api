import request from 'supertest';
import app from '../index';
import fs from 'fs';
import { thumbPath } from '../paths';

describe('Test endpoint response', () => {
  it('gets the api/images endpoint', async () => {
    const res = await request(app)
      .get('/api/images?filename=fjord&width=300&height=400')
      .expect(200);

    expect(res.body).toBeDefined();
    expect(res.statusCode).toEqual(200);
  });
});

describe('Image transform', () => {
  it('Expect transform to not throw error', async () => {
    const Query = { filename: 'fjord', width: '200', height: '400' };

    await request(app)
      .get('/api/images')
      .query({ ...Query })
      .expect(200);

    const existingImage = fs.existsSync(
      thumbPath(`${Query.filename}-thumb(${Query.width}x${Query.height})`)
    );

    expect(existingImage).toBeDefined();
  });

  it('Expect transform to throw specific error', async () => {
    const res = await request(app).get('/api/images').expect(400);

    expect(res.body).toEqual({ error: 'Input file is missing' });
    expect(res.statusCode).toBe(400);
  });
});

afterAll(async () => {
  await fs.promises.rm('./public/assets/images/thumb', {
    recursive: true,
  });

  await fs.promises.mkdir('./public/assets/images/thumb');
});
