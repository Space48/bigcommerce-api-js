/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  readonly "/blog/tags": {
    /** Returns a list of *Blog Tags*. */
    readonly get: operations["getAllBlogTags"];
  };
  readonly "/blog/posts": {
    /** Returns all *Blog Posts*. Default sorting is by published_date, beginning with the most recent post. */
    readonly get: operations["getAllBlogPosts"];
    /**
     * Creates a *Blog Post*.
     *
     * **Required Fields**
     * *   title
     * *   body
     *
     * **Read Only Fields**
     * *   id
     * *   preview_url
     * *   summary
     *
     * **Notes**
     *
     * * When including `published_date` in a request, supply it as a flat date string (not an object) in valid <a href="http://tools.ietf.org/html/rfc2822#section-3.3" target="_blank">RFC 2822</a>. The&#160;example request below includes a `published_date` in RFC 2822 format.
     *
     * * Blog posts default to draft status. To publish blog posts to the storefront, set their `is_published` property to `true`.
     * * If a custom URL is not provided, the post’s URL will be generated based on the value of `title`.
     */
    readonly post: operations["createABlogPosts"];
    /** Deletes a page of `Blog Posts`. */
    readonly delete: operations["deleteAllBlogPosts"];
  };
  readonly "/blog/posts/{id}": {
    /** Returns a single *Blog Post*. */
    readonly get: operations["getABlogPost"];
    /**
     * Updates a *Blog Post*.
     *
     * **Read Only Fields**
     * *   id
     * *   preview_url
     *
     * **Notes**
     *
     * * When including `published_date` in a request, supply it as a flat date string (not an object) in valid <a href="http://tools.ietf.org/html/rfc2822#section-3.3" target="_blank">RFC 2822</a>. The&#160;example request below includes a `published_date` in RFC 2822 format.
     */
    readonly put: operations["updateABlogPost"];
    /** Deletes a *Blog Post*. */
    readonly delete: operations["deleteABlogPost"];
    readonly parameters: {
      readonly path: {
        readonly id: string;
      };
    };
  };
  readonly "/blog/posts/count": {
    /** Returns a count of all *Blog Posts*. */
    readonly get: operations["getACountOfAllBlogPosts"];
  };
  readonly "/pages": {
    /** Returns a list of *Pages*. Default sorting is by auto-generated ID from oldests to newest. This endpoint is deprecated. */
    readonly get: operations["getAllPages"];
    /**
     * Creates a *Page*. The payload limit is 1MB. This endpoint is deprecated.
     *
     * **Required Fields**
     * *   `type`
     * *   `name`
     * *   `link` (for a page of `type: link`)
     * *   `feed` (for a page of `type: rss_feed`)
     * *   `body` (for a page of `type: raw`)
     *
     * **Read Only Fields**
     * *   `id`
     *
     * ## Content Type
     *
     * The default value for `content_type` is `text/html`; however, if `page_type` is set to `raw`, `content_type` can be changed to `text/javascript` or `application/json`. Updating this field allows you to place a JavaScript or a JSON file in the root directory.
     */
    readonly post: operations["createAPage"];
  };
  readonly "/pages/{id}": {
    /** Returns a *Page*. This endpoint is deprecated. */
    readonly get: operations["getAPage"];
    /**
     * Updates a *Page*. The payload limit is 1MB. This endpoint is deprecated.
     *
     * **Read Only Fields**
     * * id
     */
    readonly put: operations["updateAPage"];
    /** Deletes a *Page*. This endpoint is deprecated. */
    readonly delete: operations["deleteAPage"];
    readonly parameters: {
      readonly path: {
        readonly id: string;
      };
    };
  };
  readonly "/redirects": {
    /**
     * Returns a list all *Redirect URLs*.
     *
     * <div class="HubBlock--callout">
     * <div class="CalloutBlock--warning">
     * <div class="HubBlock-content">
     *
     * ### **Deprecated**
     *
     * Avoid using this API operation if possible. It will be removed in a future version.
     *
     * For the most up-to-date version of this API, see  [Get Redirects v3](https://developer.bigcommerce.com/api-reference/storefront/redirects/redirects/getredirects) to manage redirects URLs.
     * </div>
     * </div>
     * </div>
     */
    readonly get: operations["getAListofRedirects"];
    /**
     * Creates a *Redirect URL*.
     *
     * **Required Fields**
     * *   path
     * *   forward
     *
     * **Read Only**
     * *   url
     *
     * <div class="HubBlock--callout">
     * <div class="CalloutBlock--warning">
     * <div class="HubBlock-content">
     *
     * ### **Deprecated**
     *
     * Avoid using this API operation if possible. It will be removed in a future version.
     *
     * For the most up-to-date version of this API, see [Upsert Redirects v3](https://developer.bigcommerce.com/api-reference/storefront/redirects/redirects/upsertredirects) to upsert new redirect data.
     *
     * </div>
     * </div>
     * </div>
     */
    readonly post: operations["createARedirect"];
    /**
     * By default, it deletes all *Redirect URLs* in a store.
     *
     * <div class="HubBlock--callout">
     * <div class="CalloutBlock--warning">
     * <div class="HubBlock-content">
     *
     * ### **Deprecated**
     *
     * Avoid using this API operation if possible. It will be removed in a future version.
     *
     * For the most up-to-date version of this API, see [Delete Redirects v3](https://developer.bigcommerce.com/api-reference/storefront/redirects/redirects/deleteredirects) to delete redirects URLs.
     *
     * </div>
     * </div>
     * </div>
     */
    readonly delete: operations["deleteAllRedirects"];
  };
  readonly "/redirects/{id}": {
    /**
     * Returns a single *Redirect URL*.
     *
     * <div class="HubBlock--callout">
     * <div class="CalloutBlock--warning">
     * <div class="HubBlock-content">
     *
     * ### **Deprecated**
     *
     * Avoid using this API operation if possible. It will be removed in a future version.
     *
     * For the most up-to-date version of this API, see [Get Redirects v3](https://developer.bigcommerce.com/api-reference/storefront/redirects/redirects/getredirects) to get a redirect URL.
     *
     * </div>
     * </div>
     * </div>
     */
    readonly get: operations["getARedirectURL"];
    /**
     * Updates a *Redirect URL*.
     *
     * **Required Fields**
     * *   path
     * *   forward
     *
     * **Read Only Fields**
     * *   url
     *
     * <div class="HubBlock--callout">
     * <div class="CalloutBlock--warning">
     * <div class="HubBlock-content">
     *
     * ### **Deprecated**
     *
     * Avoid using this API operation if possible. It will be removed in a future version.
     *
     * For the most up-to-date version of this API, see [Upsert Redirects v3](https://developer.bigcommerce.com/api-reference/storefront/redirects/redirects/upsertredirects) to update redirect data.
     *
     * </div>
     * </div>
     * </div>
     */
    readonly put: operations["updateARedirectURL"];
    /**
     * Deletes a *Redirect URL*.
     *
     * <div class="HubBlock--callout">
     * <div class="CalloutBlock--warning">
     * <div class="HubBlock-content">
     *
     * ### **Deprecated**
     *
     * Avoid using this API operation if possible. It will be removed in a future version.
     *
     * For the most up-to-date version of this API, see [Delete Redirects v3](https://developer.bigcommerce.com/api-reference/storefront/redirects/redirects/deleteredirects) to delete a redirect URL.
     *
     * </div>
     * </div>
     * </div>
     */
    readonly delete: operations["deleteARedirect"];
    readonly parameters: {
      readonly path: {
        readonly id: string;
      };
    };
  };
  readonly "/redirects/count": {
    /**
     * Gets a count of *Redirect URLs* in a store.
     *
     * <div class="HubBlock--callout">
     * <div class="CalloutBlock--warning">
     * <div class="HubBlock-content">
     *
     * ### **Deprecated**
     *
     * Avoid using this API operation if possible. It will be removed in a future version.
     *
     * For the most up-to-date version of this API, see  [Get Redirects v3](https://developer.bigcommerce.com/api-reference/storefront/redirects/redirects/getredirects) to get a count of redirects.
     * </div>
     * </div>
     * </div>
     */
    readonly get: operations["getACountOfRedirects"];
  };
}

