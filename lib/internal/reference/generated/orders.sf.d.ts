/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */
export interface paths {
    readonly "/orders/{orderId}": {
        /**
         * Returns *Order* data. This will return order data immediately after an order is placed on the storefront.
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
        readonly get: operations["OrdersByOrderIdGet"];
    };
}
export interface definitions {
    /** Response data container for Order endpoints (`POST /order` and `POST /order/{orderId}`). */
    readonly Data: {
        readonly order?: definitions["Order"];
    };
    readonly Order: {
        readonly orderId?: number;
        /** The Id of cart that was converted to order. */
        readonly cartId?: string;
        readonly currency?: definitions["Currency"];
        /** Whether this item is taxable. */
        readonly isTaxIncluded?: boolean;
        /** Cost of cart's contents, before applying discounts. */
        readonly baseAmount?: number;
        /** Discounted amount. */
        readonly discountAmount?: number;
        /** Gift wrapping for all items, including or excluding tax. */
        readonly giftWrappingCostTotal?: number;
        /** Sum of line-items amounts, minus cart-level discounts and coupons. This amount includes taxes (where applicable). */
        readonly orderAmount?: number;
        /** Order amount represented in integer. Eg. 1234 for $12.34 */
        readonly orderAmountAsInteger?: number;
        /** Array of `AppliedCoupon` objects applied to this cart. */
        readonly coupons?: readonly definitions["AppliedCoupon"][];
        /** Array of `LineItem` objects. */
        readonly lineItems?: readonly definitions["OrderLineItem"][];
        readonly customerId?: string;
        readonly billingAddress?: definitions["AddressProperties"];
        readonly status?: definitions["Status"];
        /** Specifies whether this order has at least one digital item. */
        readonly hasDigitalItems?: boolean;
        /** Specifies whether this order is fully paid, so that digital items can be downloaded. */
        readonly isDownloadable?: boolean;
        /** Specifies whether this order is complete and ready to be taken to the order confirmation page. */
        readonly isComplete?: boolean;
        /** Shopper's provided message for the order */
        readonly customerMessage?: string;
        readonly shippingCostTotal?: number;
        readonly shippingCostBeforeDiscount?: number;
        readonly handlingCostTotal?: number;
        readonly customerCanBeCreated?: boolean;
        readonly taxes?: readonly {
            readonly name?: string;
            readonly amount?: number;
        }[];
        readonly taxTotal?: number;
        /** Id of the channel which the order belongs to. */
        readonly channelId?: number;
    };
    /** This will always be the same between cart and checkout. */
    readonly Currency: {
        /** The currency name. */
        readonly name?: string;
        /** ISO-4217 currency code. (See: http://en.wikipedia.org/wiki/ISO_4217.) */
        readonly code?: string;
        /** The currency symbol. */
        readonly symbol?: string;
        /** Number of decimal places for the currency. For example, USD currency has two decimal places. */
        readonly decimalPlaces?: number;
    };
    readonly AppliedCoupon: {
        /** The coupon ID. */
        readonly id?: string;
        /** the coupon code */
        readonly code: string;
        /** The coupon title based on different types provided in control panel section */
        readonly displayName?: string;
        /** Key name to identify the type of coupon. */
        readonly couponType?: string;
        /** The discounted amount applied within a given context. */
        readonly discountedAmount?: number;
    };
    readonly AppliedDiscount: {
        /** The name provided by the merchant. */
        readonly name?: string;
        /** The discounted amount applied within a given context. */
        readonly discountedAmount?: number;
    };
    readonly OrderLineItem: {
        /** Array of `ItemPhysical` objects. */
        readonly physicalItems: readonly definitions["ItemPhysical"][];
        /** Array of `ItemDigital` objects. */
        readonly digitalItems: readonly definitions["OrderItemDigital"][];
        /** Array of `ItemGiftCertificate` objects. */
        readonly giftCertificate: readonly definitions["OrderItemGiftCertificate"][];
    };
    readonly ItemPhysical: {
        /** The line-item ID. */
        readonly id?: string;
        /** Bundled items will have their parent's item Id. */
        readonly parentId?: string;
        /** ID of the variant. */
        readonly variantId?: number;
        /** ID of the product. */
        readonly productId?: number;
        /** SKU of the variant. */
        readonly sku?: string;
        /** The item's product name. */
        readonly name?: string;
        /** The product URL. */
        readonly url?: string;
        /** Quantity of this item. */
        readonly quantity: number;
        /** Whether the item is taxable. */
        readonly isTaxable?: boolean;
        /** URL of an image of this item, accessible on the internet. */
        readonly imageUrl?: string;
        /** List of discounts applied to this item, as an array of AppliedDiscount objects. */
        readonly discounts?: readonly definitions["AppliedDiscount"][];
        /** The total value of all discounts applied to this item (excluding coupon). */
        readonly discountAmount?: number;
        /** The total value of all coupons applied to this item. */
        readonly couponAmount?: number;
        /** Item's list price, as quoted by the manufacturer/distributor. */
        readonly listPrice?: number;
        /** Item's price after all discounts are applied. (The final price before tax calculation.) */
        readonly salePrice?: number;
        /** Item's list price multiplied by the quantity. */
        readonly extendedListPrice?: number;
        /** Item's sale price multiplied by the quantity. */
        readonly extendedSalePrice?: number;
        /** the product type - physical or digital */
        readonly type?: string;
        /** Whether this item has been added automatically by a promotion. */
        readonly addedByPromotion?: boolean;
        /** Whether this item requires shipping to a physical address. */
        readonly isShippingRequired?: boolean;
        readonly giftWrapping?: definitions["GiftWrapping"];
        /** Categories the item belongs to. */
        readonly categories?: readonly {
            readonly [key: string]: any;
        }[];
    };
    readonly GiftWrapping: {
        readonly name?: string;
        readonly message?: string;
        readonly amount?: number;
    };
    readonly OrderItemDigital: {
        /** The line-item ID. */
        readonly id?: string;
        /** Bundled items will have their parent's item Id. */
        readonly parentId?: string;
        /** ID of the variant. */
        readonly variantId?: number;
        /** ID of the product. */
        readonly productId?: number;
        /** SKU of the variant. */
        readonly sku?: string;
        /** The item's product name. */
        readonly name?: string;
        /** The product URL. */
        readonly url?: string;
        /** Quantity of this item. */
        readonly quantity: number;
        /** Whether the item is taxable. */
        readonly isTaxable?: boolean;
        /** URL of an image of this item, accessible on the internet. */
        readonly imageUrl?: string;
        /** List of discounts applied to this item, as an array of AppliedDiscount objects. */
        readonly discounts?: readonly definitions["AppliedDiscount"][];
        /** The total value of all discounts applied to this item (excluding coupon). */
        readonly discountAmount?: number;
        /** The total value of all coupons applied to this item. */
        readonly couponAmount?: number;
        /** Item's list price, as quoted by the manufacturer/distributor. */
        readonly listPrice?: number;
        /** Item's price after all discounts are applied. (The final price before tax calculation.) */
        readonly salePrice?: number;
        /** Item's list price multiplied by the quantity. */
        readonly extendedListPrice?: number;
        /** Item's sale price multiplied by the quantity. */
        readonly extendedSalePrice?: number;
        /** the product type - physical or digital */
        readonly type?: string;
        /** URLs to download all product files. */
        readonly downloadFileUrls?: readonly string[];
        /** The URL for the combined downloads page. */
        readonly downloadPageUrl?: string;
        /** Combined download size, in human-readable style. E.g.: `30MB`. */
        readonly downloadSize?: string;
        /** Categories the item belongs to. */
        readonly categories?: readonly {
            readonly [key: string]: any;
        }[];
    };
    readonly OrderItemGiftCertificate: {
        /** The item's product name. */
        readonly name?: string;
        /** Quantity of this item. */
        readonly quantity?: number;
        /** Whether the item is taxable. */
        readonly isTaxable?: boolean;
        /** Price of the item */
        readonly amount?: number;
        /** Explicitly specifying the gift certificate type */
        readonly type?: string;
    };
    readonly AddressResponse: definitions["AddressProperties"] & {
        readonly id?: string;
    };
    readonly AddressProperties: {
        readonly firstName?: string;
        readonly lastName?: string;
        readonly email?: string;
        readonly company?: string;
        readonly address1?: string;
        readonly address2?: string;
        readonly city?: string;
        /** Represents state or province. */
        readonly stateOrProvince?: string;
        readonly stateOrProvinceCode?: string;
        readonly country?: string;
        /** ISO 3166-1 alpha-2 country code. (See: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) */
        readonly countryCode: string;
        readonly postalCode?: string;
        readonly phone?: string;
        readonly customFields?: readonly definitions["CustomField"][];
    };
    readonly CustomField: {
        readonly fieldId?: string;
        /** This can also be an array for fields that need to support list of values (e.g., a set of check boxes.) */
        readonly fieldValue?: string;
    };
    /** Order status. */
    readonly Status: "INCOMPLETE" | "PENDING" | "SHIPPED" | "PARTIALLY_SHIPPED" | "REFUNDED" | "CANCELLED" | "DECLINED" | "AWAITING_PAYMENT" | "AWAITING_PICKUP" | "AWAITING_SHIPMENT" | "COMPLETED" | "AWAITING_FULFILLMENT" | "MANUAL_VERIFICATION_REQUIRED" | "DISPUTED" | "PARTIALLY_REFUNDED";
    readonly BaseItem: {
        /** The line-item ID. */
        readonly id?: string;
        /** Bundled items will have their parent's item Id. */
        readonly parentId?: string;
        /** ID of the variant. */
        readonly variantId?: number;
        /** ID of the product. */
        readonly productId?: number;
        /** SKU of the variant. */
        readonly sku?: string;
        /** The item's product name. */
        readonly name?: string;
        /** The product URL. */
        readonly url?: string;
        /** Quantity of this item. */
        readonly quantity: number;
        /** Whether the item is taxable. */
        readonly isTaxable?: boolean;
        /** URL of an image of this item, accessible on the internet. */
        readonly imageUrl?: string;
        /** List of discounts applied to this item, as an array of AppliedDiscount objects. */
        readonly discounts?: readonly definitions["AppliedDiscount"][];
        /** The total value of all discounts applied to this item (excluding coupon). */
        readonly discountAmount?: number;
        /** The total value of all coupons applied to this item. */
        readonly couponAmount?: number;
        /** Item's list price, as quoted by the manufacturer/distributor. */
        readonly listPrice?: number;
        /** Item's price after all discounts are applied. (The final price before tax calculation.) */
        readonly salePrice?: number;
        /** Item's list price multiplied by the quantity. */
        readonly extendedListPrice?: number;
        /** Item's sale price multiplied by the quantity. */
        readonly extendedSalePrice?: number;
        /** the product type - physical or digital */
        readonly type?: string;
    };
    readonly order_Nate: {
        readonly orderId?: number;
        readonly cartId?: string;
        readonly currency?: {
            readonly name?: string;
            readonly code?: string;
            readonly symbol?: string;
            readonly decimalPlaces?: number;
        };
        readonly isTaxIncluded?: boolean;
        readonly baseAmount?: number;
        readonly discountAmount?: number;
        readonly orderAmount?: number;
        readonly orderAmountAsInteger?: number;
        readonly shippingCostTotal?: number;
        readonly shippingCostBeforeDiscount?: number;
        readonly handlingCostTotal?: number;
        readonly coupons?: readonly {
            readonly [key: string]: any;
        }[];
        readonly lineItems?: {
            readonly physicalItems?: readonly {
                readonly id?: number;
                readonly productId?: number;
                readonly name?: string;
                readonly sku?: string;
                readonly quantity?: number;
                readonly isTaxable?: boolean;
                readonly imageUrl?: string;
                readonly discounts?: readonly {
                    readonly [key: string]: any;
                }[];
                readonly discountAmount?: number;
                readonly listPrice?: number;
                readonly salePrice?: number;
                readonly extendedListPrice?: number;
                readonly extendedSalePrice?: number;
                readonly extendedComparisonPrice?: number;
                readonly categories?: readonly {
                    readonly [key: string]: any;
                }[];
                readonly type?: string;
                readonly variantId?: number;
            }[];
            readonly digitalItems?: readonly {
                readonly [key: string]: any;
            }[];
            readonly giftCertificates?: readonly {
                readonly [key: string]: any;
            }[];
        };
        readonly customerId?: number;
        readonly billingAddress?: {
            readonly firstName?: string;
            readonly lastName?: string;
            readonly email?: string;
            readonly company?: string;
            readonly address1?: string;
            readonly address2?: string;
            readonly city?: string;
            readonly stateOrProvince?: string;
            readonly stateOrProvinceCode?: string;
            readonly country?: string;
            readonly countryCode?: string;
            readonly postalCode?: string;
            readonly phone?: string;
            readonly customFields?: readonly {
                readonly [key: string]: any;
            }[];
        };
        readonly status?: string;
        readonly customerCanBeCreated?: boolean;
        readonly hasDigitalItems?: boolean;
        readonly isDownloadable?: boolean;
        readonly isComplete?: boolean;
        readonly customerMessage?: string;
        readonly taxes?: readonly {
            readonly name?: string;
            readonly amount?: number;
        }[];
        readonly taxTotal?: number;
    };
}
export interface responses {
    readonly order_Resp: {
        readonly schema: definitions["Order"];
    };
}
export interface operations {
    /**
     * Returns *Order* data. This will return order data immediately after an order is placed on the storefront.
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
    readonly OrdersByOrderIdGet: {
        readonly parameters: {
            readonly path: {
                /** ID of an Order. */
                readonly orderId: number;
            };
        };
        readonly responses: {
            readonly 200: responses["order_Resp"];
        };
    };
}
