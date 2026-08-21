import { Hono } from 'hono';

import { AcornInboundAdaptor } from './adaptors/acorn.js';
import { CosperOutboundAdaptor } from './adaptors/cosper.js';

export const app = new Hono();

const acorn = new AcornInboundAdaptor();
const cosper = new CosperOutboundAdaptor();

app.post('/v1/acorn/clients/normalise', async (c) => {
  const body = await c.req.json();
  const canonical = acorn.normalise(body);

  return c.json(canonical, 200);
});
app.post('/v1/cosper/clients/build-request', async (c) => {
  const body = await c.req.json();
  const payload = cosper.buildRequest(body);
  return c.json(payload, 200);
});

app.get('/', (c) => c.text("HELLO!!!!"))

export default app;
