/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  readonly "/settings/storefront/status": {
    /** Get storefront status. */
    readonly get: {
      readonly parameters: {
        readonly query: {
          /** Channel ID to use for channel-specific setting. If omitted, you will interact with the global setting only. */
          readonly channel_id?: components["parameters"]["ChannelIdParam"];
        };
      };
      readonly responses: {
        readonly 200: {
          readonly content: {
            readonly "application/json": {
              readonly data?: components["schemas"]["StorefrontStatus"];
              readonly meta?: { readonly [key: string]: any };
            };
          };
        };
        /** The request is missing 1 or more required fields. See the response for more details. */
        readonly 422: {
          readonly content: {
            readonly "application/json": components["schemas"]["ErrorResponse"];
          };
        };
      };
    };
    /** Update storefront status. */
    readonly put: {
      readonly parameters: {
        readonly query: {
          /** Channel ID to use for channel-specific setting. If omitted, you will interact with the global setting only. */
          readonly channel_id?: components["parameters"]["ChannelIdParam"];
        };
      };
      readonly responses: {
        readonly 200: {
          readonly content: {
            readonly "application/json": {
              readonly data?: components["schemas"]["StorefrontStatus"];
              readonly meta?: { readonly [key: string]: any };
            };
          };
        };
      };
      readonly requestBody: {
        readonly content: {
          readonly "application/json": components["schemas"]["StorefrontStatus"];
        };
      };
    };
    /** Delete storefront status. */
    readonly delete: operations["delete-settings-storefront-status"];
  };
  readonly "/settings/storefront/seo": {
    /** Get storefront SEO settings. */
    readonly get: {
      readonly parameters: {
        readonly query: {
          /** Channel ID to use for channel-specific setting. If omitted, you will interact with the global setting only. */
          readonly channel_id?: components["parameters"]["ChannelIdParam"];
        };
      };
      readonly responses: {
        readonly 200: {
          readonly content: {
            readonly "application/json": {
              readonly data?: components["schemas"]["SEOSettings"];
              readonly meta?: { readonly [key: string]: any };
            };
          };
        };
        /** Provided settings could not be applied for some reason - detailed errors in the response. */
        readonly 422: {
          readonly content: {
            readonly "application/json": components["schemas"]["ErrorResponse"];
          };
        };
      };
    };
    /** Update storefront SEO settings. */
    readonly put: {
      readonly parameters: {
        readonly query: {
          /** Channel ID to use for channel-specific setting. If omitted, you will interact with the global setting only. */
          readonly channel_id?: components["parameters"]["ChannelIdParam"];
        };
      };
      readonly responses: {
        /** OK */
        readonly 200: {
          readonly content: {
            readonly "application/json": {
              readonly data?: components["schemas"]["SEOSettings"];
              readonly meta?: { readonly [key: string]: any };
            };
          };
        };
      };
      readonly requestBody: {
        readonly content: {
          readonly "application/json": components["schemas"]["SEOSettings"];
        };
      };
    };
    /** Delete storefront SEO settings. */
    readonly delete: operations["delete-settings-seo"];
  };
  readonly "/settings/storefront/robotstxt": {
    /** Get storefront robots.txt. */
    readonly get: {
      readonly parameters: {
        readonly query: {
          /** Channel ID to use for channel-specific setting. If omitted, you will interact with the global setting only. */
          readonly channel_id?: components["parameters"]["ChannelIdParam"];
        };
      };
      readonly responses: {
        /** OK */
        readonly 200: {
          readonly content: {
            readonly "application/json": {
              readonly data?: components["schemas"]["RobotsTxtSettings"];
              readonly meta?: { readonly [key: string]: any };
            };
          };
        };
        /** Provided settings could not be applied for some reason - detailed errors in the response. */
        readonly 422: {
          readonly content: {
            readonly "application/json": components["schemas"]["ErrorResponse"];
          };
        };
      };
    };
    /** Update storefront robots.txt. */
    readonly put: {
      readonly parameters: {
        readonly query: {
          /** Channel ID to use for channel-specific setting. If omitted, you will interact with the global setting only. */
          readonly channel_id?: components["parameters"]["ChannelIdParam"];
        };
      };
      readonly responses: {
        /** OK */
        readonly 200: {
          readonly content: {
            readonly "application/json": {
              readonly data?: components["schemas"]["RobotsTxtSettings"];
              readonly meta?: { readonly [key: string]: any };
            };
          };
        };
      };
      readonly requestBody: {
        readonly content: {
          readonly "application/json": components["schemas"]["RobotsTxtSettings"];
        };
      };
    };
    /** Delete storefront robots.txt. */
    readonly delete: operations["delete-settings-robotstxt"];
  };
  readonly "/settings/storefront/search": {
    /** Get storefront search settings. */
    readonly get: {
      readonly parameters: {
        readonly query: {
          /** Channel ID to use for channel-specific setting. If omitted, you will interact with the global setting only. */
          readonly channel_id?: components["parameters"]["ChannelIdParam"];
        };
      };
      readonly responses: {
        readonly 200: {
          readonly content: {
            readonly "application/json": {
              readonly data?: components["schemas"]["StorefrontSearchSettings"];
              readonly meta?: { readonly [key: string]: any };
            };
          };
        };
        /** Provided settings could not be applied for some reason - detailed errors in the response. */
        readonly 422: {
          readonly content: {
            readonly "application/json": components["schemas"]["ErrorResponse"];
          };
        };
      };
    };
    /** Update storefront search settings. */
    readonly put: {
      readonly parameters: {
        readonly query: {
          /** Channel ID to use for channel-specific setting. If omitted, you will interact with the global setting only. */
          readonly channel_id?: components["parameters"]["ChannelIdParam"];
        };
      };
      readonly responses: {
        /** OK */
        readonly 200: {
          readonly content: {
            readonly "application/json": {
              readonly data?: components["schemas"]["StorefrontSearchSettings"];
              readonly meta?: { readonly [key: string]: any };
            };
          };
        };
      };
      readonly requestBody: {
        readonly content: {
          readonly "application/json": components["schemas"]["StorefrontSearchSettings"];
        };
      };
    };
    /** Delete storefront search settings. */
    readonly delete: operations["delete-settings-storefrontsearch"];
  };
  readonly "/settings/search/filters": {
    /** Returns a list of enabled default [Product Filtering](https://support.bigcommerce.com/s/article/Product-Filtering-Settings) filters. These filters will be used if a store does not have contextual overrides. */
    readonly get: operations["getEnabled"];
    /** Updates enabled default [Product Filtering](https://support.bigcommerce.com/s/article/Product-Filtering-Settings) filters. */
    readonly put: operations["updateEnabled"];
  };
  readonly "/settings/search/filters/available": {
    /** Returns a list of filters available to power [Product Filtering](https://support.bigcommerce.com/s/article/Product-Filtering-Settings). */
    readonly get: operations["getAvailable"];
  };
  readonly "/settings/search/filters/contexts": {
    /**
     * Returns a list of contextual filters enabled for a particular channel or category.
     *
     * **Usage Notes**
     *
     * Contextual filters allow you to configure the enabled filters per channel or category, so that shoppers can filter by the most relevant criteria.
     *
     * The order of the returned filters will match the sort order of the filters on the storefront.
     */
    readonly get: operations["getContexts"];
    /**
     * Upserts contextual filters for a particular channel or category.
     *
     * **Usage Notes**
     *
     * Contextual filters allow you to configure the enabled filters per channel or category, so that shoppers can filter by the most relevant criteria.
     *
     * You can change the order of the filters on the live site by changing the order of the filters you send.
     */
    readonly put: operations["upsertContexts"];
    /** Deletes contextual filters enabled in a particular context. */
    readonly delete: operations["deleteContexts"];
  };
  readonly "/settings/email-statuses": {
    /** Get global transactional email settings or channel specific overrides by `channel_id`. */
    readonly get: operations["get-settings-emails-enabled"];
    /** Update global transactional email settings or create channel specific overrides by `channel_id`. */
    readonly put: operations["put-settings-transactional-emails-enabled"];
    /** Delete channel specific overrides for email settings. */
    readonly delete: operations["delete-settings-transactional-emails-enabled"];
  };
  readonly "/settings/store/locale": {
    /** Returns global locale settings. */
    readonly get: {
      readonly responses: {
        readonly 200: {
          readonly content: {
            readonly "application/json": {
              readonly data?: components["schemas"]["Locale"];
              readonly meta?: { readonly [key: string]: any };
            };
          };
        };
        /** Provided settings could not be applied for some reason - detailed errors in the response. */
        readonly 422: {
          readonly content: {
            readonly "application/json": components["schemas"]["ErrorResponse"];
          };
        };
      };
    };
    /** Updates global locale settings. */
    readonly put: {
      readonly responses: {
        readonly 200: {
          readonly content: {
            readonly "application/json": {
              readonly data?: components["schemas"]["Locale"];
              readonly meta?: { readonly [key: string]: any };
            };
          };
        };
        /** Provided settings could not be applied for some reason - detailed errors in the response. */
        readonly 422: {
          readonly content: {
            readonly "application/json": components["schemas"]["ErrorResponse"];
          };
        };
      };
      readonly requestBody: {
        readonly content: {
          readonly "application/json": components["schemas"]["Locale"];
        };
      };
    };
  };
}

