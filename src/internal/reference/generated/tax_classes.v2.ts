/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  readonly "/tax_classes": {
    /**
     * Returns a list of all *Tax Classes* in a store.
     *
     * Default sorting is by tax-class id, from lowest to highest.
     */
    readonly get: operations["getAllTaxClasses"];
  };
  readonly "/tax_classes/{id}": {
    /** Returns a single *Tax Class*. */
    readonly get: operations["getATaxClass"];
  };
}

export interface definitions {
  readonly taxClass_Full: {
    /** The unique numerical ID of the tax class. A read-only value which is automatically assigned and increments sequentially. */
    readonly id?: string;
    /** The name of the tax class. */
    readonly name?: string;
    /** Date and time of the tax class' creation. Read-Only. */
    readonly created_at?: string;
    /** Date and time when the tax class was last updated. Read-Only. */
    readonly updated_at?: string;
  };
}

export interface operations {
  /**
   * Returns a list of all *Tax Classes* in a store.
   *
   * Default sorting is by tax-class id, from lowest to highest.
   */
  readonly getAllTaxClasses: {
    readonly parameters: {
      readonly header: {
        readonly Accept: string;
        readonly "Content-Type": string;
      };
      readonly query: {
        /** Optional filter param. Number of pages. */
        readonly page?: number;
        /** Optional filter param. Number of items per page */
        readonly limit?: number;
      };
    };
    readonly responses: {
      readonly 200: {
        readonly schema: readonly definitions["taxClass_Full"][];
      };
    };
  };
  /** Returns a single *Tax Class*. */
  readonly getATaxClass: {
    readonly parameters: {
      readonly path: {
        /** Id of the tax class. */
        readonly id: number;
      };
      readonly header: {
        readonly Accept: string;
        readonly "Content-Type": string;
      };
    };
    readonly responses: {
      readonly 200: {
        readonly schema: definitions["taxClass_Full"];
      };
    };
  };
}
