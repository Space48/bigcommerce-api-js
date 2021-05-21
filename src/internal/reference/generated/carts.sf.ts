/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  readonly "/carts": {
    /**
     * Returns a *Cart*.
     *
     * <div class="HubBlock--callout">
     * <div class="CalloutBlock--info">
     * <div class="HubBlock-content">
     *
     * > ### Note
     * > The Send a Test Request feature is not currently supported for this endpoint.
     *
     * </div>
     * </div>
     * </div>
     */
    readonly get: operations["getACart"];
    /**
     * Creates a *Cart*.
     *
     * <div class="HubBlock--callout">
     * <div class="CalloutBlock--info">
     * <div class="HubBlock-content">
     *
     * > ### Note
     * > The Send a Test Request feature is not currently supported for this endpoint.
     *
     * </div>
     * </div>
     * </div>
     */
    readonly post: operations["createACart"];
  };
  readonly "/carts/{cartId}": {
    /**
     * Deletes a *Cart*. Once a *Cart* has been deleted it can not be recovered.
     *
     * <div class="HubBlock--callout">
     * <div class="CalloutBlock--info">
     * <div class="HubBlock-content">
     *
     * > ### Note
     * > The Send a Test Request feature is not currently supported for this endpoint.
     *
     * </div>
     * </div>
     * </div>
     */
    readonly delete: operations["deleteACart"];
  };
  readonly "/carts/{cartId}/items": {
    /**
     * Adds a line items to the *Cart*.
     *
     * <div class="HubBlock--callout">
     * <div class="CalloutBlock--info">
     * <div class="HubBlock-content">
     *
     * > ### Note
     * > The Send a Test Request feature is not currently supported for this endpoint.
     *
     * </div>
     * </div>
     * </div>
     */
    readonly post: operations["addCartLineItem"];
  };
  readonly "/carts/{cartId}/items/{itemId}": {
    /**
     * Updates a *Cart* line item. Updates an existing, single line item quantity and the price of custom items in a cart.
     *
     * If a modified product or variant needs to be changed or updated, you can remove and re-add the product to the cart with the correct variants using the [Delete Cart Line Item](https://developer.bigcommerce.com/api-reference/storefront/carts/cart-items/deletecartlineitem) and the [Add Cart Line Items](https://developer.bigcommerce.com/api-reference/storefront/carts/cart-items/addcartlineitem) endpoints.
     *
     *
     * <div class="HubBlock--callout">
     * <div class="CalloutBlock--info">
     * <div class="HubBlock-content">
     *
     * > ### Note
     * > The Send a Test Request feature is not currently supported for this endpoint.
     *
     * </div>
     * </div>
     * </div>
     */
    readonly put: operations["updateCartLineItem"];
    /**
     * Deletes a *Cart* line item.
     *
     * Removing the last `line_item` in the *Cart* deletes the *Cart*.
     *
     * <div class="HubBlock--callout">
     * <div class="CalloutBlock--info">
     * <div class="HubBlock-content">
     *
     * > ### Note
     * > The Send a Test Request feature is not currently supported for this endpoint.
     *
     * </div>
     * </div>
     * </div>
     */
    readonly delete: operations["deleteCartLineItem"];
  };
}