export interface components {
  readonly schemas: {
    readonly AnalyticsProvider: {
      /** Web Analytics Provider ID. */
      readonly id?: number;
      /** Web Analytics Provider title. */
      readonly name?: string;
      /** Web Analytics Provider code. */
      readonly code?: string;
      /** Flag indicates if Web Analytics Provider is enabled or not. */
      readonly enabled?: boolean;
    };
    readonly AnalyticsProviders: readonly components["schemas"]["AnalyticsProvider"][];
    readonly RobotsTxtSettings: {
      readonly robots_txt_ssl?: string;
    };
    readonly SEOSettings: {
      readonly page_title?: string;
      readonly meta_description?: string;
      readonly www_redirect?: "www" | "no-www" | "none";
      readonly meta_keywords?: string;
    };
    readonly StorefrontSearchSettings: {
      readonly default_product_sort?: components["schemas"]["ProductSortEnumValues"];
      readonly content_product_sort?: components["schemas"]["ContentSortEnumValues"];
      /** Controls whether Product Filtering feature is active on the storefront. Only supports manipulation on a global level. */
      readonly product_filtering_enabled?: boolean;
      readonly search_suggest?: boolean;
    };
    /** The basic profile settings for a store, used to give the shopper information about the business from which they are purchasing. */
    readonly StoreProfile: {
      readonly store_phone?: string;
      readonly store_name?: string;
      readonly store_address?: string;
    };
    /** The basic locale settings for a store, used to give shopper information about languages, countries, etc. */
    readonly Locale: {
      readonly default_shopper_language?: string;
      readonly store_country?: string;
    };
    readonly StorefrontStatus: {
      readonly down_for_maintenance_message?: string;
      readonly prelaunch_message?: string;
      /** A read-only value representing the auto-generated storefront password. */
      readonly prelaunch_password?: string;
    };
    /** The available sorts for PLP pages. */
    readonly ProductSortEnumValues:
      | "featured"
      | "bestselling"
      | "newest"
      | "atoz"
      | "ztoa"
      | "highestprice"
      | "lowestprice"
      | "bestreviewed";
    readonly StorefrontSecuritySettings: {
      readonly sitewide_https_enabled?: boolean;
      readonly csp_header?: string;
      readonly hsts?: {
        readonly enabled?: boolean;
        readonly max_age_months?: components["schemas"]["HSTSMaxAgeEnumValues"];
        readonly includeSubDomains?: boolean;
      };
    };
    readonly HSTSMaxAgeEnumValues: 0 | 3 | 6 | 12;
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
    readonly AvailableFilter: {
      readonly id?: number;
      readonly type?:
        | "price"
        | "category"
        | "brand"
        | "rating"
        | "other"
        | "product";
      readonly name?: string;
    };
    readonly EnabledFilter:
      | components["schemas"]["EnabledProductFilter"]
      | components["schemas"]["EnabledPriceFilter"]
      | components["schemas"]["EnabledCategoryFilter"]
      | components["schemas"]["EnabledBrandFilter"]
      | components["schemas"]["EnabledRatingFilter"]
      | components["schemas"]["EnabledMiscFilter"];
    /** A filter that uses product options and custom field data. */
    readonly EnabledProductFilter: {
      readonly id?: number;
      readonly display_name?: string;
      readonly type?: "product";
      readonly display_product_count?: boolean;
      readonly collapsed_by_default?: boolean;
      readonly items_to_show?: 5 | 10 | 15;
      readonly sort_by?: "alpha" | "option_values" | "item_count";
    };
    /** A filter based on the product's price, shown as a price range on the storefront. */
    readonly EnabledPriceFilter: {
      readonly id?: number;
      readonly display_name?: string;
      readonly type?: "price";
      readonly collapsed_by_default?: boolean;
    };
    /** A storefront filter for product category */
    readonly EnabledCategoryFilter: {
      readonly id?: number;
      readonly display_name?: string;
      readonly type?: "category";
      readonly items_to_show?: 5 | 10 | 15;
      readonly collapsed_by_default?: boolean;
      readonly display_product_count?: boolean;
    };
    /** A filter based on product review ratings. */
    readonly EnabledRatingFilter: {
      readonly id?: number;
      readonly display_name?: string;
      readonly type?: "rating";
      readonly collapsed_by_default?: boolean;
    };
    /** A storefront filter for product brand */
    readonly EnabledBrandFilter: {
      readonly id?: number;
      readonly display_name?: string;
      readonly type?: "brand";
      readonly sort_by?: "alpha" | "item_count";
      readonly items_to_show?: 5 | 10 | 15;
      readonly collapsed_by_default?: boolean;
      readonly display_product_count?: boolean;
    };
    readonly EnabledFilters: readonly components["schemas"]["EnabledFilter"][];
    /** A new set of enabled Product Filtering filters which should display in a particular context, such as on a particular Channel, or while viewing a particular Category. Array order indicates the display order on the storefront. */
    readonly EnabledFiltersOverride: {
      readonly scope?: components["schemas"]["SearchFilterOverrideScopeIdentifier"];
      readonly data?: components["schemas"]["EnabledFilters"];
    };
    readonly SearchFilterOverrideScopeIdentifier: {
      readonly channel_id?: number;
      readonly category_id?: number;
    };
    readonly EnabledTransactionalEmails: {
      readonly abandoned_cart_email?: boolean;
      readonly account_details_changed_email?: boolean;
      readonly combined_order_status_email?: boolean;
      readonly createaccount_email?: boolean;
      readonly createguestaccount_email?: boolean;
      readonly giftcertificate_email?: boolean;
      readonly invoice_email?: boolean;
      readonly ordermessage_notification?: boolean;
      readonly return_confirmation_email?: boolean;
      readonly return_statuschange_email?: boolean;
      readonly product_review_email?: boolean;
    };
    /** A standard error object. */
    readonly Error: {
      readonly code: string;
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
    readonly ErrorResponse: components["schemas"]["BaseError"] & {
      readonly errors?: components["schemas"]["DetailedErrors"];
    };
    /** Error payload for the BigCommerce API. */
    readonly BaseError: {
      /** The HTTP status code. */
      readonly status?: number;
      /** The error title describing the particular error. */
      readonly title?: string;
      readonly type?: string;
      readonly instance?: string;
    };
    readonly DetailedErrors: { readonly [key: string]: string };
    /** Miscellaneous Filters which appear as a group. */
    readonly EnabledMiscFilter: {
      readonly id?: number;
      readonly display_name?: string;
      readonly type?: "other";
      readonly show_free_shipping_filter?: boolean;
      readonly show_is_featured_filter?: boolean;
      readonly show_in_stock_filter?: boolean;
      readonly show_product_count?: boolean;
      readonly collapsed_by_default?: boolean;
    };
    readonly AvailablePriceFilter: {
      readonly id?: string;
      readonly type?: "price";
      readonly name?: string;
      readonly price_range_min?: number;
      readonly price_range_max?: number;
    };
    readonly AvailableOtherFilter: {
      readonly id?: string;
      readonly type?: "other";
      readonly name?: string;
    };
    readonly SearchFilterOverrideContextIdentifier: {
      readonly channel_id?: number;
      readonly category_id?: number;
    };
    readonly LogoSettings: {
      readonly logo_image_url?: string;
      readonly logo_text?: string;
      readonly type?: "image" | "text";
      readonly favicon_url?: string;
    };
    readonly ContentSortEnumValues: "relevance" | "atoz" | "ztoa";
    readonly ConfiguredFilter:
      | components["schemas"]["EnabledProductFilter"]
      | components["schemas"]["EnabledPriceFilter"]
      | components["schemas"]["EnabledCategoryFilter"]
      | components["schemas"]["EnabledBrandFilter"]
      | components["schemas"]["EnabledRatingFilter"]
      | components["schemas"]["EnabledMiscFilter"];
    readonly ConfiguredFilters: readonly components["schemas"]["ConfiguredFilter"][];
    /** A new set of enabled Product Filtering filters which should display in a particular context, such as on a particular Channel, or while viewing a particular Category. Array order indicates the display order on the storefront. */
    readonly ConfiguredFiltersOverride: {
      readonly data?: components["schemas"]["ConfiguredFilters"];
      readonly context?: components["schemas"]["SearchFilterOverrideContextIdentifier"];
    };
  };
  readonly parameters: {
    /** Channel ID to use for channel-specific setting. If omitted, you will interact with the global setting only. */
    readonly ChannelIdParam: number;
    /** Required Channel ID. This delete operation will delete overridden settings for this channel, thus restoring them to the global defaults. */
    readonly RequiredChannelIdParamForDelete: number;
    /** Array of strings (CSV) representing which configuration keys should be cleared (un-overridden) for the Channel. */
    readonly KeysToDelete: readonly string[];
  };
}

export interface operations {
  /** Delete storefront status. */
  readonly "delete-settings-storefront-status": {
    readonly parameters: {
      readonly query: {
        /** Required Channel ID. This delete operation will delete overridden settings for this channel, thus restoring them to the global defaults. */
        readonly channel_id: components["parameters"]["RequiredChannelIdParamForDelete"];
        /** Array of strings (CSV) representing which configuration keys should be cleared (un-overridden) for the Channel. */
        readonly keys: components["parameters"]["KeysToDelete"];
      };
    };
    readonly responses: {
      readonly 200: unknown;
    };
  };
  /** Delete storefront SEO settings. */
  readonly "delete-settings-seo": {
    readonly parameters: {
      readonly query: {
        /** Required Channel ID. This delete operation will delete overridden settings for this channel, thus restoring them to the global defaults. */
        readonly channel_id: components["parameters"]["RequiredChannelIdParamForDelete"];
        /** Array of strings (CSV) representing which configuration keys should be cleared (un-overridden) for the Channel. */
        readonly keys: components["parameters"]["KeysToDelete"];
      };
    };
    readonly responses: {
      /** OK */
      readonly 200: unknown;
    };
  };
  /** Delete storefront robots.txt. */
  readonly "delete-settings-robotstxt": {
    readonly parameters: {
      readonly query: {
        /** Required Channel ID. This delete operation will delete overridden settings for this channel, thus restoring them to the global defaults. */
        readonly channel_id: components["parameters"]["RequiredChannelIdParamForDelete"];
        /** Array of strings (CSV) representing which configuration keys should be cleared (un-overridden) for the Channel. */
        readonly keys: components["parameters"]["KeysToDelete"];
      };
    };
    readonly responses: {
      /** OK */
      readonly 200: unknown;
    };
  };
  /** Delete storefront search settings. */
  readonly "delete-settings-storefrontsearch": {
    readonly parameters: {
      readonly query: {
        /** Required Channel ID. This delete operation will delete overridden settings for this channel, thus restoring them to the global defaults. */
        readonly channel_id: components["parameters"]["RequiredChannelIdParamForDelete"];
        /** Array of strings (CSV) representing which configuration keys should be cleared (un-overridden) for the Channel. */
        readonly keys: components["parameters"]["KeysToDelete"];
      };
    };
    readonly responses: {
      /** OK */
      readonly 200: unknown;
    };
  };
  /** Returns a list of enabled default [Product Filtering](https://support.bigcommerce.com/s/article/Product-Filtering-Settings) filters. These filters will be used if a store does not have contextual overrides. */
  readonly getEnabled: {
    readonly responses: {
      readonly 200: {
        readonly content: {
          readonly "application/json": {
            readonly data?: components["schemas"]["ConfiguredFilters"];
            readonly meta?: { readonly [key: string]: any };
          };
        };
      };
    };
  };
  /** Updates enabled default [Product Filtering](https://support.bigcommerce.com/s/article/Product-Filtering-Settings) filters. */
  readonly updateEnabled: {
    readonly responses: {
      readonly 200: {
        readonly content: {
          readonly "application/json": {
            readonly data?: components["schemas"]["ConfiguredFilters"];
            readonly meta?: { readonly [key: string]: any };
          };
        };
      };
    };
    readonly requestBody: {
      readonly content: {
        readonly "application/json": components["schemas"]["ConfiguredFilters"];
      };
    };
  };
  /** Returns a list of filters available to power [Product Filtering](https://support.bigcommerce.com/s/article/Product-Filtering-Settings). */
  readonly getAvailable: {
    readonly parameters: {
      readonly query: {
        /** Narrows the list of available filters based on channel ID. Only products currently assigned to the given Channel will be considered. */
        readonly channel_id?: number;
        /** Narrows the list of available filters based on category ID. Only products within the provided Category will be considered. */
        readonly category_id?: number;
      };
    };
    readonly responses: {
      readonly 200: {
        readonly content: {
          readonly "application/json": {
            readonly data?: readonly components["schemas"]["AvailableFilter"][];
            readonly meta?: { readonly [key: string]: any };
          };
        };
      };
    };
  };
  /**
   * Returns a list of contextual filters enabled for a particular channel or category.
   *
   * **Usage Notes**
   *
   * Contextual filters allow you to configure the enabled filters per channel or category, so that shoppers can filter by the most relevant criteria.
   *
   * The order of the returned filters will match the sort order of the filters on the storefront.
   */
  readonly getContexts: {
    readonly parameters: {
      readonly query: {
        /** Only return contextual overrides related to a particular Channel. */
        readonly channel_id?: number;
        /** Only return contextual overrides related to a particular Category. */
        readonly category_id?: number;
      };
    };
    readonly responses: {
      /** OK */
      readonly 200: {
        readonly content: {
          readonly "application/json": {
            readonly data?: readonly components["schemas"]["ConfiguredFiltersOverride"][];
            readonly meta?: components["schemas"]["MetaPaginationObject"];
          };
        };
      };
    };
  };
  /**
   * Upserts contextual filters for a particular channel or category.
   *
   * **Usage Notes**
   *
   * Contextual filters allow you to configure the enabled filters per channel or category, so that shoppers can filter by the most relevant criteria.
   *
   * You can change the order of the filters on the live site by changing the order of the filters you send.
   */
  readonly upsertContexts: {
    readonly parameters: {};
    readonly responses: {
      /** OK */
      readonly 200: {
        readonly content: {
          readonly "application/json": {
            readonly data?: readonly components["schemas"]["ConfiguredFiltersOverride"][];
            readonly meta?: { readonly [key: string]: any };
          };
        };
      };
    };
    readonly requestBody: {
      readonly content: {
        readonly "application/json": readonly components["schemas"]["ConfiguredFiltersOverride"][];
      };
    };
  };
  /** Deletes contextual filters enabled in a particular context. */
  readonly deleteContexts: {
    readonly parameters: {
      readonly query: {
        /** Delete contextual overrides related to this channel ID */
        readonly channel_id?: number;
        /** Delete contextual overrides related to this category ID */
        readonly category_id?: number;
      };
    };
    readonly responses: {
      /** OK */
      readonly 200: unknown;
    };
  };
  /** Get global transactional email settings or channel specific overrides by `channel_id`. */
  readonly "get-settings-emails-enabled": {
    readonly parameters: {
      readonly query: {
        /** Channel ID to use for channel-specific setting. If omitted, you will interact with the global setting only. */
        readonly channel_id?: components["parameters"]["ChannelIdParam"];
      };
    };
    readonly responses: {
      /** OK, null indicates that a particular field has not been overridden on a channel level when channel level settings are requested */
      readonly 200: {
        readonly content: {
          readonly "application/json": {
            readonly data?: components["schemas"]["EnabledTransactionalEmails"];
            readonly meta?: { readonly [key: string]: any };
          };
        };
      };
    };
  };
  /** Update global transactional email settings or create channel specific overrides by `channel_id`. */
  readonly "put-settings-transactional-emails-enabled": {
    readonly parameters: {
      readonly query: {
        /** Channel ID to use for channel-specific setting. If omitted, you will interact with the global setting only. */
        readonly channel_id?: components["parameters"]["ChannelIdParam"];
      };
    };
    readonly responses: {
      /** OK */
      readonly 200: {
        readonly content: {
          readonly "application/json": {
            readonly data?: components["schemas"]["EnabledTransactionalEmails"];
            readonly meta?: { readonly [key: string]: any };
          };
        };
      };
    };
    readonly requestBody: {
      readonly content: {
        readonly "application/json": components["schemas"]["EnabledTransactionalEmails"];
      };
    };
  };
  /** Delete channel specific overrides for email settings. */
  readonly "delete-settings-transactional-emails-enabled": {
    readonly parameters: {
      readonly query: {
        /** Channel ID to use for channel-specific setting. If omitted, you will interact with the global setting only. */
        readonly channel_id?: components["parameters"]["ChannelIdParam"];
      };
    };
    readonly responses: {
      /** No Content */
      readonly 204: never;
    };
  };
}
