/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  readonly "/estimate": {
    /**
     * Submit the quote request to retrieve a estimate from the enabled third party tax provider. Estimates are not expected to be persisted by the tax provider.
     *
     * The following actions can trigger tax estimate requests multiple times during a standard checkout on a BigCommerce storefront, depending on the BigCommerce merchant's settings.
     *
     * - After selecting a Shipping Method during the “Estimate Shipping & Tax” facility on the Cart page.
     * - After specifying a Shipping Address during a Checkout.
     * - After selecting a Shipping Method during a Checkout.
     * - After specifying a Billing Address during a Checkout.
     *
     * The following actions are not expected to trigger estimate requests.
     *
     * - While anonymously browsing a store’s product catalog.
     * - On the Cart page prior to a Shopper selecting a Shipping Method via “Estimate Shipping & Tax”.
     * - On the Checkout page prior to specifying a Shipping Address.
     * - On the Checkout page, when toggling any option related to using the shopper’s Shipping Address as their Billing Address.
     *
     * The following control panel can also trigger tax estimation requests.
     *
     * - Order refund flows.
     * - Test connection feature in Tax Settings.
     */
    readonly post: operations["estimate"];
  };
  readonly "/void": {
    /** Invalidate the persisted tax quote as identified by the given unique ID. Relevant to order cancellations or when moving an order from a paid status to an unpaid status. */
    readonly post: operations["void"];
  };
  readonly "/commit": {
    /** Submit the quote request to be persisted by the enabled third party tax provider. A commit operation is intended to be submitted once only, when the Order has been confirmed and paid. */
    readonly post: operations["commit"];
  };
  readonly "/adjust": {
    /**
     * Replace the persisted tax quote (identified by the given unique ID) with the provided quote request (represented by the **AdjustRequest**).
     *
     * Relevant for partial refunds, full refunds, returns and other Order modifications where there have been changes to the tax liabilities.
     *
     * The returned **Tax Quote** response is expected to be the same to a response returned by an equivalent response to **estimate** or **commit** methods.
     */
    readonly post: operations["adjust"];
  };
}