export interface definitions {
  readonly blogPost_Full: {
    /** ID of this blog post. (READ-ONLY) */
    readonly id?: number;
  } & definitions["blogPost_Base"];
  readonly addresses: {
    /** Full URL of where the resource is located. */
    readonly url?: string;
    /** Resource being accessed. */
    readonly resource?: string;
  };
  readonly formField: {
    /** Name of the form field */
    readonly name?: string;
    /** Value of the form field */
    readonly value?: string;
  };
  readonly page_Full: {
    /** ID of the page. */
    readonly id?: number;
  } & definitions["page_Base"];
  readonly redirect: {
    /** Numeric ID of the redirect. */
    readonly id?: number;
    /** The path from which to redirect. */
    readonly path: string;
    readonly forward: definitions["forward"];
    /** URL of the redirect. READ-ONLY */
    readonly url?: string;
  };
  readonly forward: {
    /** The type of redirect. If it is a `manual` redirect then type will always be manual. Dynamic redirects will have the type of the page. Such as product or category. */
    readonly type?: string;
    /** Reference of the redirect. Dynamic redirects will have the category or product number. Manual redirects will have the url that is being directed to. */
    readonly ref?: number;
  };
  readonly customer_Full: {
    /** Unique numeric ID of this customer. This is a READ-ONLY field; do not set or modify its value in a POST or PUT request. */
    readonly id?: number;
    /** Not returned in any responses, but accepts up to two fields allowing you to set the customer’s password. If a password is not supplied, it is generated automatically. For further information about using this object, please see the Customers resource documentation. */
    readonly _authentication?: {
      readonly force_reset?: string;
      readonly password?: string;
      readonly password_confirmation?: string;
    };
    /** The name of the company for which the customer works. */
    readonly company?: string;
    /** First name of the customer. */
    readonly first_name: string;
    /** Last name of the customer. */
    readonly last_name: string;
    /** Email address of the customer. */
    readonly email: string;
    /** Phone number of the customer. */
    readonly phone?: string;
    /** Date on which the customer registered from the storefront or was created in the control panel. This is a READ-ONLY field; do not set or modify its value in a POST or PUT request. */
    readonly date_created?: string;
    /** Date on which the customer updated their details in the storefront or was updated in the control panel. This is a READ-ONLY field; do not set or modify its value in a POST or PUT request. */
    readonly date_modified?: string;
    /** The amount of credit the customer has. (Float, Float as String, Integer) */
    readonly store_credit?: string;
    /** The customer’s IP address when they signed up. */
    readonly registration_ip_address?: string;
    /** The group to which the customer belongs. */
    readonly customer_group_id?: number;
    /** Store-owner notes on the customer. */
    readonly notes?: string;
    /** If applicable, the tax-exempt category of the shopper's customer account. You can apply a tax-exempt category to multiple customers. This code should match the exemption codes provided by the third-party integration. */
    readonly tax_exempt_category?: string;
    /** Records whether the customer would like to receive marketing content from this store. READ-ONLY.This is a READ-ONLY field; do not set or modify its value in a POST or PUT request. */
    readonly accepts_marketing?: boolean;
    readonly addresses?: definitions["addresses"];
    /** Array of custom fields. This is a READ-ONLY field; do not set or modify its value in a POST or PUT request. */
    readonly form_fields?: readonly definitions["formField"][];
    /** Force a password change on next login. */
    readonly reset_pass_on_login?: boolean;
  };
  readonly categoryAccessLevel: {
    /**
     * + `all` - Customers can access all categories
     *  + `specific`  - Customers can access a specific list of categories
     * + `none` - Customers are prevented from viewing any of the categories in this group.
     */
    readonly type?: "all" | "specific" | "none";
    /** Is an array of category IDs and should be supplied only if `type` is specific. */
    readonly categories?: readonly string[];
  };
  readonly timeZone: {
    /** a string identifying the time zone, in the format: <Continent-name>/<City-name>. */
    readonly name?: string;
    /** a negative or positive number, identifying the offset from UTC/GMT, in seconds, during winter/standard time. */
    readonly raw_offset?: number;
    /** "-/+" offset from UTC/GMT, in seconds, during summer/daylight saving time. */
    readonly dst_offset?: number;
    /** a boolean indicating whether this time zone observes daylight saving time. */
    readonly dst_correction?: boolean;
    readonly date_format?: definitions["dateFormat"];
  };
  readonly count_Response: {
    readonly count?: number;
  };
  readonly dateFormat: {
    /** string that defines dates’ display format, in the pattern: M jS Y */
    readonly display?: string;
    /** string that defines the CSV export format for orders, customers, and products, in the pattern: M jS Y */
    readonly export?: string;
    /** string that defines dates’ extended-display format, in the pattern: M jS Y @ g:i A. */
    readonly extended_display?: string;
  };
  readonly blogTags: readonly {
    readonly tag?: string;
    readonly post_ids?: readonly number[];
  }[];
  readonly blogPost_Base: {
    /** Title of this blog post. */
    readonly title: string;
    /** URL for the public blog post. */
    readonly url?: string;
    /** URL to preview the blog post. (READ-ONLY) */
    readonly preview_url?: string;
    /** Text body of the blog post. */
    readonly body: string;
    /** Tags to characterize the blog post. */
    readonly tags?: readonly string[];
    /** Summary of the blog post. (READ-ONLY) */
    readonly summary?: string;
    /** Whether the blog post is published. */
    readonly is_published?: boolean;
    readonly published_date?: definitions["publishedDate"];
    /** Published date in `ISO 8601` format. */
    readonly published_date_iso8601?: string;
    /** Description text for this blog post’s `<meta/>` element. */
    readonly meta_description?: string;
    /** Keywords for this blog post’s `<meta/>` element. */
    readonly meta_keywords?: string;
    /** Name of the blog post’s author. */
    readonly author?: string;
    /** Local path to a thumbnail uploaded to `product_images/` via [WebDav](https://support.bigcommerce.com/s/article/File-Access-WebDAV). */
    readonly thumbnail_path?: string;
  };
  readonly publishedDate: {
    readonly timezone_type?: string;
    readonly date?: string;
    readonly timezone?: string;
  };
  /** Not returned in any responses, but accepts up to two fields allowing you to set the customer’s password. If a password is not supplied, it is generated automatically. For further information about using this object, please see the Customers resource documentation. */
  readonly authentication: {
    readonly force_reset?: string;
    readonly password?: string;
    readonly password_confirmation?: string;
  };
  readonly customer_Base: { readonly [key: string]: any };
  readonly page_Base: {
    /** ID of any parent Web page. */
    readonly parent_id?: number;
    /**
     * `page`: free-text page
     * `link`: link to another web address
     * `rss_feed`: syndicated content from an RSS feed
     * `contact_form`: When the store's contact form is used.
     */
    readonly type: "page" | "rss_feed" | "contact_form" | "raw" | "link";
    /** Where the page’s type is a contact form: object whose members are the fields enabled (in the control panel) for storefront display. Possible members are:`fullname`: full name of the customer submitting the form; `phone`: customer’s phone number, as submitted on the form; `companyname`: customer’s submitted company name; `orderno`: customer’s submitted order number; `rma`: customer’s submitted RMA (Return Merchandise Authorization) number. */
    readonly contact_fields?: string;
    /** Where the page’s type is a contact form: email address that receives messages sent via the form. */
    readonly email?: string;
    /** Page name, as displayed on the storefront. */
    readonly name: string;
    /** Relative URL on the storefront for this page. */
    readonly url?: string;
    /** Description contained within this page’s `<meta/>` element. */
    readonly meta_description?: string;
    /** HTML or variable that populates this page’s `<body>` element, in default/desktop view. Required in POST if page type is `raw`. */
    readonly body: string;
    /** HTML to use for this page's body when viewed in the mobile template (deprecated). */
    readonly mobile_body?: string;
    /** If true, this page has a mobile version. */
    readonly has_mobile_version?: boolean;
    /** If true, this page appears in the storefront’s navigation menu. */
    readonly is_visible?: boolean;
    /** If true, this page is the storefront’s home page. */
    readonly is_homepage?: boolean;
    /** Text specified for this page’s `<title>` element. (If empty, the value of the name property is used.) */
    readonly meta_title?: string;
    /** Layout template for this page. This field is writable only for stores with a Blueprint theme applied. */
    readonly layout_file?: string;
    /** Order in which this page should display on the storefront. (Lower integers specify earlier display.) */
    readonly sort_order?: number;
    /** Comma-separated list of keywords that shoppers can use to locate this page when searching the store. */
    readonly search_keywords?: string;
    /** Comma-separated list of SEO-relevant keywords to include in the page’s `<meta/>` element. */
    readonly meta_keywords?: string;
    /** If page type is `rss_feed` the n this field is visisble. Required in POST required for `rss page` type. */
    readonly feed: string;
    /** If page type is `link` this field is returned. Required in  POST to create a `link` page. */
    readonly link: string;
    readonly content_type?:
      | "application/json"
      | "text/javascript"
      | "text/html";
  };
}

