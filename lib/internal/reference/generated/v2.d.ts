import type { InferOperationIndex } from "../operation-inference";
import type * as currencies from "./currencies.v2";
import type * as customers from "./customers.v2";
import type * as geography from "./geography.v2";
import type * as marketing from "./marketing.v2";
import type * as orders from "./orders.v2.oas2";
import type * as payment_methods from "./payment_methods.v2";
import type * as shipping from "./shipping.v2";
import type * as store_content from "./store_content.v2";
import type * as store_information from "./store_information.v2";
import type * as tax_classes from "./tax_classes.v2";
export declare type Operation = InferOperationIndex<currencies.paths> & InferOperationIndex<customers.paths> & InferOperationIndex<geography.paths> & InferOperationIndex<marketing.paths> & InferOperationIndex<orders.paths> & InferOperationIndex<payment_methods.paths> & InferOperationIndex<shipping.paths> & InferOperationIndex<store_content.paths> & InferOperationIndex<store_information.paths> & InferOperationIndex<tax_classes.paths>;
