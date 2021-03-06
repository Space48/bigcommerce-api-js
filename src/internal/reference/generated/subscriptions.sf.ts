/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  readonly "/subscriptions": {
    /**
     * Creates or updates an email subscription.
     *
     * By default, customers receive abandoned cart emails as soon as they provide their email address in the checkout flow. They can opt out using this endpoint.
     *
     * However, if **Store Settings > Miscellaneous > Require Consent** is enabled, Abandoned Cart Emails are not sent by default, and the customer should opt-in.
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
    readonly post: {
      readonly parameters: {
        readonly body: {
          readonly body?: definitions["SubscriptionRequest"];
        };
      };
      readonly responses: {
        readonly 200: {
          readonly schema: definitions["Subscription"];
        };
      };
    };
  };
}

export interface definitions {
  readonly SubscriptionRequest: {
    /** Email of subscriber */
    readonly email?: string;
    /** Has subscriber provided consent for receiving Marketing emails. */
    readonly acceptsMarketingNewsletter?: boolean;
    /** Has subscriber provided consent for receiving Abandon Cart emails. */
    readonly acceptsAbandonedCartEmails?: boolean;
  };
  /** Subscription properties. */
  readonly Subscription: {
    /** The unique numeric ID of the subscriber; increments sequentially. */
    readonly id?: number;
    /** The email of the subscriber. Must be unique. */
    readonly email?: string;
    /** The first name of the subscriber. */
    readonly firstName?: string;
    /** The last name of the subscriber. */
    readonly lastName?: string;
    /** The source of the subscriber. Values are: `storefront`, `order`, or `custom`. */
    readonly source?: string;
    /** The ID of the source order, if source was an order. */
    readonly orderId?: number;
    /** The collection of consents the shopper is subscribing to. */
    readonly consents?: readonly any[];
  };
}

export interface operations {}
