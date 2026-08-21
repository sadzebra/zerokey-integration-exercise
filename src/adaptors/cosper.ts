import { CanonicalClient, CanonicalClientSchema } from '../canonical/schema.js';

export interface CosperMinialPayload {
  ClientRef: String;
  Forename: String | null;
  Surname: String | null;
}

export class CosperOutboundAdaptor {
  public buildRequest(input: unknown): CosperMinialPayload {
    const client = CanonicalClientSchema.parse(input);

    return {
      ClientRef: client.id,
      Forename: client.first_name,
      Surname: client.last_name
    };
  }
}