export interface components {
  readonly schemas: {
    /** An **ItemRequest** represents required information relating to being able to complete tax calculations for a specific line item. */
    readonly "request-item": {
      /** A unique identifier for this item used to map responses back to the corresponding item on the order. */
      readonly id: string;
      /** The SKU/UPC of the item, if available. */
      readonly item_code?: string;
      /** A display name for this item. */
      readonly name?: string;
      /** The final sale price (after discounts, bulk pricing, price lists, etc) prior to having taxes calculated. If the merchant lists prices inclusive of tax this price will already be tax inclusive, and so the tax provider will instead by calculating the amount of tax that was already included in this price. For multiple quantities, this price includes that multiplication. */
      readonly price: {
        /** Note: This amount will be **negative** for order-level refunds and may be **zero** for line-item refunds. */
        readonly amount: number;
        /** Note: **Tax Inclusive** and **Tax Exclusive** prices cannot be added together. */
        readonly tax_inclusive: boolean;
      };
      readonly quantity: number;
      readonly tax_class?: components["schemas"]["TaxClass"];
      /** Flag whether or not this item is always tax exempt. For example, gift certificate purchases and order-level refunds are tax exempt. Tax exempt items are included in the request for auditing purposes. */
      readonly tax_exempt?: boolean;
      /**
       * The type of line item this request represents. This will depend on the items position in the request hirearchy, for example a collection of items (which may or may not also have wrapping attached) are contained within the document request. Seperately, each document request has a single shipping and a single handling line item (to capture these values).
       *
       * The type refund is used when the tax estimate request is for an order-level refund.
       */
      readonly type: "item" | "wrapping" | "handling" | "shipping" | "refund";
      readonly wrapping?: components["schemas"]["request-item"];
    };
    /** Each **DocumentRequest** contains a collection of items (represented by an array of 1+ **ItemRequest** objects) the shopper has purchased, shipped to a specific address. Multi-address orders (where shoppers select to ship items to differrent addresses). These are equivalent to "consignment" or "shipment" in other parts of the BigCommerce platform. */
    readonly "request-document": {
      /** A unique identifier for this consignment. This value can be expected to be unique within an individual quote request but may be duplicated within subsequent quote requests. A digital consignment will see a prefix **DigitalDelivery_** followed by the Order ID. */
      readonly id: string;
      readonly billing_address?: components["schemas"]["Address"];
      readonly destination_address: components["schemas"]["Address"];
      readonly origin_address: components["schemas"]["Address"];
      readonly shipping: components["schemas"]["request-item"];
      readonly handling: components["schemas"]["request-item"];
      /** Collection of one or more items contained within this consignment that need to be assessed for tax liabilities. */
      readonly items: readonly components["schemas"]["request-item"][];
    };
    /** A **QuoteRequest** contains all of the tax relevant items that a shopper is placing an order for divided into documents (represented by an array of 1+ **DocumentRequest** objects) corresponding to each of the shipping addresses a shopper is sending items to (as multi-address orders may be taxed differently based on shipping address). */
    readonly "request-quote": {
      /** Unique ID of the taxable document (order, cart, quote, etc) this tax quote request is being generated for. Will remain consistent for the lifetime of the entity being estimated. */
      readonly id: string;
      /** ISO 4217 3 character currency code that all prices on this request are in. */
      readonly currency_code: string;
      /** If the shopper is a registered customer in the merchants store, basic details for that customer. */
      readonly customer: {
        /** The ID of the shoppers customer account in BigCommerce. May be provided as a UUID. */
        readonly customer_id: string;
        /** The BigCommerce customer group ID assigned to this customer. The default value will be provided if the customer has no group assigned. May be provided as a UUID. */
        readonly customer_group_id: string;
        /** If applicable, the tax exemption code of the shoppers customer account. A taxability code is expected to be able to be applied to multiple customers. This code should match the exemption codes provided by the third party integration. */
        readonly taxability_code?: string;
      };
      /** ISO 8601 formatted date the shopper placed this order. Dates will be provided in UTC. */
      readonly transaction_date: string;
      /** One or more consignments containing items being purchased by the shopper, including shipping and handling fees that are charged for each consignment. Most orders will contain a single consignment (to a single shipping address), however the BigCommerce platform also supports "Multi-address orders" which allow shoppers to place a single order with items shipped to different addresses. */
      readonly documents: readonly components["schemas"]["request-document"][];
    };
    /** An **AdjustRequest** contains the same data as a standard **QuoteRequest** with added detail of the adjustment operation. */
    readonly "request-adjust": {
      /** Specifies the reason for the adjustment operation, for auditing purposes. May be a custom, user entered description. */
      readonly adjust_description?: string;
    } & components["schemas"]["request-quote"];
    /** Requests may have partial Address data. For example, the BigCommerce Cart page has the "Estimate Shipping & Tax" feature which is only expected to supply Country, Region and Postal Code. */
    readonly Address: {
      /** Primary street address. */
      readonly line1?: string;
      /** Apartment, unit, suite, building, floor, etc. */
      readonly line2?: string;
      /** City, suburb, township, etc. */
      readonly city?: string;
      /** State, province, territory, etc. */
      readonly region_name?: string;
      /** If available, the short code/acronym for the region. For example "CA" for "California" or "NSW" for "New South Wales". */
      readonly region_code?: string;
      /** The human-readable country name. */
      readonly country_name?: string;
      /** ISO 3166-1 alpha-2 format country code. */
      readonly country_code?: string;
      /** Postcode, ZIP, etc. Optional. */
      readonly postal_code?: string;
      /** If this is a commercial address, the name of the company this address is for. */
      readonly company_name?: string;
      readonly type?: "RESIDENTIAL" | "COMMERCIAL";
    };
    readonly TaxClass: {
      /** The provider specific tax code for this item. Items can be classified with tax codes relevant to each Tax Provider, configured by the merchant and assigned to their products within BigCommerce. A tax code is expected to be able to be applied to multiple products. This code should match the tax codes provided by the third party intergation. */
      readonly code: string;
      /** The ID of the tax class defined in the merchants BigCommerce store. May have a UUID value. */
      readonly class_id: string;
      /** The human readable name of this tax class in the merchants BigCommerce store. */
      readonly name: string;
    };
    readonly "response-quote": {
      /** The unique identifier of the tax quote that was requested. This must match the ID of the requested quote. */
      readonly id: string;
      /** One or more consignments containing items being purchased by the shopper, including shipping and handling fees that are charged for each consignment. Most orders will contain a single consignment (to a single shipping address), however the BigCommerce platform also supports "Multi-address orders" which allow shoppers to place a single order with items shipped to different addresses. */
      readonly documents: readonly components["schemas"]["response-document"][];
    };
    readonly "response-document": {
      /** A unique identifier for this consignment. Must match the ID of the corresponding Document Request. */
      readonly id: string;
      /** An optional unique identifier for the document stored in the external providers system. Currently unused in any end to end operation, but may be logged by BigCommerce and hence helpful in issue resolution. */
      readonly external_id?: string;
      /** Collection of items contained within this consignment that have had tax liabilities calculated. */
      readonly items: readonly components["schemas"]["response-item"][];
      readonly shipping: components["schemas"]["response-item"];
      readonly handling: components["schemas"]["response-item"];
    };
    /**
     * The tax liabilities calculated for a specific item.
     *
     * Note: Tax liabilities should be calculated with **quantity** accounted for.
     */
    readonly "response-item": {
      /** A unique identifier for the line item these tax liabilities are calculated for. Must match the corresponding request line item ID. */
      readonly id: string;
      readonly price: components["schemas"]["response-taxprice"];
      readonly type: "item" | "wrapping" | "shipping" | "handling" | "refund";
      readonly wrapping?: components["schemas"]["response-item"];
    };
    readonly "response-taxprice": {
      /** The price of this line item inclusive of tax. Must be equal to **amount_exclusive** + **total_tax**. */
      readonly amount_inclusive: number;
      /** The price of this line item exclusive of tax. Must be equal to **amount_inclusive** - **total_tax**. */
      readonly amount_exclusive: number;
      /** The total amount of tax that applied to this line item. Must be equal to **amount_inclusive** - **amount_exclusive**. */
      readonly total_tax: number;
      /** The total tax rate that applied to this item. This is the aggregated rate of the individual rates in **sales_tax_summary**. */
      readonly tax_rate: number;
      /** Breakdown of the sales taxes that applied to this item. */
      readonly sales_tax_summary: readonly components["schemas"]["SalesTax"][];
    };
    readonly SalesTax: {
      /** The human readable name of this tax. Used for reporting or if enabled under certain store configurations a break down of taxes during checkout. */
      readonly name: string;
      /** Decimal tax rate applied by this component tax rate. Tax rates support up to four decimal places. For example "0.1" for 10% and "0.0125" for 1.25%. */
      readonly rate: number;
      /** The absolute amount of tax applied to the item this SalesTax component is attached to, for this component rate. For example, if an item was $10 and this was a 5% component tax rate, the amount would be 0.50 (50 cents) */
      readonly amount: number;
      readonly tax_class?: components["schemas"]["TaxClass"];
      /**
       * Optional unique identifier for this sales tax, describing the relevant tax classification rule on the Tax Provider platform.
       *
       * Supplying an identifier allows BigCommerce to group related taxes together from all items in the order.
       *
       * This identifier is persisted by BigCommerce and may be desirable for auditing purposes between BigCommerce and the Tax Provider. Currently supports persisting integer values only (the string type indicates we may support UUID values in the future).
       */
      readonly id?: string;
    };
  };
  readonly parameters: {
    /** BigCommerce will send through the Store Hash as part of all Tax Provider API operations. Each BigCommerce store on the platform has a unique Store Hash value for the lifetime of the store. This value can assist in account verification or profile matching responsibilities. */
    readonly "header-storehash": string;
  };
}

