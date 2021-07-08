# BigCommerce Management V3 API client

A JavaScript client for BigCommerce's Management V3 API with full TypeScript coverage.

For non-V3 specific documentation see the [Management API readme](../README.md).

# V3 client methods

The V3 client provides several high-level methods which should generally be used when interacting with the V3 API, as well as a lower level `send` method which can be used when the behavior of the higher-level methods is insufficient.

## High-level methods

### v3.get()

`v3.get(path, params?): Promise<response.body.data | null>`

Sends a GET request to /v3/{path} with the specified parameters. Returns response.body.data on success and `null` in the case of a 404. Throws an error if some other error status (4xx or 5xx) is returned.

### v3.post()

`v3.post(path, params?): Promise<response.body.data>`

Sends a POST request to /v3/{path} with the specified parameters. Returns response.body.data on success. Throws an error if any error status (4xx or 5xx) is returned.

### v3.put()

`v3.put(path, params?): Promise<response.body.data>`

Sends a PUT request to /v3/{path} with the specified parameters. Returns response.body.data on success. Throws an error if any error status (4xx or 5xx) is returned.

### v3.delete()

`v3.delete(path, params?): Promise<response.body.data | null>`

Sends a DELETE request to /v3/{path} with the specified parameters. Returns response.body.data on a 200 response and `null` on 204. Throws an error if any error status (4xx or 5xx) is returned.

### v3.list()

`v3.list(path, params?): AsyncIterable<item>`

Sends GET requests to the paginated endpoint /v3/{path} with the specified parameters, automatically iterating through the pages and yielding the items using an `AsyncIterable`. Throws an error if any error status (4xx or 5xx) is returned.

## Low-level send() method

`v3.send(requestLine, params?): Promise<response>`

Sends a request and returns the response as is. Only throws if there is a network error. 4xx and 5xx responses are simply returned.

For example:
```js
const response = await Management.v3.send('GET /catalog/products/{product_id}', { path: { product_id: 123 } });
if (response.status === 200) {
  response.body // { data: { id: 123, ... }, meta: { ... } }
} else if (response.status === 404) {
  // product does not exist
}
```
