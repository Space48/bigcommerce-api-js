/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  readonly "/shipping/products/customs-information": {
    /**
     * Get customs information for products.
     *
     * ## Examples
     *
     * This list can be filtered to return customs information objects specific to a list of requested product_ids. This is achieved by appending the query string **?product_id:in=4,5,6** to the resource **\/shipping/products/customs-information**.
     *
     * ```http
     * GET /shipping/products/customs-information?product_id:in=4,5,6
     * ```
     */
    readonly get: {
      readonly parameters: {
        readonly header: {
          readonly Accept?: string;
          readonly "Content-Type"?: string;
        };
        readonly query: {
          /** A coma separated list of product IDs. For more information, see [Filtering](https://developer.bigcommerce.com/api-docs/getting-started/filtering) */
          readonly "product_id:in"?: readonly number[];
          readonly page?: number;
          readonly limit?: number;
        };
      };
      readonly responses: {
        readonly 200: {
          readonly schema: {
            readonly data?: readonly definitions["customsInformation"][];
            readonly meta?: definitions["metaCollection"];
          };
        };
      };
    };
    /**
     * Creates and updates product customs information.
     *
     * This is a batch operation where the creation of multiple customs information objects can be done with one `PUT` request.
     *
     * ## Limits
     * * Limit of 50 customs information objects per `PUT` request.
     */
    readonly put: {
      readonly parameters: {
        readonly body: {
          readonly body?: readonly definitions["customsInformation"][];
        };
      };
      readonly responses: {
        readonly 200: {
          readonly schema: {
            readonly data?: readonly definitions["customsInformation"][];
            readonly meta?: { readonly [key: string]: any };
          };
        };
      };
    };
    /**
     * Deletes customs information objects for a product.
     *
     * ## Example
     *
     * This is a batch operation. The `product_id` query parameter is required.
     *
     * ```http
     * DELETE /shipping/products/customs-information?product_id:in=4,5,6
     * ```
     */
    readonly delete: {
      readonly parameters: {
        readonly header: {
          readonly Accept?: string;
          readonly "Content-Type"?: string;
        };
        readonly query: {
          readonly "product_id:in": readonly number[];
        };
      };
      readonly responses: {
        readonly 204: never;
      };
    };
  };
}

export interface definitions {
  readonly shippingMethod_Full: {
    /** Shipping-method ID. READ-ONLY */
    readonly id?: number;
  } & definitions["shippingMethod_Base"];
  readonly shippingMethod_Base: {
    /** Display name for shipping method. */
    readonly name?: string;
    readonly type?:
      | "perorder"
      | "peritem"
      | "weight"
      | "total"
      | "auspost"
      | "canadapost"
      | "endicia"
      | "usps"
      | "fedex"
      | "royalmail"
      | "upsready";
    /** Depends on the shipping-method type. See the [supported settings object](#supported-settings). */
    readonly settings?: {
      /** Flat rate per order. */
      readonly rate?: number;
    };
    /** Whether or not this shipping-zone method is enabled. */
    readonly enabled?: boolean;
    /**
     * `fixed_surcharge`: flat-rate handling fee applied to shipping cost.
     *
     * `percentage_surcharge`: percentage handling fee applied to shipping cost
     */
    readonly handling_fees?: "fixed_surcharge" | "percentage_surcharge";
    /** Whether or not this shipping zone is the fallback if all others are not valid for the order. */
    readonly is_fallback?: boolean;
  };
  /** Data about the customs information object. */
  readonly customsInformation: {
    /** The id of the product which the customs information data will apply to. */
    readonly product_id?: number;
    /** The country of manufacture, production, or growth represented in ISO 3166-1 alpha-2 format. */
    readonly country_of_origin?: string;
    /** Description that provides information for customs to identify and verify shapes physical characteristics and packaging of each shipment. */
    readonly commodity_description?: string;
    /** Flag to determine whether this product will be shipped internationally */
    readonly international_shipping?: true | false;
    readonly hs_codes?: definitions["harmonizedSystemCodes"];
  };
  /**
   * Key value pair commonly used in the form of **countryISO2:'/^[0-9A-Za-z]{6,14}$/'**. This is to represent a country and the associated hs code that applies to that country. Eg {"US":"508313","AU":"850610"}.
   *
   * There is a special value of **'ALL'** which can be used in place of the countryISO2 to represent that the hs code applies to all countries. Eg {"ALL":"634000"}. This can be combined with other countries in the hs codes object. For Eg {"All":"640000", "US":"641000"}
   */
  readonly harmonizedSystemCodes: { readonly [key: string]: any };
  /** Meta data relating to pagination */
  readonly metaCollection: {
    readonly pagination?: {
      /** Total number of items returned. */
      readonly total?: number;
      /** Number of items returned on per page. */
      readonly count?: number;
      /** Number of items to be displayed per page. */
      readonly per_page?: number;
      /** Current page number. */
      readonly current_page?: number;
      /** Total number of pages. */
      readonly total_page?: number;
      readonly links?: {
        /** Query string appended to the resource to return to the previous page. */
        readonly previous?: string;
        /** Query string appended to the resource to proceed to the next page. */
        readonly next?: string;
        /** Query string appended to the resource to show the current page. */
        readonly current?: string;
      };
    };
  };
  /** Meta data relating to pagination */
  readonly error_Full: { readonly [key: string]: any };
}

