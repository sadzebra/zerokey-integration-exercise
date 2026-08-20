import { z } from 'zod';
import { CanonicalClient, CanonicalClientSchema } from '../canonical/schema.js';

const AcornSchema = z.object({
  id: z.union([z.string(), z.number()]),
  person: z.object({
    firstName: z.string().nullish(),
    lastName: z.string().nullish()
  })
});

export class AcornInboundAdaptor {
  public normalise(raw: unknown): CanonicalClient {
    const data = AcornSchema.parse(raw);

    return CanonicalClientSchema.parse({
      id: String(data.id),
      first_name: data.person.firstName ?? null,
      last_name: data.person.lastName ?? null
    });

  }
}