export interface operations {
  /**
   * Submit the quote request to retrieve a estimate from the enabled third party tax provider. Estimates are not expected to be persisted by the tax provider.
   *
   * The following actions can trigger tax estimate requests multiple times during a standard checkout on a BigCommerce storefront, depending on the BigCommerce merchant's settings.
   *
   * - After selecting a Shipping Method during the “Estimate Shipping & Tax” facility on the Cart page.
   * - After specifying a Shipping Address during a Checkout.
   * - After selecting a Shipping Method during a Checkout.
   * - After specifying a Billing Address during a Checkout.
   *
   * The following actions are not expected to trigger estimate requests.
   *
   * - While anonymously browsing a store’s product catalog.
   * - On the Cart page prior to a Shopper selecting a Shipping Method via “Estimate Shipping & Tax”.
   * - On the Checkout page prior to specifying a Shipping Address.
   * - On the Checkout page, when toggling any option related to using the shopper’s Shipping Address as their Billing Address.
   *
   * The following control panel can also trigger tax estimation requests.
   *
   * - Order refund flows.
   * - Test connection feature in Tax Settings.
   */
  readonly estimate: {
    readonly parameters: {
      readonly header: {
        /** BigCommerce will send through the Store Hash as part of all Tax Provider API operations. Each BigCommerce store on the platform has a unique Store Hash value for the lifetime of the store. This value can assist in account verification or profile matching responsibilities. */
        readonly "X-BC-Store-Hash": components["parameters"]["header-storehash"];
      };
    };
    readonly responses: {
      /** Noteworthy is that the estimate response does not contain an **external ID** since there is no expectation that an estimate will result in any persisted tax documents by the tax provider. */
      readonly 200: {
        readonly content: {
          readonly "application/json": components["schemas"]["response-quote"];
        };
      };
      /** Fallback Tax will be used for this transaction. General response that points to an issue with the incoming request that means a valid response is unable to be returned. */
      readonly 400: unknown;
      /** Response to indicate that the merchant's authentication credentials are invalid. The merchant will receive an update in their Store Logs. */
      readonly 401: unknown;
      /** Fallback Tax will be used for this transaction. General response that points to an error on the tax provider side. These types of errors should be promptly resolved by the tax provider. */
      readonly 500: unknown;
    };
    /** Estimates may not always contain complete data as these requests will be fired at different stages of the shopper checkout. For example, with the **Estimate Shipping & Tax** function on the **Cart** page is not expected to provide any billing address data, but the tax provider will still be expected to return a valid estimate. */
    readonly requestBody: {
      readonly content: {
        readonly "application/json": components["schemas"]["request-quote"];
      };
    };
  };
  /** Invalidate the persisted tax quote as identified by the given unique ID. Relevant to order cancellations or when moving an order from a paid status to an unpaid status. */
  readonly void: {
    readonly parameters: {
      readonly query: {
        /** Unique ID identifying the existing, persisted Tax Quote that will be voided. When provided, this value will be the External ID. */
        readonly id: string;
      };
      readonly header: {
        /** BigCommerce will send through the Store Hash as part of all Tax Provider API operations. Each BigCommerce store on the platform has a unique Store Hash value for the lifetime of the store. This value can assist in account verification or profile matching responsibilities. */
        readonly "X-BC-Store-Hash": components["parameters"]["header-storehash"];
      };
    };
    readonly responses: {
      /** OK */
      readonly 200: unknown;
      /** General response that points to an issue with the incoming request that means a valid response is unable to be returned. */
      readonly 400: unknown;
      /** Response to indicate that the merchant's authentication credentials are invalid. The merchant will receive an update in their Store Logs. */
      readonly 401: unknown;
      /** General response that points to an error on the tax provider side. These types of errors should be promptly resolved by the tax provider. */
      readonly 500: unknown;
    };
  };
  /** Submit the quote request to be persisted by the enabled third party tax provider. A commit operation is intended to be submitted once only, when the Order has been confirmed and paid. */
  readonly commit: {
    readonly parameters: {
      readonly header: {
        /** BigCommerce will send through the Store Hash as part of all Tax Provider API operations. Each BigCommerce store on the platform has a unique Store Hash value for the lifetime of the store. This value can assist in account verification or profile matching responsibilities. */
        readonly "X-BC-Store-Hash": components["parameters"]["header-storehash"];
      };
    };
    readonly responses: {
      /** OK */
      readonly 200: {
        readonly content: {
          readonly "application/json": components["schemas"]["response-quote"];
        };
      };
      /** General response that points to an issue with the incoming request that means a valid response is unable to be returned. */
      readonly 400: unknown;
      /** Response to indicate that the merchant's authentication credentials are invalid. The merchant will receive an update in their Store Logs. */
      readonly 401: unknown;
      /** General response that points to an error on the tax provider side. These types of errors should be promptly resolved by the tax provider. */
      readonly 500: unknown;
    };
    readonly requestBody: {
      readonly content: {
        readonly "application/json": components["schemas"]["request-quote"];
      };
    };
  };
  /**
   * Replace the persisted tax quote (identified by the given unique ID) with the provided quote request (represented by the **AdjustRequest**).
   *
   * Relevant for partial refunds, full refunds, returns and other Order modifications where there have been changes to the tax liabilities.
   *
   * The returned **Tax Quote** response is expected to be the same to a response returned by an equivalent response to **estimate** or **commit** methods.
   */
  readonly adjust: {
    readonly parameters: {
      readonly header: {
        /** BigCommerce will send through the Store Hash as part of all Tax Provider API operations. Each BigCommerce store on the platform has a unique Store Hash value for the lifetime of the store. This value can assist in account verification or profile matching responsibilities. */
        readonly "X-BC-Store-Hash": components["parameters"]["header-storehash"];
      };
      readonly query: {
        /** Unique ID identifying the existing, persisted Tax Quote that will be adjusted. When provided, this value will be the External ID. */
        readonly id: string;
      };
    };
    readonly responses: {
      /** Returned Tax Quote response matches the updated QuoteRequest provided to the service method. */
      readonly 200: {
        readonly content: {
          readonly "application/json": components["schemas"]["request-adjust"];
        };
      };
      /** General response that points to an issue with the incoming request that means a valid response is unable to be returned. */
      readonly 400: unknown;
      /** Response to indicate that the merchant's authentication credentials are invalid. The merchant will receive an update in their Store Logs. */
      readonly 401: unknown;
      /** General response that points to an error on the tax provider side. These types of errors should be promptly resolved by the tax provider. */
      readonly 500: {
        readonly content: {
          readonly "application/json": components["schemas"]["response-quote"];
        };
      };
    };
    readonly requestBody: {
      readonly content: {
        readonly "application/json": components["schemas"]["request-adjust"];
      };
    };
  };
}
