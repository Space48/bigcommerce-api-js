/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  readonly "/hooks": {
    /**
     * Returns a list of all webhooks on a store associated to the `client_id` used to authenticate the request.
     *
     * *Note: BigCommerce determines the `client_id` from the `access_token`.*
     */
    readonly get: operations["getAllWebhooks"];
    /** Creates a webhook. Only one webhook at a time can be created. Custom headers can be added. Destination URL must be served on port 443 (custom ports are not currently supported). */
    readonly post: operations["createWebhooks"];
  };
  readonly "/hooks/{id}": {
    /** Return a webhook by ID. */
    readonly get: operations["getWebhook"];
    /** Updates a webhook. Custom headers can be added. */
    readonly put: operations["updateAWebhook"];
    /** Deletes a webhook. Only one webhook at a time can be deleted. When a webhook is deleted, it is returned in the response as a 200 OK. */
    readonly delete: operations["deleteAWebhook"];
    readonly parameters: {
      readonly path: {
        readonly id: string;
      };
    };
  };
}

export interface components {
  readonly schemas: {
    readonly error_Full: {
      /** The HTTP status code. */
      readonly status?: number;
      /** The error title describing the particular error. */
      readonly title?: string;
      readonly type?: string;
    };
    readonly errorDetailed_Full: {
      readonly errors?: { readonly [key: string]: string };
    };
    readonly webhook_Base: {
      /** Event you subscribe to */
      readonly scope: string;
      /** URL must be active, return a 200 response, and be served on port 443 (custom ports not currently supported). */
      readonly destination: string;
      /** If webhook is active or not */
      readonly is_active: boolean;
      /** You can pass in any number of custom headers to validate webhooks being returned. */
      readonly headers: {
        readonly custom?: string;
      };
    };
    readonly webhook_Full: {
      /** Id of the webhook */
      readonly id?: number;
      /** Client ID, unique to the store */
      readonly client_id?: string;
      /** Store permanent ID. */
      readonly store_hash?: string;
      /** Created time */
      readonly created_at?: number;
      /** Updated time */
      readonly updated_at?: number;
    } & components["schemas"]["webhook_Base"];
    /** Data about the response, including pagination and collection totals. */
    readonly Pagination: {
      /** Offset. */
      readonly offset?: number;
      /** Total number of items in the result set. */
      readonly limit?: number;
      /** Total number of items. */
      readonly total_items?: number;
    };
  };
  readonly responses: {
    readonly webhooks_Resp: {
      readonly content: {
        readonly v3: {
          readonly data?: readonly components["schemas"]["webhook_Full"][];
          readonly meta?: {
            readonly pagination?: components["schemas"]["Pagination"];
          };
        };
        readonly v2: readonly components["schemas"]["webhook_Full"][];
      };
    };
    /** If something happens during the request that causes it to fail, a 502 response will be returned. A new request should be made; however, it could fail. */
    readonly "502_GatewayError": {
      readonly content: {
        readonly "application/json": components["schemas"]["error_Full"];
      };
    };
    /** If this occurs, you should retry the request. Typically retrying the request several times will result in a successful request; However, if you are unable to successfully make a request, please check the BigCommerce system status [here](https://status.bigcommerce.com/). A service is likely down and the request will need to be made again when it is back up (in several hours usually) */
    readonly "504_GatewayTimeout": {
      readonly content: {
        readonly "application/json": components["schemas"]["errorDetailed_Full"];
      };
    };
    readonly "403_Unauthorized": {
      readonly content: {
        readonly "application/json": components["schemas"]["error_Full"];
      };
    };
    /**
     * Malformed request syntax. Typically need to fix the JSON
     * Body to resend successfully.
     */
    readonly "400_BadRequest": {
      readonly content: {
        readonly "application/json": components["schemas"]["error_Full"];
      };
    };
    /** If the requested account resource is not found for the franchise, return a 404 Not Found. */
    readonly "404_NotFound": {
      readonly content: {
        readonly "application/json": components["schemas"]["error_Full"];
      };
    };
    /** This occurs when missing or unacceptable data is passed for one or more fields. Please correct the values for the fields listed in the errors object. */
    readonly "422_UnprocessableEntity": {
      readonly content: {
        readonly "application/json": {
          readonly status?: number;
          readonly title?: string;
          readonly type?: string;
          readonly errors?: {
            readonly name?: string;
            readonly "primary_contact.district"?: string;
          };
        };
      };
    };
    /** If this occurs, you should retry the request. If you are unable to successfully make a request, please check the BigCommerce system status [here](https://status.bigcommerce.com/). A service is likely down and the request will need to be made again when it is back up (in several hours usually) */
    readonly "503_ServiceUnavailable": {
      readonly content: {
        readonly "application/json": components["schemas"]["error_Full"];
      };
    };
    /** Example response */
    readonly webhook_Resp: {
      readonly content: {
        readonly v3: {
          readonly data?: components["schemas"]["webhook_Full"];
          readonly meta?: { readonly [key: string]: any };
        };
        readonly v2: components["schemas"]["webhook_Full"];
      };
    };
  };
  readonly parameters: {
    readonly Accept: string;
    readonly "Content-Type": string;
  };
}