export interface operations {
  /** Returns a list of *Blog Tags*. */
  readonly getAllBlogTags: {
    readonly parameters: {
      readonly header: {
        readonly Accept: string;
        readonly "Content-Type": string;
      };
    };
    readonly responses: {
      readonly 200: {
        readonly schema: readonly definitions["blogTags"][];
      };
    };
  };
  /** Returns all *Blog Posts*. Default sorting is by published_date, beginning with the most recent post. */
  readonly getAllBlogPosts: {
    readonly parameters: {
      readonly header: {
        readonly Accept: string;
        readonly "Content-Type": string;
      };
      readonly query: {
        /** Filter param. */
        readonly is_published?: string;
        /** Filter param. Value must be URL encoded. */
        readonly url?: string;
        /** Filter param. */
        readonly tag?: string;
        /** Filter param. */
        readonly published_date?: string;
        /** Filter param. */
        readonly page?: number;
        /** Filter param. */
        readonly limit?: number;
      };
    };
    readonly responses: {
      readonly 200: {
        readonly schema: readonly definitions["blogPost_Full"][];
      };
    };
  };
  /**
   * Creates a *Blog Post*.
   *
   * **Required Fields**
   * *   title
   * *   body
   *
   * **Read Only Fields**
   * *   id
   * *   preview_url
   * *   summary
   *
   * **Notes**
   *
   * * When including `published_date` in a request, supply it as a flat date string (not an object) in valid <a href="http://tools.ietf.org/html/rfc2822#section-3.3" target="_blank">RFC 2822</a>. The&#160;example request below includes a `published_date` in RFC 2822 format.
   *
   * * Blog posts default to draft status. To publish blog posts to the storefront, set their `is_published` property to `true`.
   * * If a custom URL is not provided, the post’s URL will be generated based on the value of `title`.
   */
  readonly createABlogPosts: {
    readonly parameters: {
      readonly header: {
        readonly Accept: string;
        readonly "Content-Type": string;
      };
      readonly body: {
        readonly body: definitions["blogPost_Base"];
      };
    };
    readonly responses: {
      readonly 200: {
        readonly schema: definitions["blogPost_Base"];
      };
    };
  };
  /** Deletes a page of `Blog Posts`. */
  readonly deleteAllBlogPosts: {
    readonly parameters: {
      readonly header: {
        readonly Accept: string;
        readonly "Content-Type": string;
      };
      readonly query: {
        /** Filter param. */
        readonly page?: number;
        /** Filter param. */
        readonly limit?: number;
      };
    };
    readonly responses: {
      readonly 204: never;
    };
  };
  /** Returns a single *Blog Post*. */
  readonly getABlogPost: {
    readonly parameters: {
      readonly path: {
        /** Id of the blog post. */
        readonly id: number;
      };
      readonly header: {
        readonly Accept: string;
        readonly "Content-Type": string;
      };
    };
    readonly responses: {
      readonly 200: {
        readonly schema: definitions["blogPost_Full"];
      };
    };
  };
  /**
   * Updates a *Blog Post*.
   *
   * **Read Only Fields**
   * *   id
   * *   preview_url
   *
   * **Notes**
   *
   * * When including `published_date` in a request, supply it as a flat date string (not an object) in valid <a href="http://tools.ietf.org/html/rfc2822#section-3.3" target="_blank">RFC 2822</a>. The&#160;example request below includes a `published_date` in RFC 2822 format.
   */
  readonly updateABlogPost: {
    readonly parameters: {
      readonly path: {
        /** Id of the blog post. */
        readonly id: number;
      };
      readonly header: {
        readonly Accept: string;
        readonly "Content-Type": string;
      };
      readonly body: {
        readonly body: definitions["blogPost_Base"];
      };
    };
    readonly responses: {
      readonly 200: {
        readonly schema: definitions["blogPost_Base"];
      };
    };
  };
  /** Deletes a *Blog Post*. */
  readonly deleteABlogPost: {
    readonly parameters: {
      readonly path: {
        /** Id of the blog post. */
        readonly id: number;
      };
      readonly header: {
        readonly Accept: string;
        readonly "Content-Type": string;
      };
    };
    readonly responses: {
      readonly 204: never;
    };
  };
  /** Returns a count of all *Blog Posts*. */
  readonly getACountOfAllBlogPosts: {
    readonly parameters: {
      readonly header: {
        readonly Accept: string;
        readonly "Content-Type": string;
      };
    };
    readonly responses: {
      readonly 200: {
        readonly schema: definitions["count_Response"];
      };
    };
  };
  /** Returns a list of *Pages*. Default sorting is by auto-generated ID from oldests to newest. This endpoint is deprecated. */
  readonly getAllPages: {
    readonly parameters: {
      readonly header: {
        readonly Accept: string;
        readonly "Content-Type": string;
      };
      readonly query: {
        /** Filter param. */
        readonly page?: number;
        /** Filter param. */
        readonly limit?: number;
      };
    };
    readonly responses: {
      readonly 200: {
        readonly schema: readonly definitions["page_Full"][];
      };
    };
  };
  /**
   * Creates a *Page*. The payload limit is 1MB. This endpoint is deprecated.
   *
   * **Required Fields**
   * *   `type`
   * *   `name`
   * *   `link` (for a page of `type: link`)
   * *   `feed` (for a page of `type: rss_feed`)
   * *   `body` (for a page of `type: raw`)
   *
   * **Read Only Fields**
   * *   `id`
   *
   * ## Content Type
   *
   * The default value for `content_type` is `text/html`; however, if `page_type` is set to `raw`, `content_type` can be changed to `text/javascript` or `application/json`. Updating this field allows you to place a JavaScript or a JSON file in the root directory.
   */
  readonly createAPage: {
    readonly parameters: {
      readonly header: {
        readonly Accept: string;
        readonly "Content-Type": string;
      };
      readonly body: {
        readonly body: definitions["page_Base"];
      };
    };
    readonly responses: {
      readonly 200: {
        readonly schema: definitions["page_Full"];
      };
    };
  };
  /** Returns a *Page*. This endpoint is deprecated. */
  readonly getAPage: {
    readonly parameters: {
      readonly path: {
        /** Id of the page. */
        readonly id: number;
      };
      readonly header: {
        readonly Accept: string;
        readonly "Content-Type": string;
      };
    };
    readonly responses: {
      readonly 200: {
        readonly schema: definitions["page_Full"];
      };
    };
  };
  /**
   * Updates a *Page*. The payload limit is 1MB. This endpoint is deprecated.
   *
   * **Read Only Fields**
   * * id
   */
  readonly updateAPage: {
    readonly parameters: {
      readonly path: {
        readonly id: string;
      };
      readonly body: {
        readonly body?: definitions["page_Base"];
      };
      readonly header: {
        readonly Accept?: string;
        readonly "Content-Type"?: string;
      };
    };
    readonly responses: {
      readonly 200: {
        readonly schema: definitions["page_Base"];
      };
    };
  };
  /** Deletes a *Page*. This endpoint is deprecated. */
  readonly deleteAPage: {
    readonly parameters: {
      readonly path: {
        /** Id of the page. */
        readonly id: number;
      };
      readonly header: {
        readonly Accept: string;
        readonly "Content-Type": string;
      };
    };
    readonly responses: {
      readonly 204: never;
    };
  };
  /**
   * Returns a list all *Redirect URLs*.
   *
   * <div class="HubBlock--callout">
   * <div class="CalloutBlock--warning">
   * <div class="HubBlock-content">
   *
   * ### **Deprecated**
   *
   * Avoid using this API operation if possible. It will be removed in a future version.
   *
   * For the most up-to-date version of this API, see  [Get Redirects v3](https://developer.bigcommerce.com/api-reference/storefront/redirects/redirects/getredirects) to manage redirects URLs.
   * </div>
   * </div>
   * </div>
   */
  readonly getAListofRedirects: {
    readonly parameters: {
      readonly header: {
        readonly Accept: string;
        readonly "Content-Type": string;
      };
      readonly query: {
        /** Filter param. */
        readonly page?: number;
        /** Filter param. */
        readonly limit?: number;
      };
    };
    readonly responses: {
      readonly 200: {
        readonly schema: readonly definitions["redirect"][];
      };
    };
  };
  /**
   * Creates a *Redirect URL*.
   *
   * **Required Fields**
   * *   path
   * *   forward
   *
   * **Read Only**
   * *   url
   *
   * <div class="HubBlock--callout">
   * <div class="CalloutBlock--warning">
   * <div class="HubBlock-content">
   *
   * ### **Deprecated**
   *
   * Avoid using this API operation if possible. It will be removed in a future version.
   *
   * For the most up-to-date version of this API, see [Upsert Redirects v3](https://developer.bigcommerce.com/api-reference/storefront/redirects/redirects/upsertredirects) to upsert new redirect data.
   *
   * </div>
   * </div>
   * </div>
   */
  readonly createARedirect: {
    readonly parameters: {
      readonly header: {
        readonly Accept: string;
        readonly "Content-Type": string;
      };
      readonly body: {
        readonly body: definitions["redirect"];
      };
    };
    readonly responses: {
      readonly 200: {
        readonly schema: definitions["redirect"];
      };
    };
  };
  /**
   * By default, it deletes all *Redirect URLs* in a store.
   *
   * <div class="HubBlock--callout">
   * <div class="CalloutBlock--warning">
   * <div class="HubBlock-content">
   *
   * ### **Deprecated**
   *
   * Avoid using this API operation if possible. It will be removed in a future version.
   *
   * For the most up-to-date version of this API, see [Delete Redirects v3](https://developer.bigcommerce.com/api-reference/storefront/redirects/redirects/deleteredirects) to delete redirects URLs.
   *
   * </div>
   * </div>
   * </div>
   */
  readonly deleteAllRedirects: {
    readonly parameters: {
      readonly header: {
        readonly Accept: string;
        readonly "Content-Type": string;
      };
    };
    readonly responses: {
      readonly 204: never;
    };
  };
  /**
   * Returns a single *Redirect URL*.
   *
   * <div class="HubBlock--callout">
   * <div class="CalloutBlock--warning">
   * <div class="HubBlock-content">
   *
   * ### **Deprecated**
   *
   * Avoid using this API operation if possible. It will be removed in a future version.
   *
   * For the most up-to-date version of this API, see [Get Redirects v3](https://developer.bigcommerce.com/api-reference/storefront/redirects/redirects/getredirects) to get a redirect URL.
   *
   * </div>
   * </div>
   * </div>
   */
  readonly getARedirectURL: {
    readonly parameters: {
      readonly path: {
        /** Id of the redirect url */
        readonly id: number;
      };
      readonly header: {
        readonly Accept: string;
        readonly "Content-Type": string;
      };
    };
    readonly responses: {
      readonly 200: {
        readonly schema: definitions["redirect"];
      };
    };
  };
  /**
   * Updates a *Redirect URL*.
   *
   * **Required Fields**
   * *   path
   * *   forward
   *
   * **Read Only Fields**
   * *   url
   *
   * <div class="HubBlock--callout">
   * <div class="CalloutBlock--warning">
   * <div class="HubBlock-content">
   *
   * ### **Deprecated**
   *
   * Avoid using this API operation if possible. It will be removed in a future version.
   *
   * For the most up-to-date version of this API, see [Upsert Redirects v3](https://developer.bigcommerce.com/api-reference/storefront/redirects/redirects/upsertredirects) to update redirect data.
   *
   * </div>
   * </div>
   * </div>
   */
  readonly updateARedirectURL: {
    readonly parameters: {
      readonly path: {
        /** Id of the redirect url */
        readonly id: number;
      };
      readonly header: {
        readonly Accept: string;
        readonly "Content-Type": string;
      };
      readonly body: {
        readonly body: {
          /** Numeric ID of the redirect. */
          readonly id?: number;
          /** The path from which to redirect. */
          readonly path: string;
          readonly forward: {
            /** The type of redirect. If it is a manual redirect then type will always be manual. Dynamic redirects will have the type of the page. Such as product or category. */
            readonly type?: string;
            /** Reference of the redirect. Dynamic redirects will have the category or product number. Manual redirects will have the url that is being directed to. */
            readonly ref?: string;
          };
          /** URL of the redirect. READ-ONLY */
          readonly url?: string;
        };
      };
    };
    readonly responses: {
      readonly 200: {
        readonly schema: definitions["redirect"];
      };
    };
  };
  /**
   * Deletes a *Redirect URL*.
   *
   * <div class="HubBlock--callout">
   * <div class="CalloutBlock--warning">
   * <div class="HubBlock-content">
   *
   * ### **Deprecated**
   *
   * Avoid using this API operation if possible. It will be removed in a future version.
   *
   * For the most up-to-date version of this API, see [Delete Redirects v3](https://developer.bigcommerce.com/api-reference/storefront/redirects/redirects/deleteredirects) to delete a redirect URL.
   *
   * </div>
   * </div>
   * </div>
   */
  readonly deleteARedirect: {
    readonly parameters: {
      readonly path: {
        /** Id of the redirect url */
        readonly id: number;
      };
      readonly header: {
        readonly Accept: string;
        readonly "Content-Type": string;
      };
    };
    readonly responses: {
      readonly 204: never;
    };
  };
  /**
   * Gets a count of *Redirect URLs* in a store.
   *
   * <div class="HubBlock--callout">
   * <div class="CalloutBlock--warning">
   * <div class="HubBlock-content">
   *
   * ### **Deprecated**
   *
   * Avoid using this API operation if possible. It will be removed in a future version.
   *
   * For the most up-to-date version of this API, see  [Get Redirects v3](https://developer.bigcommerce.com/api-reference/storefront/redirects/redirects/getredirects) to get a count of redirects.
   * </div>
   * </div>
   * </div>
   */
  readonly getACountOfRedirects: {
    readonly parameters: {
      readonly header: {
        readonly Accept: string;
        readonly "Content-Type": string;
      };
    };
    readonly responses: {
      readonly 200: {
        readonly schema: definitions["count_Response"];
      };
    };
  };
}
