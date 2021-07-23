import type { InferOperationIndex } from "../operation-inference";
import type * as current_customer from "./current_customer";
import type * as customer_login from "./customer_login";
import type * as payment_processing from "./payment_processing";
import type * as shipping_provider from "./shipping_provider";
import type * as tax_provider from "./tax_provider";
export declare type Operation = InferOperationIndex<current_customer.paths> & InferOperationIndex<customer_login.paths> & InferOperationIndex<payment_processing.paths> & InferOperationIndex<shipping_provider.paths> & InferOperationIndex<tax_provider.paths>;
