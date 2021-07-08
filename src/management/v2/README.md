# BigCommerce Management V2 API client

A JavaScript client for BigCommerce's Management V2 API with full TypeScript coverage.

For non-V2 specific documentation see the [Management API readme](../README.md).

# V2 client methods

The V2 client provides several high-level methods which should generally be used when interacting with the V2 API, as well as a lower level `send` method which can be used when the behavior of the higher-level methods is insufficient.

## High-level methods

### v2.get()

`v2.get(path, params?): Promise<response.body | null>`

Sends a GET request to /v2/{path} with the specified parameters. Returns response.body on success and `null` in the case of a 404. Throws an error if some other error status (4xx or 5xx) is returned.

### v2.post()

`v2.post(path, params?): Promise<response.body>`

Sends a POST request to /v2/{path} with the specified parameters. Returns response.body on success. Throws an error if any error status (4xx or 5xx) is returned.

### v2.put()

`v2.put(path, params?): Promise<response.body>`

Sends a PUT request to /v2/{path} with the specified parameters. Returns response.body on success. Throws an error if any error status (4xx or 5xx) is returned.

### v2.delete()

`v2.delete(path, params?): Promise<response.body | null>`

Sends a DELETE request to /v2/{path} with the specified parameters. Returns response.body on a 200 response and `null` on 204. Throws an error if any error status (4xx or 5xx) is returned.

## Low-level send() method

`v2.send(requestLine, params?): Promise<response>`

Sends a request and returns the as is. Only throws if there is a network error. 4xx and 5xx responses are simply returned.

For example:
```js
const response = await Management.v2.send('GET /customers/{customer_id}', { path: { customer_id: 123 } });
if (response.status === 200) {
  response.body // { data: { id: 123, ... }, meta: { ... } }
} else if (response.status === 404) {
  // customer does not exist
}
```
