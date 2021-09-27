export const sampleProductModifierResponse = {
  "id": 206,
  "product_id": 158,
  "name": "Insurance",
  "display_name": "Insurace",
  "type": "checkbox",
  "required": true,
  "config": {
    "checkbox_label": "$5 for insurance",
    "checked_by_default": false
  },
  "option_values": [
    {
      "id": 183,
      "option_id": 206,
      "label": "Yes",
      "sort_order": 0,
      "value_data": {
        "checked_value": true
      },
      "is_default": false,
      "adjusters": {
        "price": {},
        "weight": {},
        "image_url": "",
        "purchasing_disabled": {
          "status": false,
          "message": ""
        }
      }
    },
    {
      "id": 184,
      "option_id": 206,
      "label": "No",
      "sort_order": 1,
      "value_data": {
        "checked_value": false
      },
      "is_default": true,
      "adjusters": {
        "price": {},
        "weight": {},
        "image_url": "",
        "purchasing_disabled": {
          "status": false,
          "message": ""
        }
      }
    }
  ]
} as const;

export const sampleInvalidProductModifierResponse = {
  "id": 206,
  "product_id": 158,
  "name": "Insurance",
  "display_name": "Insurace",
  "type": "button",
  "required": true,
  "config": {
    "checkbox_label": "$5 for insurance",
    "checked_by_default": false
  },
  "option_values": [
    {
      "id": 183,
      "option_id": 206,
      "label": "Yes",
      "sort_order": 0,
      "value_data": {
        "checked_value": true
      },
      "is_default": false,
      "adjusters": {
        "price": {},
        "weight": {},
        "image_url": "",
        "purchasing_disabled": {
          "status": false,
          "message": ""
        }
      }
    },
    {
      "id": 184,
      "option_id": 206,
      "label": "No",
      "sort_order": 1,
      "value_data": {
        "checked_value": false
      },
      "is_default": true,
      "adjusters": {
        "price": {},
        "weight": {},
        "image_url": "",
        "purchasing_disabled": {
          "status": false,
          "message": ""
        }
      }
    }
  ]
} as const;

export const sampleInvalidProductModifierResponse2 = {
  "id": 206,
  "product_id": 158,
  "name": "Insurance",
  "display_name": "Insurace",
  "type": "checkbox",
  "required": "false",
  "config": {
    "checkbox_label": "$5 for insurance",
    "checked_by_default": false
  },
  "option_values": [
    {
      "id": 183,
      "option_id": 206,
      "label": "Yes",
      "sort_order": 0,
      "value_data": {
        "checked_value": true
      },
      "is_default": false,
      "adjusters": {
        "price": {},
        "weight": {},
        "image_url": "",
        "purchasing_disabled": {
          "status": false,
          "message": ""
        }
      }
    },
    {
      "id": 184,
      "option_id": 206,
      "label": "No",
      "sort_order": 1,
      "value_data": {
        "checked_value": false
      },
      "is_default": true,
      "adjusters": {
        "price": {},
        "weight": {},
        "image_url": "",
        "purchasing_disabled": {
          "status": false,
          "message": ""
        }
      }
    }
  ]
} as const;