export interface operations {
  /**
   * Returns a list of all webhooks on a store associated to the `client_id` used to authenticate the request.
   *
   * *Note: BigCommerce determines the `client_id` from the `access_token`.*
   */
  readonly getAllWebhooks: {
    readonly parameters: {
      readonly header: {
        readonly Accept?: components["parameters"]["Accept"];
        readonly "Content-Type"?: components["parameters"]["Content-Type"];
      };
    };
    readonly responses: {
      readonly 200: components["responses"]["webhooks_Resp"];
    };
  };
  /** Creates a webhook. Only one webhook at a time can be created. Custom headers can be added. Destination URL must be served on port 443 (custom ports are not currently supported). */
  readonly createWebhooks: {
    readonly parameters: {
      readonly header: {
        readonly Accept?: components["parameters"]["Accept"];
        readonly "Content-Type"?: components["parameters"]["Content-Type"];
      };
    };
    readonly responses: {
      readonly 200: components["responses"]["webhook_Resp"];
      readonly 422: components["responses"]["422_UnprocessableEntity"];
    };
    readonly requestBody: {
      readonly content: {
        readonly "application/json": components["schemas"]["webhook_Base"];
      };
    };
  };
  /** Return a webhook by ID. */
  readonly getWebhook: {
    readonly parameters: {
      readonly path: {
        readonly id: string;
      };
      readonly header: {
        readonly Accept?: components["parameters"]["Accept"];
        readonly "Content-Type"?: components["parameters"]["Content-Type"];
      };
    };
    readonly responses: {
      readonly 200: components["responses"]["webhook_Resp"];
    };
  };
  /** Updates a webhook. Custom headers can be added. */
  readonly updateAWebhook: {
    readonly parameters: {
      readonly path: {
        readonly id: string;
      };
      readonly header: {
        readonly Accept?: components["parameters"]["Accept"];
        readonly "Content-Type"?: components["parameters"]["Content-Type"];
      };
    };
    readonly responses: {
      readonly 200: components["responses"]["webhook_Resp"];
    };
    readonly requestBody: {
      readonly content: {
        readonly "application/json": components["schemas"]["webhook_Base"];
      };
    };
  };
  /** Deletes a webhook. Only one webhook at a time can be deleted. When a webhook is deleted, it is returned in the response as a 200 OK. */
  readonly deleteAWebhook: {
    readonly parameters: {
      readonly path: {
        readonly id: string;
      };
      readonly header: {
        readonly Accept?: components["parameters"]["Accept"];
        readonly "Content-Type"?: components["parameters"]["Content-Type"];
      };
    };
    readonly responses: {
      readonly 200: components["responses"]["webhook_Resp"];
    };
  };
}
