export const sampleOrderShipmentResponse = {
  "id": 11,
  "order_id": 228,
  "customer_id": 11,
  "order_address_id": 131,
  "date_created": "Wed, 13 Mar 2019 16:35:37 +0000",
  "tracking_number": "EJ958083578US",
  "merchant_shipping_cost": "0.0000",
  "shipping_method": "None",
  "comments": "Ready to go...",
  "shipping_provider": "usps",
  "tracking_carrier": "",
  "billing_address": {
    "first_name": "Jane",
    "last_name": "Doe",
    "company": "",
    "street_1": "123 Main Street",
    "street_2": "",
    "city": "Austin",
    "state": "Texas",
    //"zip": "78751",
    "zip": 78751,
    "country": "United States",
    "country_iso2": "US",
    //"phone": "",
    "email": "janedoe@example.com"
  },
  "shipping_address": {
    "first_name": "Trishy",
    "last_name": "Test",
    "company": "Acme Pty Ltd",
    "street_1": "666 Sussex St",
    "street_2": "",
    "city": "Anywhere",
    "state": "Some State",
    "zip": "12345",
    "country": "United States",
    "country_iso2": "US",
    "phone": "",
    "email": "elsie@example.com"
  },
  "items": [
    {
      "order_product_id": 194,
      "product_id": 0,
      "quantity": 1
    },
    {
      "order_product_id": 195,
      "product_id": 0,
      "quantity": 1
    }
  ]
} as const;

export const sampleInvalidOrderShipmentResponse = {
  "id": 11,
  "order_id": 228,
  "customer_id": 11,
  "order_address_id": 131,
  "date_created": "Wed, 13 Mar 2019 16:35:37 +0000",
  "tracking_number": "EJ958083578US",
  "merchant_shipping_cost": "0.0000",
  "shipping_method": "None",
  "comments": "Ready to go...",
  "shipping_provider": "usps",
  "tracking_carrier": "",
  "billing_address": {
    "first_name": "Jane",
    "last_name": "Doe",
    "company": "",
    "street_1": "123 Main Street",
    "street_2": "",
    "city": "Austin",
    "state": "Texas",
    //"zip": "78751",
    "zip": 78751,
    "country": "United States",
    "country_iso2": "US",
    //"phone": "",
    "email": "janedoe@example.com"
  },
  "shipping_address": {
    "first_name": "Trishy",
    "last_name": "Test",
    "company": "Acme Pty Ltd",
    "street_1": "666 Sussex St",
    "street_2": "",
    "city": "Anywhere",
    "state": "Some State",
    "zip": "12345",
    "country": "United States",
    "country_iso2": "US",
    "phone": "",
    "email": "elsie@example.com"
  },
  "items": [
    {
      "order_product_id": "194",
      "product_id": 0,
      "quantity": 1
    },
    {
      "order_product_id": 195,
      "product_id": 0,
      "quantity": 1
    }
  ]
} as const;

export const sampleInvalidOrderShipmentResponse2 = {
  "id": 11,
  "order_id": 228,
  "customer_id": 11,
  "order_address_id": "131",
  "date_created": "Wed, 13 Mar 2019 16:35:37 +0000",
  "tracking_number": "EJ958083578US",
  //"merchant_shipping_cost": "0.0000", missing
  "shipping_method": "None",
  "comments": "Ready to go...",
  "shipping_provider": "usps",
  "tracking_carrier": "",
  "billing_address": {
    "first_name": "Jane",
    "last_name": "Doe",
    "company": "",
    "street_1": "123 Main Street",
    "street_2": "",
    "city": "Austin",
    "state": "Texas",
    //"zip": "78751",
    "zip": 78751,
    "country": "United States",
    "country_iso2": "US",
    //"phone": "",
    "email": "janedoe@example.com"
  },
  "shipping_address": {
    "first_name": "Trishy",
    "last_name": "Test",
    "company": "Acme Pty Ltd",
    "street_1": "666 Sussex St",
    "street_2": "",
    "city": "Anywhere",
    "state": "Some State",
    "zip": "12345",
    "country": "United States",
    "country_iso2": "US",
    "phone": "",
    "email": "elsie@example.com"
  },
  "items": [
    {
      "order_product_id": 194,
      "product_id": 0,
      "quantity": 1
    },
    {
      "order_product_id": 195,
      "product_id": 0,
      "quantity": 1
    }
  ]
} as const;
