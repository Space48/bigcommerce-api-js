# bigcommerce-api-js

A JavaScript client for BigCommerce's [Management](src/management/README.md) API with full TypeScript typings for all API endpoints.

## Features

- Full coverage of BigCommerce's Storefront (coming soon) and Management APIs.
- Up-to-date TypeScript typings for all of BigCommerce's API endpoints.
- Easy IDE autocompeletion of endpoints, parameters and response data thanks to TypeScript.
- Automatic retry of intermittent errors such as 429 and 5xx with exponential backoff.

### Coming soon

- Type declarations for webhook payloads.
- Browser support.

## Supported environments

- Node.js >=10
- Browser support is coming soon.

# Getting started

To get started with the JavaScript client you'll need to install it, and then follow the instructions for either the Storefront API client or the Management API client.

- [Installation](#installation)
- [Getting started with the Storefront API client](src/storefront/README.md#getting-started)
- [Getting started with the Management API client](src/management/README.md#getting-started)

## Installation

### Node

```sh
npm install @space48/bigcommerce-api
```

### Browser

Coming soon.

### Typings

This library also comes with typings to use with TypeScript.

## Versioning

This project strictly follows [Semantic Versioning](http://semver.org/).

## Support

If you have a problem with this library, please file an [issue](https://github.com/Space48/bigcommerce-api-js/issues/new) here on GitHub.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md)

## License

MIT
