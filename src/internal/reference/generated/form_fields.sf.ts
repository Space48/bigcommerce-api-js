/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  readonly "/form-fields": {
    /**
     * Gets form fields.
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
    readonly get: {
      readonly parameters: {
        readonly query: {
          readonly filter?: unknown;
        };
      };
      readonly responses: {
        /** Returns an object with form fields groups. */
        readonly 200: {
          readonly schema: definitions["FormFieldGroups"];
        };
      };
    };
  };
}

export interface definitions {
  /** Group of form field groups */
  readonly FormFieldGroups: {
    readonly customerAccount?: definitions["FormFields"];
    readonly shippingAddress?: definitions["FormFields"];
    readonly billingAddress?: definitions["FormFields"];
  };
  /** List of form fields for the group */
  readonly FormFields: readonly definitions["FormField"][];
  /** Form Field */
  readonly FormField: {
    /** Field unique ID */
    readonly id?: string;
    /** Field name */
    readonly name?: string;
    /** Wether is a custom field or system built-in field. */
    readonly custom?: boolean;
    /** User-friendly label */
    readonly label?: string;
    /** Wether this field is required or not */
    readonly required?: boolean;
    /** The field unique ID */
    readonly default?: string | null;
    /** Type of the value hold by the field */
    readonly type?: ("integer" | "string" | "array" | "date") | null;
    /** Type of the field */
    readonly fieldType?:
      | ("checkbox" | "text" | "date" | "multiline" | "radio" | "dropdown")
      | null;
    /** The minimun valid value for the field (integer and date type only) */
    readonly min?: string | null;
    /** The minimun valid value for the field (integer and date type only) */
    readonly max?: string | null;
    /** The maximum length for the value (string type only) */
    readonly maxLength?: number | null;
    /** Whether the field represents a password field */
    readonly secret?: boolean | null;
    /** Extra data for radio, dropdown and checkbox field types. */
    readonly options?: {
      /** Placeholder text for dropdown field type. */
      readonly helperLabel?: string | null;
      /** List of possible values for this field. */
      readonly items?: {
        /** Field option value. */
        readonly value?: string;
        /** User friendly label. */
        readonly label?: string;
      };
    } | null;
  };
}

export interface operations {}