export interface components {
  readonly schemas: {
    readonly responseCartCoupons: readonly ({
      /** The coupon code. */
      readonly code: string;
      /**
       * |Type `int`|Type Name|
       * |-|-|
       * |`0`|`per_item_discount`|
       * |`1`|`percentage_discount`|
       * |`2`|`per_total_discount`|
       * |`3`|`shipping_discount`|
       * |`4`|`free_shipping`|
       * |`5`|`promotion`|
       */
      readonly couponType?: number;
      /** The discounted amount applied within a given context. */
      readonly discountedAmount?: number;
      /** The coupon ID. */
      readonly id?: string;
    } & { readonly [key: string]: any })[];
    readonly responseCartDiscounts: readonly ({
      /** The discounted amount applied within a given context. */
      readonly discountedAmount?: number;
      /** ID of the applied discount. */
      readonly id?: string;
    } & { readonly [key: string]: any })[];
    /** Cart object used in storefront cart responses. */
    readonly responseCart: {
      /** Cart ID, provided after creating a cart with a POST. */
      readonly id?: string;
      /** ID of the customer to which the cart belongs. */
      readonly customerId?: number;
      /** The cart's email. This is the same email that is used in the billing address */
      readonly email?: string;
      readonly currency?: components["schemas"]["responseCartCurrency"];
      /** Whether this item is taxable. */
      readonly isTaxIncluded?: boolean;
      /** Cost of cart's contents, before applying discounts. */
      readonly baseAmount?: number;
      /** Discounted amount. */
      readonly discountAmount?: number;
      /** Sum of line-items amounts, minus cart-level discounts and coupons. This amount includes taxes (where applicable). */
      readonly cartAmount?: number;
      readonly coupons?: components["schemas"]["responseCartCoupons"];
      readonly discounts?: components["schemas"]["responseCartDiscounts"];
      readonly lineItems?: components["schemas"]["responseCartLineItems"];
      /** Time when the cart was created. */
      readonly createdTime?: string;
      /** Time when the cart was last updated. */
      readonly updatedTime?: string;
      /** Locale of the cart. */
      readonly locale?: string;
    } & { readonly [key: string]: any };
    /** Cart object used in create cart requests. */
    readonly requestCart: (
      | ({
          readonly lineItems: readonly components["schemas"]["requestCartPostLineItem"][];
          readonly locale?: string;
        } & { readonly [key: string]: any })
      | ({
          readonly giftCertificates: readonly components["schemas"]["requestLineItemGiftCertificate"][];
          readonly locale?: string;
        } & { readonly [key: string]: any })
      | ({
          readonly lineItems: readonly components["schemas"]["requestCartPostLineItem"][];
          readonly giftCertificates: components["schemas"]["requestLineItemGiftCertificate"];
          readonly locale?: string;
        } & { readonly [key: string]: any })
    ) & { readonly [key: string]: any };
    readonly responseCartLineItemsPhysicalItemGiftWrapping:
      | ({
          /** Gift-wrapping price per product. */
          readonly amount?: number;
          readonly message?: string;
          /** Name of the gift-wrapping option. */
          readonly name?: string;
        } & { readonly [key: string]: any })
      | null;
    readonly requestLineItemGiftCertificate: {
      /** Gift-certificate amount. */
      readonly amount: number;
      /** Message shown to recipient, as provided by sender. */
      readonly message?: string;
      /** Name assigned to this gift-certificate line item. */
      readonly name: string;
      /** Quantity of this item. */
      readonly quantity: number;
      readonly recipient: components["schemas"]["requestLineItemGiftCertificateRecipient"];
      readonly sender: components["schemas"]["requestLineItemGiftCertificateSender"];
      /** Currently supports `Birthday`, `Boy`, `Celebration`, `Christmas`, `General`, and `Girl`. */
      readonly theme: string;
    } & { readonly [key: string]: any };
    /** Cart object used in add items requests. */
    readonly LineItemsRequest: (
      | ({
          readonly lineItems: readonly components["schemas"]["requestCartPostLineItem"][];
        } & { readonly [key: string]: any })
      | ({
          readonly giftCertificates: readonly components["schemas"]["requestLineItemGiftCertificate"][];
        } & { readonly [key: string]: any })
      | ({
          readonly lineItems: readonly components["schemas"]["requestCartPostLineItem"][];
          readonly giftCertificates: components["schemas"]["requestLineItemGiftCertificate"];
        } & { readonly [key: string]: any })
    ) & { readonly [key: string]: any };
    /** This will always be the same between cart and checkout. */
    readonly responseCartCurrency: {
      /** ISO-4217 currency code. (See: http://en.wikipedia.org/wiki/ISO_4217.) */
      readonly code?: string;
    } & { readonly [key: string]: any };
    readonly responseCartLineItems: {
      readonly customItems?: readonly components["schemas"]["responseCartLineItemsCustomItems"][];
      /** Array of `ItemDigital` objects. */
      readonly digitalItems?: readonly components["schemas"]["responseCartLineItemsDigitalItems"][];
      /** Array of `ItemGiftCertificate` objects. */
      readonly giftCertificates?: readonly components["schemas"]["responseCartLineItemsGiftCertificates"][];
      /** Array of `ItemPhysical` objects. */
      readonly physicalItems?: readonly components["schemas"]["responseCartLineItemsItemsPhysicalItemsItems"][];
    } & { readonly [key: string]: any };
    /**
     * **Read Only**
     *
     * This will return in the Cart Response if the Cart was created using the [Server to Server Cart API](/api-reference/cart-checkout/server-server-cart-api). A custom item can only be added to a cart using the Server to Server API.
     */
    readonly responseCartLineItemsCustomItems: {
      readonly extendedListPrice?: number;
      /** Id of the custom item */
      readonly id?: string;
      /** Price of the item. With or without tax depending on your stores set up. */
      readonly listPrice?: number;
      /** Item name */
      readonly name?: string;
      readonly quantity?: number;
      /** Custom item sku */
      readonly sku?: string;
    } & { readonly [key: string]: any };
    readonly responseCartLineItemsDigitalItems: components["schemas"]["responseCartLineItemsDigitalItemsAllOf0"] & {
      readonly [key: string]: any;
    };
    readonly responseCartLineItemsDigitalItemsAllOf0: {
      /** The list of selected options for this product. */
      readonly options?: readonly components["schemas"]["responseCartLineItemsDigitalItemsAllOf0OptionsItems"][];
      /** The products brand */
      readonly brand?: string;
      /** The total value of all coupons applied to this item. */
      readonly couponAmount?: number;
      /** The total value of all discounts applied to this item (excluding coupon). */
      readonly discountAmount?: number;
      /** List of discounts applied to this item, as an array of AppliedDiscount objects. */
      readonly discounts?: readonly components["schemas"]["responseCartLineItemsDigitalItemsAllOf0DiscountsItems"][];
      /** Item's list price multiplied by the quantity. */
      readonly extendedListPrice?: number;
      /** Item's sale price multiplied by the quantity. */
      readonly extendedSalePrice?: number;
      /** The line-item ID. */
      readonly id?: string;
      /** URL of an image of this item, accessible on the internet. */
      readonly imageUrl?: string;
      /** Whether the item is taxable. */
      readonly isTaxable?: boolean;
      /** Item's list price, as quoted by the manufacturer/distributor. */
      readonly listPrice?: number;
      /** The item's product name. */
      readonly name?: string;
      /** The product is part of a bundle such as a product pick list, then the parentId or the main product id will populate. */
      readonly parentId?: string;
      /** ID of the product. */
      readonly productId?: number;
      /** Quantity of this item. */
      readonly quantity: number;
      /** Item's price after all discounts are applied. (The final price before tax calculation.) */
      readonly salePrice?: number;
      /** SKU of the variant. */
      readonly sku?: string;
      /** The product URL. */
      readonly url?: string;
      /** ID of the variant. */
      readonly variantId?: number;
    } & { readonly [key: string]: any };
    readonly responseCartLineItemsDigitalItemsAllOf0DiscountsItems: {
      /** The discounted amount applied within a given context. */
      readonly discountedAmount?: number;
      /** ID of the applied discount. */
      readonly id?: number;
    } & { readonly [key: string]: any };
    readonly responseCartLineItemsDigitalItemsAllOf0OptionsItems: {
      /** The product option name. For example, Color or Size */
      readonly name?: string;
      /** The product option identifier. */
      readonly nameId?: number;
      /** The product option value. For example, Red or Medium */
      readonly value?: string;
      /** The product option value identifier. */
      readonly valueId?: number;
    } & { readonly [key: string]: any };
    readonly responseCartLineItemsGiftCertificates: {
      /** Value must be between 1.00 and 1,000.00 in the store's default currency. */
      readonly amount: number;
      /** ID of this gift certificate. */
      readonly id?: string;
      /** Whether or not the gift certificate is taxable. */
      readonly isTaxable?: boolean;
      /** Message that will be sent to the gift certificate's recipient. Limited to 200 characters. */
      readonly message?: string;
      /** GiftCertificate-provided name that will appear in the control panel. */
      readonly name?: string;
      readonly recipient: components["schemas"]["responseCartLineItemsGiftCertificatesRecipient"];
      readonly sender: components["schemas"]["responseCartLineItemsGiftCertificatesSender"];
      /** Currently supports `Birthday`, `Boy`, `Celebration`, `Christmas`, `General`, and `Girl`. */
      readonly theme: string;
    } & { readonly [key: string]: any };
    readonly responseCartLineItemsGiftCertificatesRecipient: {
      /** Contact's email address. */
      readonly email?: string;
      /** Contact's name. */
      readonly name?: string;
    } & { readonly [key: string]: any };
    readonly responseCartLineItemsGiftCertificatesSender: {
      /** Contact's email address. */
      readonly email?: string;
      /** Contact's name. */
      readonly name?: string;
    } & { readonly [key: string]: any };
    readonly responseCartLineItemsItemsPhysicalItemsItems: components["schemas"]["responseCartBaseItem"] &
      components["schemas"]["responseCartLineItemsItemsPhysicalItemsItemsAllOf1"] & {
        readonly [key: string]: any;
      };
    readonly responseCartBaseItem: {
      /** The list of selected options for this product. */
      readonly options?: readonly components["schemas"]["responseCartLineItemsItemsPhysicalItemsItemsAllOf0OptionsItems"][];
      /** The products brand */
      readonly brand?: string;
      /** The total value of all coupons applied to this item. */
      readonly couponAmount?: number;
      /** The total value of all discounts applied to this item (excluding coupon). */
      readonly discountAmount?: number;
      readonly discounts?: components["schemas"]["responseCartDiscounts"];
      /** Item's list price multiplied by the quantity. */
      readonly extendedListPrice?: number;
      /** Item's sale price multiplied by the quantity. */
      readonly extendedSalePrice?: number;
      /** The line-item ID. */
      readonly id?: string;
      /** URL of an image of this item, accessible on the internet. */
      readonly imageUrl?: string;
      /** Whether the item is taxable. */
      readonly isTaxable?: boolean;
      /** The net item price before discounts and coupons. It is based on the product default price or sale price (if set) configured in BigCommerce Admin. */
      readonly listPrice?: number;
      /** The item's product name. */
      readonly name?: string;
      /** The product is part of a bundle such as a product pick list, then the parentId or the main product id will populate. */
      readonly parentId?: number;
      /** ID of the product. */
      readonly productId?: number;
      /** Quantity of this item. */
      readonly quantity: number;
      /** Item's price after all discounts are applied. (The final price before tax calculation.) */
      readonly salePrice?: number;
      /** SKU of the variant. */
      readonly sku?: string;
      /** The product URL. */
      readonly url?: string;
      /** ID of the variant. */
      readonly variantId?: number;
    } & { readonly [key: string]: any };
    readonly responseCartLineItemsItemsPhysicalItemsItemsAllOf0OptionsItems: {
      /** The product option name. For example, Color or Size */
      readonly name?: string;
      /** The product option identifier. */
      readonly nameId?: number;
      /** The product option value. For example, Red or Medium */
      readonly value?: string;
      /** The product option value identifier. */
      readonly valueId?: number;
    } & { readonly [key: string]: any };
    readonly responseCartLineItemsItemsPhysicalItemsItemsAllOf1: {
      readonly giftWrapping?: components["schemas"]["responseCartLineItemsPhysicalItemGiftWrapping"];
      /** Whether this item requires shipping to a physical address. */
      readonly isShippingRequired?: boolean;
    } & { readonly [key: string]: any };
    readonly requestCartPostLineItem: (Partial<
      {
        /** ID of the product. */
        readonly productId: number;
        /** Quantity of this item. */
        readonly quantity: number;
      } & { readonly [key: string]: any }
    > &
      Partial<
        {
          /** ID of the product. */
          readonly productId: number;
          /** Quantity of this item. */
          readonly quantity: number;
          /** ID of the variant. */
          readonly variantId: number;
        } & { readonly [key: string]: any }
      > &
      Partial<
        {
          /** ID of the product. */
          readonly productId: number;
          /** Quantity of this item. */
          readonly quantity: number;
          readonly optionSelections: readonly (Partial<
            {
              /** ID of the option. */
              readonly optionId?: number;
              /** Value of the option. */
              readonly optionValue?: (
                | string
                | number
                | ({
                    readonly month?: string;
                    readonly day?: string;
                    readonly year?: string;
                  } & { readonly [key: string]: any })
              ) & { readonly [key: string]: any };
            } & { readonly [key: string]: any }
          > & { readonly [key: string]: any })[];
        } & { readonly [key: string]: any }
      >) & { readonly [key: string]: any };
    readonly requestLineItemGiftCertificateRecipient: {
      /** Contact's email address. */
      readonly email?: string;
      /** Contact's name. */
      readonly name?: string;
    } & { readonly [key: string]: any };
    readonly requestLineItemGiftCertificateSender: {
      /** Contact's email address. */
      readonly email?: string;
      /** Contact's name. */
      readonly name?: string;
    } & { readonly [key: string]: any };
  };
  readonly responses: {
    /** Post Carts Response */
    readonly postCarts: {
      readonly content: {
        readonly "application/json": components["schemas"]["responseCart"];
      };
    };
    readonly postCartsItems: {
      readonly content: {
        readonly "application/json": components["schemas"]["responseCart"];
      };
    };
    readonly putCartsItems: {
      readonly content: {
        readonly "application/json": components["schemas"]["responseCart"];
      };
    };
    readonly getCarts: {
      readonly content: {
        readonly "application/json": readonly components["schemas"]["responseCart"][];
      };
    };
    readonly deleteCartsItems: {
      readonly content: {
        readonly "application/json": components["schemas"]["responseCart"];
      };
    };
    readonly deleteCarts: {
      readonly content: {
        readonly "application/json": components["schemas"]["responseCart"];
      };
    };
  };
  readonly parameters: {
    /**
     * To return product options add one of the following include:
     *
     * `lineItems.physicalItems.options`: The Cart returns an abbreviated result. Use this to return physical items product options. Can also be used in a /POST to have the extended Cart object return.
     *
     * `lineItems.digitalItems.options`:  The Cart returns an abbreviated result. Use this to return digital items product options.  Can also be used in a /POST to have the extended Cart object return.
     *
     * `lineItems.digitalItems.options,lineItems.physicalItems.options`:  The Cart returns an abbreviated result. Use this to return digital and physical options. Can also be used in a /POST to have the extended Cart object return.
     */
    readonly "lineItems.options": readonly (
      | "lineItems.physicalItems.options"
      | "lineItems.digitalItems.options"
    )[];
    /** Include product options in specified line item types. */
    readonly include: readonly (
      | "lineItems.physicalItems.options"
      | "lineItems.digitalItems.options"
    )[];
  };
}

