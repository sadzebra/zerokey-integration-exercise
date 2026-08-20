import { describe, it, expect } from 'vitest';
import { CosperOutboundAdaptor } from '../../src/adaptors/cosper.js';
import { CanonicalClient } from '../../src/canonical/schema.js';

describe('CosperOutboundAdaptor', () => {
  it('testing initial basic cosper data', () => {
    const adaptor = new CosperOutboundAdaptor();
    const canonical: CanonicalClient = {
      id: '90210',
      first_name: 'test',
      last_name: 'passed'
    };

    const cosperPayload = adaptor.buildRequest(canonical);

    expect(cosperPayload).toEqual({
      ClientRef: '90210',
      Forename: 'test',
      Surname: 'passed'
    });
  });
});

