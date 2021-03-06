
      import type { InferOperationIndex } from "../operation-inference";

      import type * as abandoned_carts from "./abandoned_carts.v3"
import type * as carts from "./carts.v3"
import type * as catalog from "./catalog.v3"
import type * as channels from "./channels.v3"
import type * as checkouts from "./checkouts.v3"
import type * as custom_template_associations from "./custom_template_associations.v3"
import type * as customers from "./customers.v3"
import type * as email_templates from "./email_templates.v3"
import type * as orders from "./orders.v3"
import type * as pages from "./pages.v3"
import type * as price_lists from "./price_lists.v3"
import type * as redirects from "./redirects.v3"
import type * as scripts from "./scripts.v3"
import type * as settings from "./settings.v3"
import type * as shipping from "./shipping.v3"
import type * as sites from "./sites.v3"
import type * as storefront_tokens from "./storefront_tokens.v3"
import type * as subscribers from "./subscribers.v3"
import type * as tax from "./tax.v3"
import type * as themes from "./themes.v3"
import type * as webhooks from "./webhooks.v3"
import type * as widgets from "./widgets.v3"
import type * as wishlists from "./wishlists.v3"

      export type Operation =
        & InferOperationIndex<abandoned_carts.paths>
& InferOperationIndex<carts.paths>
& InferOperationIndex<catalog.paths>
& InferOperationIndex<channels.paths>
& InferOperationIndex<checkouts.paths>
& InferOperationIndex<custom_template_associations.paths>
& InferOperationIndex<customers.paths>
& InferOperationIndex<email_templates.paths>
& InferOperationIndex<orders.paths>
& InferOperationIndex<pages.paths>
& InferOperationIndex<price_lists.paths>
& InferOperationIndex<redirects.paths>
& InferOperationIndex<scripts.paths>
& InferOperationIndex<settings.paths>
& InferOperationIndex<shipping.paths>
& InferOperationIndex<sites.paths>
& InferOperationIndex<storefront_tokens.paths>
& InferOperationIndex<subscribers.paths>
& InferOperationIndex<tax.paths>
& InferOperationIndex<themes.paths>
& InferOperationIndex<webhooks.paths>
& InferOperationIndex<widgets.paths>
& InferOperationIndex<wishlists.paths>
      ;
    