export interface operations {
  /**
   * Returns a *Cart*.
   *
   * <div class="HubBlock--callout">
   * <div class="CalloutBlock--info">
   * <div class="HubBlock-content">
   *
   * > ### Note
   * > The Send a Test Request feature is not currently supported for this endpoint.
   *
   * </div>
   * </div>
   * </div>
   */
  readonly getACart: {
    readonly parameters: {
      readonly query: {
        /** Include product options in specified line item types. */
        readonly include?: components["parameters"]["include"];
      };
    };
    readonly responses: {
      readonly 200: components["responses"]["getCarts"];
    };
  };
  /**
   * Creates a *Cart*.
   *
   * <div class="HubBlock--callout">
   * <div class="CalloutBlock--info">
   * <div class="HubBlock-content">
   *
   * > ### Note
   * > The Send a Test Request feature is not currently supported for this endpoint.
   *
   * </div>
   * </div>
   * </div>
   */
  readonly createACart: {
    readonly parameters: {
      readonly query: {
        /** Include product options in specified line item types. */
        readonly include?: components["parameters"]["include"];
      };
    };
    readonly responses: {
      readonly 200: components["responses"]["postCarts"];
    };
    readonly requestBody: {
      readonly content: {
        readonly "application/json": components["schemas"]["requestCart"];
      };
    };
  };
  /**
   * Deletes a *Cart*. Once a *Cart* has been deleted it can not be recovered.
   *
   * <div class="HubBlock--callout">
   * <div class="CalloutBlock--info">
   * <div class="HubBlock-content">
   *
   * > ### Note
   * > The Send a Test Request feature is not currently supported for this endpoint.
   *
   * </div>
   * </div>
   * </div>
   */
  readonly deleteACart: {
    readonly parameters: {
      readonly path: {
        /** This cart's unique ID. */
        readonly cartId: string;
      };
    };
    readonly responses: {
      readonly 204: never;
    };
  };
  /**
   * Adds a line items to the *Cart*.
   *
   * <div class="HubBlock--callout">
   * <div class="CalloutBlock--info">
   * <div class="HubBlock-content">
   *
   * > ### Note
   * > The Send a Test Request feature is not currently supported for this endpoint.
   *
   * </div>
   * </div>
   * </div>
   */
  readonly addCartLineItem: {
    readonly parameters: {
      readonly path: {
        /** This cart's unique ID. */
        readonly cartId: string;
      };
      readonly query: {
        /**
         * To return product options add one of the following include:
         *
         * `lineItems.physicalItems.options`: The Cart returns an abbreviated result. Use this to return physical items product options. Can also be used in a /POST to have the extended Cart object return.
         *
         * `lineItems.digitalItems.options`:  The Cart returns an abbreviated result. Use this to return digital items product options.  Can also be used in a /POST to have the extended Cart object return.
         *
         * `lineItems.digitalItems.options,lineItems.physicalItems.options`:  The Cart returns an abbreviated result. Use this to return digital and physical options. Can also be used in a /POST to have the extended Cart object return.
         */
        readonly include?: readonly (
          | "lineItems.physicalItems.options"
          | "lineItems.digitalItems.options"
        )[];
      };
    };
    readonly responses: {
      readonly 200: components["responses"]["postCartsItems"];
    };
    readonly requestBody: {
      readonly content: {
        readonly "application/json": components["schemas"]["LineItemsRequest"];
      };
    };
  };
  /**
   * Updates a *Cart* line item. Updates an existing, single line item quantity and the price of custom items in a cart.
   *
   * If a modified product or variant needs to be changed or updated, you can remove and re-add the product to the cart with the correct variants using the [Delete Cart Line Item](https://developer.bigcommerce.com/api-reference/storefront/carts/cart-items/deletecartlineitem) and the [Add Cart Line Items](https://developer.bigcommerce.com/api-reference/storefront/carts/cart-items/addcartlineitem) endpoints.
   *
   *
   * <div class="HubBlock--callout">
   * <div class="CalloutBlock--info">
   * <div class="HubBlock-content">
   *
   * > ### Note
   * > The Send a Test Request feature is not currently supported for this endpoint.
   *
   * </div>
   * </div>
   * </div>
   */
  readonly updateCartLineItem: {
    readonly parameters: {
      readonly path: {
        /** This cart's unique ID. */
        readonly cartId: string;
        /** This item's ID. */
        readonly itemId: string;
      };
      readonly query: {
        /**
         * To return product options add one of the following include:
         *
         * `lineItems.physicalItems.options`: The Cart returns an abbreviated result. Use this to return physical items product options. Can also be used in a /POST to have the extended Cart object return.
         *
         * `lineItems.digitalItems.options`:  The Cart returns an abbreviated result. Use this to return digital items product options.  Can also be used in a /POST to have the extended Cart object return.
         *
         * `lineItems.digitalItems.options,lineItems.physicalItems.options`:  The Cart returns an abbreviated result. Use this to return digital and physical options. Can also be used in a /POST to have the extended Cart object return.
         */
        readonly include?: readonly (
          | "lineItems.physicalItems.options"
          | "lineItems.digitalItems.options"
        )[];
      };
    };
    readonly responses: {
      readonly 200: components["responses"]["putCartsItems"];
    };
    readonly requestBody: {
      readonly content: {
        readonly "application/json": components["schemas"]["LineItemsRequest"];
      };
    };
  };
  /**
   * Deletes a *Cart* line item.
   *
   * Removing the last `line_item` in the *Cart* deletes the *Cart*.
   *
   * <div class="HubBlock--callout">
   * <div class="CalloutBlock--info">
   * <div class="HubBlock-content">
   *
   * > ### Note
   * > The Send a Test Request feature is not currently supported for this endpoint.
   *
   * </div>
   * </div>
   * </div>
   */
  readonly deleteCartLineItem: {
    readonly parameters: {
      readonly path: {
        /** This cart's unique ID. */
        readonly cartId: string;
        /** The ID of the item to delete. */
        readonly itemId: string;
      };
      readonly query: {
        /**
         * To return product options add one of the following include:
         *
         * `lineItems.physicalItems.options`: The Cart returns an abbreviated result. Use this to return physical items product options. Can also be used in a /POST to have the extended Cart object return.
         *
         * `lineItems.digitalItems.options`:  The Cart returns an abbreviated result. Use this to return digital items product options.  Can also be used in a /POST to have the extended Cart object return.
         *
         * `lineItems.digitalItems.options,lineItems.physicalItems.options`:  The Cart returns an abbreviated result. Use this to return digital and physical options. Can also be used in a /POST to have the extended Cart object return.
         */
        readonly include?: readonly (
          | "lineItems.physicalItems.options"
          | "lineItems.digitalItems.options"
        )[];
      };
    };
    readonly responses: {
      readonly 200: components["responses"]["deleteCartsItems"];
    };
  };
}
