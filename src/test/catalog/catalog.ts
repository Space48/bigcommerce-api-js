import {
  sampleProductResponse,
  sampleInvalidProductResponse,
  sampleInvalidProductResponse2
} from "./sample-responses/product";
import {
  sampleProductCustomFieldResponse,
  sampleInvalidProductCustomFieldResponse,
  sampleInvalidProductCustomFieldResponse2,
} from "./sample-responses/product-customfield";
import {
  sampleProductMetafieldResponse,
  sampleInvalidProductMetafieldResponse,
  sampleInvalidProductMetafieldResponse2,
} from "./sample-responses/product-metafield";
import {
  sampleProductReviewResponse,
  sampleInvalidProductReviewResponse,
  sampleInvalidProductReviewResponse2,
} from "./sample-responses/product-review";
import {
  sampleProductModifierResponse,
  sampleInvalidProductModifierResponse,
  sampleInvalidProductModifierResponse2,
} from "./sample-responses/product-modifier";
import {
  sampleProductVariantsResponse,
  sampleInvalidProductVariantsResponse,
  sampleInvalidProductVariantsResponse2
} from "./sample-responses/product-variant";
import type { definitions } from "../../internal/reference/generated/catalog.v3";

const sampleProductData: definitions["product_Full"] = sampleProductResponse;
const sampleProductCustomFieldData: definitions["productCustomField_Base"] = sampleProductCustomFieldResponse;
const sampleProductMetafieldData: definitions["metafield_Full"] = sampleProductMetafieldResponse;
const sampleProductReviewData: definitions["productReview_Full"] = sampleProductReviewResponse;
const sampleProductModifierData: definitions["productModifier_Full"] = sampleProductModifierResponse;
const sampleProductVariantsData: definitions["productVariant_Full"] = sampleProductVariantsResponse;
const sampleInvalidProductData: definitions["product_Full"] = sampleInvalidProductResponse;
const sampleInvalidProductData2: definitions["product_Full"] = sampleInvalidProductResponse2;
const sampleInvalidProductCustomFieldData: definitions["productCustomField_Base"] = sampleInvalidProductCustomFieldResponse;
const sampleInvalidProductCustomFieldData2: definitions["productCustomField_Base"] = sampleInvalidProductCustomFieldResponse2;
const sampleInvalidProductMetafieldData: definitions["metafield_Full"] = sampleInvalidProductMetafieldResponse;
const sampleInvalidProductMetafieldData2: definitions["metafield_Full"] = sampleInvalidProductMetafieldResponse2;
const sampleInvalidProductReviewData: definitions["productReview_Full"] = sampleInvalidProductReviewResponse;
const sampleInvalidProductReviewData2: definitions["productReview_Full"] = sampleInvalidProductReviewResponse2;
const sampleInvalidProductModifierData: definitions["productModifier_Full"] = sampleInvalidProductModifierResponse;
const sampleInvalidProductModifierData2: definitions["productModifier_Full"] = sampleInvalidProductModifierResponse2;
const sampleInvalidProductVariantsData: definitions["productVariant_Full"] = sampleInvalidProductVariantsResponse;
const sampleInvalidProductVariantsData2: definitions["productVariant_Full"] = sampleInvalidProductVariantsResponse2;
