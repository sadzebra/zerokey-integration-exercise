import { z } from 'zod';

export const CanonicalClientSchema = z.object({
  id: z.string(),
  first_name: z.string().nullable(),
  last_name: z.string().nullable()
});

export type CanonicalClient = z.infer<typeof CanonicalClientSchema>;
