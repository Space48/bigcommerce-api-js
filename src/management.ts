import type { Client as V2Client } from "./v2";
import type { Client as V3Client } from "./v3";

export interface Client {
  readonly v2: V2Client
  readonly v3: V3Client
}


async (client: Client) => {
  const foo = await client.v3.send('GET /customers/addresses', {query: {include: 'formfields'}})
  foo.body.data[0].form_fields
}