export interface parameters {
  readonly product_id: readonly number[];
}

export interface responses {
  /** If something happens during the request that causes it to fail, a 502 response will be returned. A new request should be made; however, it could fail. */
  readonly "502_GatewayError": {
    readonly schema: definitions["error_Full"];
  };
  /** If this occurs, you should retry the request. Typically retrying the request several times will result in a successful request; However, if you are unable to successfully make a request, please check the BigCommerce system status [here](https://status.bigcommerce.com/). A service is likely down and the request will need to be made again when it is back up (in several hours usually) */
  readonly "504_GatewayTimeout": {
    readonly schema: definitions["error_Full"];
  };
  /** Returned when permissions do not allow the operation. */
  readonly "403_Unauthorized": {
    readonly schema: definitions["error_Full"];
  };
  /** Invalid syntax, required data missing, `content-type` header missing; Double-check request body for syntax errors and missing data; check `content-type` header. */
  readonly "400_BadRequest": {
    readonly schema: definitions["error_Full"];
  };
  /** If the requested account resource is not found for the franchise, return a 404 Not Found. */
  readonly "404_NotFound": {
    readonly schema: definitions["error_Full"];
  };
  /** This occurs when missing or unacceptable data is passed for one or more fields. Please correct the values for the fields listed in the errors object. */
  readonly "422_UnprocessableEntity": {
    readonly schema: definitions["error_Full"];
  };
  /**
   * If this occurs, you should retry the request. If you are unable to successfully make a request, please check the BigCommerce system status [here](https://status.bigcommerce.com/). A service is likely down and the request will need to be made again when it is back up (in several hours usually)
   *
   * Occurs hen the store is down for maintenance, being upgraded to a new version, or is suspended due to administrative action or a billing issue.
   */
  readonly "503_ServiceUnavailable": {
    readonly schema: definitions["error_Full"];
  };
  /** API credentials are missing or invalid; Double-check the `access_token` and `client_id`. */
  readonly "401_Unauthorized": {
    readonly schema: definitions["error_Full"];
  };
  /** Request headers specify an unsupported `content-type` (or header is missing). Double-check `content-type` request header. */
  readonly "415_Unsupported": {
    readonly schema: definitions["error_Full"];
  };
  /** When an OAuth client exceeds the [rate limit](https://developer.bigcommerce.com/api-docs/getting-started/best-practices#api-rate-limits) for API requests to a store.. */
  readonly "429_Too_Many_Requests": {
    readonly schema: definitions["error_Full"];
  };
  /** The resource was found, but doesn't support the request method. Issued when either a specific method isn't yet implemented on a resource, or the resource doesn't support the method at all. For example, a `PUT` on `/orders` is invalid, but a PUT on `/orders/{order_id}` is valid. */
  readonly "405_Method_Not_Allowed": {
    readonly schema: definitions["error_Full"];
  };
  /** Expensive API calls or an internal server error in BigCommerce; Re-attempt the request three to five times, with increasing delays of at least a minute between attempts. */
  readonly "500_Internal_Server_Error": {
    readonly schema: definitions["error_Full"];
  };
}

export interface operations {}
