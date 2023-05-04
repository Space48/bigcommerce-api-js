export * as Management from "./management";
// export * as Storefront from "./storefront"

import * as GeneratedTypes from "./internal/reference/index"

export type ManagementTypesV2 = GeneratedTypes.V2.Operation;
export type ManagementTypesV3 = GeneratedTypes.V3.Operation;
export type StorefrontTypes = GeneratedTypes.Storefront.Operation;
