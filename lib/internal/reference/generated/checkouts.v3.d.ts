/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */
export interface paths {
    readonly "/checkouts/{checkoutId}": {
        /**
         * Returns a *Checkout*.
         *
         * **Notes**
         *
         * The cart ID and checkout ID are the same.
         */
        readonly get: operations["CheckoutsByCheckoutIdGet"];
    };
    readonly "/checkouts/{checkoutId}/billing-address": {
        /**
         * Adds a billing address to an existing *Checkout*.
         *
         * **Required Fields**
         * * email
         * * country_code
         */
        readonly post: operations["CheckoutsBillingAddressByCheckoutIdPost"];
    };
    readonly "/checkouts/{checkoutId}/billing-address/{addressId}": {
        /** Updates an existing billing address on *Checkout*. */
        readonly put: operations["CheckoutsBillingAddressByCheckoutIdAndAddressIdPut"];
    };
    readonly "/checkouts/{checkoutId}/consignments": {
        /**
         * Adds a new *Consignment* to *Checkout*.
         *
         *
         * There are two steps to add a new shipping address and shipping options with line items.
         * * Add a new Consignment to Checkout.
         * 	* Send a POST to Consignments with each shipping address and line items IDs. Each address can have its own line item IDs.
         *
         * * [Update the Consignment](https://developer.bigcommerce.com/api-reference/cart-checkout/server-server-checkout-api/checkout-consignments/checkoutsconsignmentsbycheckoutidandconsignmentidput) with Shipping Options.
         *
         *
         * **Required Fields**
         * * shipping_address
         * * line_items
         */
        readonly post: operations["CheckoutsConsignmentsByCheckoutIdPost"];
    };
    readonly "/checkouts/{checkoutId}/consignments/{consignmentId}": {
        /**
         * Updates an existing consignment. Shipping address, line item IDs or the shipping option ID can be updated using this endpoint.
         *
         * There are two steps to add a new shipping address and shipping options with line items.
         * 1. Add a [new Consignment](/api-reference/cart-checkout/server-server-checkout-api/checkout-consignments/checkoutsconsignmentsbycheckoutidpost) to Checkout.
         * 2. Update the Consignment with Shipping Options.
         * 	1. Update each *Consignment* `shipping_option_id` (shipping address and line items) with the `available_shipping_option > id` from Step One.
         *
         *
         * **Required Fields**
         * * shipping_option_id
         */
        readonly put: operations["CheckoutsConsignmentsByCheckoutIdAndConsignmentIdPut"];
        /**
         * Removes an existing consignment from checkout.
         *
         * Removing the last consigment will remove the Cart from the customer it is assigned to. Create a new rediret url for the customer to access it again.
         */
        readonly delete: operations["CheckoutsConsignmentsByCheckoutIdAndConsignmentIdDelete"];
    };
    readonly "/checkouts/{checkoutId}/coupons": {
        /**
         * Adds a *Coupon Code* to *Checkout*.
         *
         * **Required Fields**
         * * coupon_code
         */
        readonly post: operations["CheckoutsCouponsByCheckoutIdPost"];
    };
    readonly "/checkouts/{checkoutId}/coupons/{couponCode}": {
        /** Deletes a *Coupon Code* from *Checkout*. */
        readonly delete: operations["CheckoutsCouponsByCheckoutIdAndCouponCodeDelete"];
    };
    readonly "/checkouts/{checkoutId}/orders": {
        /**
         * Creates an order.
         *
         * ## Usage notes
         * * Orders created will be set to incomplete order status.
         * * You can create as many orders from the same order(cart) as you want.
         * * Order duplication creates the same order with a new order number with the incomplete status.
         * * Once the order is paid, then the cart is deleted.
         * * Cart deletion occurs if you are using BigCommerce to accept payments on orders.
         */
        readonly post: operations["createAnOrder"];
        readonly parameters: {
            readonly path: {
                readonly checkoutId: string;
            };
        };
    };
}
export interface definitions {
    readonly Checkout: {
        readonly id?: string;
        readonly cart?: {
            /** Cart ID, provided after creating a cart with a POST. */
            readonly id?: string;
            /** ID of the customer to which the cart belongs. */
            readonly customer_id?: number;
            /** The cart's email. This is the same email that is used in the billing address */
            readonly email?: string;
            readonly currency?: {
                /** ISO-4217 currency code. (See: http://en.wikipedia.org/wiki/ISO_4217.) */
                readonly code?: string;
            };
            /** Cost of cart's contents, before applying discounts. */
            readonly base_amount?: number;
            /** ID of channel */
            readonly channel_id?: number;
            /** Discounted amount. */
            readonly discount_amount?: number;
            /** Sum of line-items amounts, minus cart-level discounts and coupons including tax */
            readonly cart_amount_inc_tax?: number;
            /** Sum of line-items amounts, minus cart-level discounts and coupons excluding tax */
            readonly cart_amount_ex_tax?: number;
            readonly coupons?: readonly {
                /** the coupon code */
                readonly code: string;
                /** The coupon ID. */
                readonly id?: number;
                /** Key name to identify the type of coupon. */
                readonly coupon_type?: string;
                /** The discounted amount applied within a given context. */
                readonly discounted_amount?: number;
            }[];
            readonly discounts?: readonly {
                /** ID of the applied discount. */
                readonly id?: string;
                /** The discounted amount applied within a given context. */
                readonly discounted_amount?: number;
            }[];
            readonly line_items?: {
                readonly physical_items: readonly {
                    readonly quantity: number;
                    /** The line-item ID. */
                    readonly id?: string;
                    readonly variant_id?: number;
                    readonly product_id?: number;
                    readonly sku?: string;
                    /** The item's product name. */
                    readonly name?: string;
                    /** The product URL. */
                    readonly url?: string;
                    readonly is_taxable?: boolean;
                    readonly image_url?: string;
                    readonly discounts?: readonly {
                        /** ID of the applied discount. */
                        readonly id?: string;
                        /** The discounted amount applied within a given context. */
                        readonly discounted_amount?: number;
                    }[];
                    readonly coupons?: number;
                    /** The total value of all discounts applied to this item. */
                    readonly discount_amount?: number;
                    /** The total value of all coupons applied to this item. */
                    readonly coupon_amount?: number;
                    /** Item's list price, as quoted by the manufacturer/distributor. */
                    readonly list_price?: number;
                    /** Item's price after all discounts are applied. (The final price before tax calculation.) */
                    readonly sale_price?: number;
                    /** Item's list price multiplied by the quantity. */
                    readonly extended_list_price?: number;
                    /** Item's sale price multiplied by the quantity. */
                    readonly extended_sale_price?: number;
                    readonly is_require_shipping?: boolean;
                    readonly is_mutable?: boolean;
                    readonly parent_id?: number;
                    readonly gift_wrapping?: {
                        readonly name?: string;
                        readonly message?: string;
                        readonly amount?: number;
                        readonly amount_as_integer?: number;
                    };
                }[];
                readonly digital_items: readonly {
                    readonly quantity: number;
                    /** The line-item ID. */
                    readonly id?: string;
                    readonly variant_id?: number;
                    readonly parent_id?: number;
                    readonly product_id?: number;
                    readonly sku?: string;
                    /** The item's product name. */
                    readonly name?: string;
                    /** The product URL. */
                    readonly url?: string;
                    readonly is_mutable?: boolean;
                    readonly is_require_shipping?: boolean;
                    readonly is_taxable?: boolean;
                    readonly image_url?: string;
                    readonly discounts?: readonly {
                        /** ID of the applied discount. */
                        readonly id?: string;
                        /** The discounted amount applied within a given context. */
                        readonly discounted_amount?: number;
                    }[];
                    readonly coupons?: number;
                    /** The total value of all discounts applied to this item. */
                    readonly discount_amount?: number;
                    /** The total value of all coupons applied to this item. */
                    readonly coupon_amount?: number;
                    /** Item's list price, as quoted by the manufacturer/distributor. */
                    readonly list_price?: number;
                    /** Item's price after all discounts are applied. (The final price before tax calculation.) */
                    readonly sale_price?: number;
                    /** Item's list price multiplied by the quantity. */
                    readonly extended_list_price?: number;
                    /** Item's sale price multiplied by the quantity. */
                    readonly extended_sale_price?: number;
                }[];
                readonly gift_certificates: readonly {
                    /** Currently supports `Birthday`, `Boy`, `Celebration`, `Christmas`, `General`, and `Girl`. */
                    readonly theme: string;
                    /** Value must be between 1.00 and 1,000.00 in the store's default currency. */
                    readonly amount: number;
                    readonly sender: {
                        readonly name?: string;
                        readonly email?: string;
                    };
                    readonly recipient: {
                        readonly name?: string;
                        readonly email?: string;
                    };
                    readonly id?: string;
                    /** GiftCertificate-provided name that will appear in the control panel. */
                    readonly name?: string;
                    readonly taxable?: boolean;
                    /** Limited to 200 characters. */
                    readonly message?: string;
                }[];
                readonly custom_items?: readonly {
                    readonly quantity: number;
                    readonly id?: string;
                    readonly extended_list_price?: number;
                    readonly list_price?: number;
                    readonly sku?: string;
                    readonly name?: string;
                    readonly image_url?: string;
                }[];
            };
            /** Time when the cart was created. */
            readonly created_time?: string;
            /** Time when the cart was last updated. */
            readonly updated_time?: string;
        };
        readonly billing_address?: {
            readonly first_name?: string;
            readonly last_name?: string;
            readonly email: string;
            readonly company?: string;
            readonly address1?: string;
            readonly address2?: string;
            readonly city?: string;
            /** Represents state or province. */
            readonly state_or_province?: string;
            readonly state_or_province_code?: string;
            readonly country_code: string;
            readonly postal_code?: string;
            readonly phone?: string;
            readonly custom_fields?: readonly {
                readonly field_id?: string;
                /** This can also be an array for fields that need to support list of values (e.g., a set of check boxes.) */
                readonly field_value?: string;
            }[];
        } & {
            readonly id?: string;
        };
        readonly consignments?: readonly {
            readonly id?: string;
            readonly shipping_address?: {
                readonly first_name?: string;
                readonly last_name?: string;
                readonly email: string;
                readonly company?: string;
                readonly address1?: string;
                readonly address2?: string;
                readonly city?: string;
                /** Represents state or province. */
                readonly state_or_province?: string;
                readonly state_or_province_code?: string;
                readonly country_code: string;
                readonly postal_code?: string;
                readonly phone?: string;
                readonly custom_fields?: readonly {
                    readonly field_id?: string;
                    /** This can also be an array for fields that need to support list of values (e.g., a set of check boxes.) */
                    readonly field_value?: string;
                }[];
            } & {
                readonly id?: string;
            };
            /** This is available only when "include=available_shipping_options" is presented in the URL. */
            readonly available_shipping_options?: readonly {
                readonly description?: string;
                readonly id?: string;
                /** Specified the type of shipping option. Flat rate, UPS, etc., */
                readonly type?: string;
                readonly image_url?: string;
                readonly cost?: number;
                /** An estimate of the arrival time. */
                readonly transit_time?: string;
                /** ReadOnly, Field used for Shipping Provider API. */
                readonly additional_description?: string;
            }[];
            readonly selected_shipping_option?: {
                readonly description?: string;
                readonly id?: string;
                /** Specified the type of shipping option. Flat rate, UPS, etc., */
                readonly type?: string;
                readonly image_url?: string;
                readonly cost?: number;
                /** An estimate of the arrival time. */
                readonly transit_time?: string;
                /** ReadOnly, Field used for Shipping Provider API. */
                readonly additional_description?: string;
            };
            /** List of consignment discounts applied through coupons */
            readonly coupon_discounts?: readonly {
                /** Coupon code that applied this discount */
                readonly code?: string;
                readonly amount?: number;
            }[];
            /** List of consignment discounts applied through cart level discounts */
            readonly discounts?: readonly {
                /** Discount rule ID that applied this discount */
                readonly id?: string;
            }[];
            /** The shipping cost for this consignment including tax. */
            readonly shipping_cost_inc_tax?: number;
            /** The shipping cost for this consignment excluding tax. */
            readonly shipping_cost_ex_tax?: number;
            /** The handling cost of shipping for this consignment including tax. */
            readonly handling_cost_inc_tax?: number;
            /** The handling cost of shipping for this consignment excluding tax. */
            readonly handling_cost_ex_tax?: number;
            readonly line_item_ids?: readonly string[];
        }[];
        readonly taxes?: readonly {
            /** Name of the tax. */
            readonly name?: string;
            readonly amount?: number;
        }[];
        /** Coupons applied at checkout level. */
        readonly coupons?: readonly definitions["AppliedCoupon"][];
        readonly order_id?: string;
        /** Shipping cost before any discounts are applied including tax. */
        readonly shipping_cost_total_inc_tax?: number;
        /** Shipping cost before any discounts are applied excluding tax. */
        readonly shipping_cost_total_ex_tax?: number;
        /** Handling cost for all consignments including tax. */
        readonly handling_cost_total_inc_tax?: number;
        /** Handling cost for all consignments excluding tax. */
        readonly handling_cost_total_ex_tax?: number;
        readonly tax_total?: number;
        /** Subtotal of the checkout before applying item level discounts including tax. */
        readonly subtotal_inc_tax?: number;
        /** Subtotal of the checkout before applying item level discounts excluding tax. */
        readonly subtotal_ex_tax?: number;
        /** The total payable amount, before applying any store credit or gift certificate. */
        readonly grand_total?: number;
        /** Time when the cart was created. */
        readonly created_time?: string;
        /** Time when the cart was last updated. */
        readonly updated_time?: string;
        /** Shopper's message provided as details for the order to be created from this checkout. */
        readonly customer_message?: string;
    };
    readonly AppliedCoupon: {
        /** the coupon code */
        readonly code: string;
        /** The coupon ID. */
        readonly id?: number;
        /** The discounted amount applied within a given context. */
        readonly discounted_amount?: number;
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
        readonly coupon_type?: 1 | 2 | 3 | 4 | 5;
    };
    readonly AddressProperties: {
        readonly first_name?: string;
        readonly last_name?: string;
        readonly email: string;
        readonly company?: string;
        readonly address1?: string;
        readonly address2?: string;
        readonly city?: string;
        /** Represents state or province. */
        readonly state_or_province?: string;
        readonly state_or_province_code?: string;
        readonly country_code: string;
        readonly postal_code?: string;
        readonly phone?: string;
        readonly custom_fields?: readonly {
            readonly field_id?: string;
            /** This can also be an array for fields that need to support list of values (e.g., a set of check boxes.) */
            readonly field_value?: string;
        }[];
    };
    readonly CreateConsignmentRequest: {
        readonly shipping_address?: {
            readonly first_name?: string;
            readonly last_name?: string;
            readonly email: string;
            readonly company?: string;
            readonly address1?: string;
            readonly address2?: string;
            readonly city?: string;
            /** Represents state or province. */
            readonly state_or_province?: string;
            readonly state_or_province_code?: string;
            readonly country_code: string;
            readonly postal_code?: string;
            readonly phone?: string;
            readonly custom_fields?: readonly {
                readonly field_id?: string;
                /** This can also be an array for fields that need to support list of values (e.g., a set of check boxes.) */
                readonly field_value?: string;
            }[];
        };
        readonly line_items?: readonly {
            /** Corresponds to `line_items` > `id in Checkout response. */
            readonly item_id: string;
            readonly quantity: number;
        }[];
    };
    /** One or more of these three fields are mandatory. Shipping address and line items can be updated in one request. Shipping option ID has to be updated in a separate request, since changing the address or line items can invalidate the previously available shipping options. */
    readonly UpdateConsignmentRequest: {
        readonly shipping_address?: {
            readonly first_name?: string;
            readonly last_name?: string;
            readonly email: string;
            readonly company?: string;
            readonly address1?: string;
            readonly address2?: string;
            readonly city?: string;
            /** Represents state or province. */
            readonly state_or_province?: string;
            readonly state_or_province_code?: string;
            readonly country_code: string;
            readonly postal_code?: string;
            readonly phone?: string;
            readonly custom_fields?: readonly {
                readonly field_id?: string;
                /** This can also be an array for fields that need to support list of values (e.g., a set of check boxes.) */
                readonly field_value?: string;
            }[];
        };
        readonly line_items?: readonly {
            /** Corresponds to `line_items` > `id in Checkout response. */
            readonly item_id: string;
            readonly quantity: number;
        }[];
        readonly shipping_option_id?: string;
    };
    readonly CouponCodeRequest: {
        readonly coupon_code?: string;
    };
    readonly Order: {
        /** The order Id. */
        readonly id?: number;
    };
}
export interface parameters {
    /** Id of the Checkout */
    readonly checkoutId: string;
    readonly addressId: number;
    readonly consignmentId: string;
    /** The actual couponCode, not the couponId. */
    readonly couponCode: string;
    readonly Accept: string;
    readonly "Content-Type": string;
    readonly includeShippingOption: "consignments.available_shipping_options";
}
export interface responses {
    readonly CheckoutResponse: {
        readonly schema: {
            readonly data?: definitions["Checkout"];
        };
    };
    readonly order_Resp: {
        readonly schema: {
            readonly data?: definitions["Order"];
            readonly meta?: {
                readonly [key: string]: any;
            };
        };
    };
}
export interface operations {
    /**
     * Returns a *Checkout*.
     *
     * **Notes**
     *
     * The cart ID and checkout ID are the same.
     */
    readonly CheckoutsByCheckoutIdGet: {
        readonly parameters: {
            readonly path: {
                /** Id of the Checkout */
                readonly checkoutId: string;
            };
            readonly header: {
                readonly Accept: string;
                readonly "Content-Type": string;
            };
            readonly query: {
                /**
                 * * `cart.line_items.physical_items.options` - physical options
                 * * `cart.line_items.digital_items.options` - digital options
                 * * `consignments.available_shipping_options` - shipping options
                 */
                readonly include?: "cart.line_items.physical_items.options" | "cart.line_items.digital_items.options" | "consignments.available_shipping_options";
            };
        };
        readonly responses: {
            readonly 200: responses["CheckoutResponse"];
            /** When a given checkout ID is not found. */
            readonly 404: {
                readonly schema: {
                    readonly errors?: readonly {
                        readonly status?: number;
                        readonly title?: string;
                        readonly type?: string;
                        readonly detail?: string;
                    }[];
                };
            };
        };
    };
    /**
     * Adds a billing address to an existing *Checkout*.
     *
     * **Required Fields**
     * * email
     * * country_code
     */
    readonly CheckoutsBillingAddressByCheckoutIdPost: {
        readonly parameters: {
            readonly path: {
                /** Id of the Checkout */
                readonly checkoutId: string;
            };
            readonly header: {
                readonly Accept: string;
                readonly "Content-Type": string;
            };
            readonly body: {
                /** Either email or countryCode is required. */
                readonly body: definitions["AddressProperties"];
            };
        };
        readonly responses: {
            readonly 200: responses["CheckoutResponse"];
        };
    };
    /** Updates an existing billing address on *Checkout*. */
    readonly CheckoutsBillingAddressByCheckoutIdAndAddressIdPut: {
        readonly parameters: {
            readonly path: {
                /** Id of the Checkout */
                readonly checkoutId: string;
                readonly addressId: number;
            };
            readonly header: {
                readonly Accept: string;
                readonly "Content-Type": string;
            };
            readonly body: {
                readonly body: definitions["AddressProperties"];
            };
        };
        readonly responses: {
            readonly 200: responses["CheckoutResponse"];
        };
    };
    /**
     * Adds a new *Consignment* to *Checkout*.
     *
     *
     * There are two steps to add a new shipping address and shipping options with line items.
     * * Add a new Consignment to Checkout.
     * 	* Send a POST to Consignments with each shipping address and line items IDs. Each address can have its own line item IDs.
     *
     * * [Update the Consignment](https://developer.bigcommerce.com/api-reference/cart-checkout/server-server-checkout-api/checkout-consignments/checkoutsconsignmentsbycheckoutidandconsignmentidput) with Shipping Options.
     *
     *
     * **Required Fields**
     * * shipping_address
     * * line_items
     */
    readonly CheckoutsConsignmentsByCheckoutIdPost: {
        readonly parameters: {
            readonly path: {
                /** Id of the Checkout */
                readonly checkoutId: string;
            };
            readonly header: {
                readonly Accept: string;
                readonly "Content-Type": string;
            };
            readonly body: {
                readonly body: definitions["CreateConsignmentRequest"];
            };
            readonly query: {
                readonly include?: parameters["includeShippingOption"];
            };
        };
        readonly responses: {
            readonly 200: responses["CheckoutResponse"];
        };
    };
    /**
     * Updates an existing consignment. Shipping address, line item IDs or the shipping option ID can be updated using this endpoint.
     *
     * There are two steps to add a new shipping address and shipping options with line items.
     * 1. Add a [new Consignment](/api-reference/cart-checkout/server-server-checkout-api/checkout-consignments/checkoutsconsignmentsbycheckoutidpost) to Checkout.
     * 2. Update the Consignment with Shipping Options.
     * 	1. Update each *Consignment* `shipping_option_id` (shipping address and line items) with the `available_shipping_option > id` from Step One.
     *
     *
     * **Required Fields**
     * * shipping_option_id
     */
    readonly CheckoutsConsignmentsByCheckoutIdAndConsignmentIdPut: {
        readonly parameters: {
            readonly path: {
                /** Id of the Checkout */
                readonly checkoutId: string;
                readonly consignmentId: string;
            };
            readonly header: {
                readonly Accept: string;
                readonly "Content-Type": string;
            };
            readonly body: {
                readonly body: definitions["UpdateConsignmentRequest"];
            };
            readonly query: {
                /** Must be included to get available shipping options */
                readonly include?: "consignments.available_shipping_options";
            };
        };
        readonly responses: {
            readonly 200: responses["CheckoutResponse"];
        };
    };
    /**
     * Removes an existing consignment from checkout.
     *
     * Removing the last consigment will remove the Cart from the customer it is assigned to. Create a new rediret url for the customer to access it again.
     */
    readonly CheckoutsConsignmentsByCheckoutIdAndConsignmentIdDelete: {
        readonly parameters: {
            readonly path: {
                /** Id of the Checkout */
                readonly checkoutId: string;
                readonly consignmentId: string;
            };
            readonly header: {
                readonly Accept: string;
                readonly "Content-Type": string;
            };
        };
        readonly responses: {
            readonly 200: responses["CheckoutResponse"];
        };
    };
    /**
     * Adds a *Coupon Code* to *Checkout*.
     *
     * **Required Fields**
     * * coupon_code
     */
    readonly CheckoutsCouponsByCheckoutIdPost: {
        readonly parameters: {
            readonly path: {
                /** Id of the Checkout */
                readonly checkoutId: string;
            };
            readonly header: {
                readonly Accept: string;
                readonly "Content-Type": string;
            };
            readonly body: {
                readonly body: definitions["CouponCodeRequest"];
            };
        };
        readonly responses: {
            readonly 200: responses["CheckoutResponse"];
        };
    };
    /** Deletes a *Coupon Code* from *Checkout*. */
    readonly CheckoutsCouponsByCheckoutIdAndCouponCodeDelete: {
        readonly parameters: {
            readonly path: {
                /** Id of the Checkout */
                readonly checkoutId: string;
                /** The actual couponCode, not the couponId. */
                readonly couponCode: string;
            };
            readonly header: {
                readonly Accept: string;
                readonly "Content-Type": string;
            };
        };
        readonly responses: {
            readonly 200: responses["CheckoutResponse"];
        };
    };
    /**
     * Creates an order.
     *
     * ## Usage notes
     * * Orders created will be set to incomplete order status.
     * * You can create as many orders from the same order(cart) as you want.
     * * Order duplication creates the same order with a new order number with the incomplete status.
     * * Once the order is paid, then the cart is deleted.
     * * Cart deletion occurs if you are using BigCommerce to accept payments on orders.
     */
    readonly createAnOrder: {
        readonly parameters: {
            readonly path: {
                /** ID of the checkout (same as the cart ID). */
                readonly checkoutId: string;
            };
            readonly header: {
                readonly Accept: string;
                readonly "Content-Type": string;
            };
        };
        readonly responses: {
            readonly 200: responses["order_Resp"];
        };
    };
}
