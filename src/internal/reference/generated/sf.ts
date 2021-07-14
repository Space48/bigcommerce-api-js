
      import type { InferOperationIndex } from "../operation-inference";

      import type * as carts from "./carts.sf"
import type * as checkouts from "./checkouts.sf"
import type * as consent from "./consent.sf"
import type * as customers from "./customers.sf"
import type * as form_fields from "./form_fields.sf"
import type * as orders from "./orders.sf"
import type * as pricing from "./pricing.sf"
import type * as subscriptions from "./subscriptions.sf"

      export type Operation =
        & InferOperationIndex<carts.paths>
& InferOperationIndex<checkouts.paths>
& InferOperationIndex<consent.paths>
& InferOperationIndex<customers.paths>
& InferOperationIndex<form_fields.paths>
& InferOperationIndex<orders.paths>
& InferOperationIndex<pricing.paths>
& InferOperationIndex<subscriptions.paths>
      ;
    