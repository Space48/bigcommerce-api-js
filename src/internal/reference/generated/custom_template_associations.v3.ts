/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  readonly "/storefront/custom-template-associations": {
    /** Get a collection of the store's custom template associations across all storefronts */
    readonly get: operations["GetCustomTemplateAssociations"];
    /** Upsert new custom template associations data across all storefronts. If an existing record is found for the combination of channel ID, entity ID, and type, the existing record will be overwritten with the new template. */
    readonly put: operations["UpsertCustomTemplateAssociations"];
    /** Delete custom template associations. At least one query parameter must be used. */
    readonly delete: operations["DeleteCustomTemplateAssociations"];
    readonly parameters: {};
  };
}

export interface components {
  readonly schemas: {
    readonly Error: {
      readonly status?: number;
      readonly message?: string;
    };
    readonly ErrorResponse400: {
      readonly schema?: components["schemas"]["Error"];
    };
    readonly ErrorResponse404: {
      readonly schema?: components["schemas"]["Error"];
    };
    readonly ErrorResponse409: {
      readonly schema?: components["schemas"]["Error"];
    };
    readonly ErrorResponse422: {
      readonly schema?: components["schemas"]["Error"];
    };
    readonly MetaPaginationObject: {
      readonly pagination?: {
        readonly total?: number;
        readonly count?: number;
        readonly per_page?: number;
        readonly current_page?: number;
        readonly total_pages?: number;
        readonly links?: {
          readonly next?: string;
          readonly current?: string;
        };
      };
    };
    readonly DetailedErrors: { readonly [key: string]: string };
    /** Error payload for the BigCommerce API. */
    readonly BaseError: {
      /** The HTTP status code. */
      readonly status?: number;
      /** The error title describing the particular error. */
      readonly title?: string;
      readonly type?: string;
      readonly instance?: string;
    };
    readonly ErrorResponse: components["schemas"]["BaseError"] & {
      readonly errors?: components["schemas"]["DetailedErrors"];
    };
    readonly CustomTemplateAssociation: {
      readonly id?: number;
      readonly channel_id?: number;
      readonly entity_type?: "product" | "category" | "brand" | "page";
      readonly entity_id?: number;
      readonly file_name?: string;
      /** An invalid file name does not match with an existing custom layout file in the currently active theme for the channel. When an association is invalid the store will fallback to using the default for that entity type. */
      readonly is_valid?: boolean;
      readonly date_created?: string;
      readonly date_modified?: string;
    };
    readonly CustomTemplateAssociationUpsert: {
      readonly channel_id: number;
      readonly entity_type: "product" | "category" | "brand" | "page";
      readonly entity_id: number;
      readonly file_name: string;
    };
  };
}

export interface operations {
  /** Get a collection of the store's custom template associations across all storefronts */
  readonly GetCustomTemplateAssociations: {
    readonly parameters: {
      readonly query: {
        /** Channel ID to return only custom template associations for a given Channel */
        readonly channel_id?: number;
        /** Filter by a list of entity IDs. Must be used together with "type" filter. */
        readonly "entity_id:in"?: string;
        /** Number of results to return per page */
        readonly limit?: number;
        /** Which page number to return, based on the page size. Used to paginate large collections. */
        readonly page?: number;
        /** Filter associations by type */
        readonly type?: "product" | "category" | "brand" | "page";
        /** Optional toggle to filter for exclusively valid or invalid associations entries. An invalid entry is one where it's file name does not match up to an existing custom layout file in the currently active theme for the channel. */
        readonly is_valid?: boolean;
      };
    };
    readonly responses: {
      /** OK */
      readonly 200: {
        readonly content: {
          readonly "application/json": {
            readonly data?: readonly components["schemas"]["CustomTemplateAssociation"][];
            readonly meta?: components["schemas"]["MetaPaginationObject"];
          };
        };
      };
    };
  };
  /** Upsert new custom template associations data across all storefronts. If an existing record is found for the combination of channel ID, entity ID, and type, the existing record will be overwritten with the new template. */
  readonly UpsertCustomTemplateAssociations: {
    readonly parameters: {};
    readonly responses: {
      /** Success response for batch upsert of custom template associations */
      readonly 200: {
        readonly content: {
          readonly "application/json": { readonly [key: string]: any };
        };
      };
      /** Error response for batch PUT of Custom template associations. Includes the errors for each reference id. */
      readonly 422: {
        readonly content: {
          readonly "application/json": components["schemas"]["ErrorResponse"];
        };
      };
    };
    readonly requestBody: {
      readonly content: {
        readonly "application/json": readonly components["schemas"]["CustomTemplateAssociationUpsert"][];
      };
    };
  };
  /** Delete custom template associations. At least one query parameter must be used. */
  readonly DeleteCustomTemplateAssociations: {
    readonly parameters: {
      readonly query: {
        /** List of Association IDs to delete explicitly. */
        readonly "id:in"?: number;
        /** List of Entity IDs to delete explicitly. Must be used together with "type" */
        readonly "entity_id:in"?: number;
        /** Channel ID provided to delete all custom template associations for a given Channel */
        readonly channel_id?: number;
        /** Filter associations by type */
        readonly type?: "product" | "category" | "brand" | "page";
      };
    };
    readonly responses: {
      /** No Content */
      readonly 204: never;
    };
  };
}
