import { describe, it, expect } from 'vitest';
import { AcornInboundAdaptor } from '../../src/adaptors/acorn.js';

describe('AcornInboundAdaptor', () => {
  it('testing initial basic mapping for acorn payload', () => {
    const adaptor = new AcornInboundAdaptor();
    const rawAcornPayload = {
      id: 90210,
      person: {
        firstName: 'failed',
        lastName: 'test'
      }
    };

    const canonical = adaptor.normalise(rawAcornPayload);

    expect(canonical).toEqual({
      id: '90210',
      first_name: 'failed',
      last_name: 'test'
    });
  });
});


