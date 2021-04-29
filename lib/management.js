"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async (client) => {
    const foo = await client.v3.send('GET /customers/addresses', { query: { include: 'formfields' } });
    foo.body.data[0].form_fields;
};
