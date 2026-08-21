import { describe, it, expect } from 'vitest';
import { app } from '../src/index.js';

describe('End-to-End Pipeline - Step 1', () => {
  it('normalises Acorn payload and transforms it for Cosper', async () => {
    const normaliseRes = await app.request('/v1/acorn/clients/normalise', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: 90210,
        person: { firstName: 'Priya', lastName: 'Chandra-Bose' },
      }),
    });

    expect(normaliseRes.status).toBe(200);
    const canonicalClient = await normaliseRes.json();

    const buildRes = await app.request('/v1/cosper/clients/build-request', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(canonicalClient),
    });

    expect(buildRes.status).toBe(200);
    const cosperPayload = await buildRes.json();

    expect(cosperPayload).toEqual({
      ClientRef: '90210',
      Forename: 'Priya',
      Surname: 'Chandra-Bose',
    });
  });
});
