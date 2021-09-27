export const sampleProductMetafieldResponse = {
  "permission_set": "app_only",
  "namespace": "Warehouse Locations",
  "key": "Location",
  "value": "4HG",
  "description": "Location in the warehouse",
  "resource_type": "brand",
  "resource_id": 111,
  "id": 6,
  "date_created": "1973-01-20T21:34:57.903Z",
  "date_modified": "1990-12-30T00:29:23.515Z"
} as const

export const sampleInvalidProductMetafieldResponse = {
  "permission_set": "read_only",
  "namespace": "Warehouse Locations",
  "key": "Location",
  "value": "4HG",
  "description": "Location in the warehouse",
  "resource_type": "brand",
  "resource_id": 111,
  "id": 6,
  "date_created": "1973-01-20T21:34:57.903Z",
  "date_modified": "1990-12-30T00:29:23.515Z"
} as const

export const sampleInvalidProductMetafieldResponse2 = {
  "permission_set": "read",
  "namespace": "Warehouse Locations",
  "key": "Location",
  "value": 4,
  "description": "Location in the warehouse",
  "resource_type": "brand",
  "resource_id": 111,
  "id": 6,
  "date_created": "1973-01-20T21:34:57.903Z",
  "date_modified": "1990-12-30T00:29:23.515Z"
} as const
