import {
  sampleOrderResponse,
  sampleInvalidOrderResponse,
} from "./sample-responses/order";
import {
  sampleOrderProductResponse,
  sampleInvalidOrderProductResponse,
  sampleInvalidOrderProductResponse2,
} from "./sample-responses/order-product";
import {
  sampleOrderShipmentResponse,
  sampleInvalidOrderShipmentResponse,
  sampleInvalidOrderShipmentResponse2,
} from "./sample-responses/order-shipment";
import {
  sampleOrderShippingAddressResponse,
  sampleInvalidOrderShippingAddressResponse,
  sampleInvalidOrderShippingAddressResponse2,
} from "./sample-responses/order-shipping-address";
import type { components } from "../../internal/reference/generated/orders.v2.oas2";

const sampleOrderData: components["schemas"]["order_Resp"] = sampleOrderResponse;
const sampleOrderProductData: components["schemas"]["orderProducts"] = sampleOrderProductResponse;
const sampleOrderShipmentData: components["schemas"]["orderShipment"] = sampleOrderShipmentResponse;
const sampleOrderShippingAddressData: components["schemas"]["orderShippingAddress"] = sampleOrderShippingAddressResponse;
const sampleOrderInvalidData: components["schemas"]["order_Resp"] = sampleInvalidOrderResponse;
const sampleInvalidOrderProductData: components["schemas"]["orderProducts"] = sampleInvalidOrderProductResponse;
const sampleInvalidOrderProductData2: components["schemas"]["orderProducts"] = sampleInvalidOrderProductResponse2;
const sampleInvalidOrderShipmentData: components["schemas"]["orderShipment"] = sampleInvalidOrderShipmentResponse;
const sampleInvalidOrderShipmentData2: components["schemas"]["orderShipment"] = sampleInvalidOrderShipmentResponse2;
const sampleInvalidOrderShippingAddressData: components["schemas"]["orderShippingAddress"] = sampleInvalidOrderShippingAddressResponse;
const sampleInvalidOrderShippingAddressData2: components["schemas"]["orderShippingAddress"] = sampleInvalidOrderShippingAddressResponse2;
