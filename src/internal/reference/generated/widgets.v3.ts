/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  readonly "/content/widget-templates": {
    /** Returns a list of **Widget Templates**. */
    readonly get: operations["getWidgetTemplates"];
    /**
     * Creates a **Widget Template**.
     *
     * ***Note:*** *There is a limit of 100 custom widget templates per store.*
     *
     * **Required Fields**
     * * name
     * * template
     */
    readonly post: operations["createWidgetTemplate"];
  };
  readonly "/content/widget-templates/{uuid}": {
    /** Returns a single **Widget Template**. */
    readonly get: operations["getWidgetTemplate"];
    /** Updates a **Widget Template**. */
    readonly put: operations["updateWidgetTemplate"];
    /** Deletes a **Widget Template**. */
    readonly delete: operations["deleteWidgetTemplate"];
  };
  readonly "/content/widgets": {
    /** Returns a list of **Widgets**. Optional parameters can be passed in. */
    readonly get: operations["getWidgets"];
    /**
     * Creates a **Widget**.
     *
     * **Note:** There is a limit of 10,000 widgets per store and 75 widgets per page. For more information, see [Store Limits](https://support.bigcommerce.com/s/article/Platform-Limits#storelimits).
     *
     * **Required Fields**
     * * name
     * * widget_template_uuid
     */
    readonly post: operations["createWidget"];
  };
  readonly "/content/widgets/{uuid}": {
    /** Returns a single **Widget**. */
    readonly get: operations["getWidget"];
    /** Updates a **Widget**. */
    readonly put: operations["updateWidget"];
    /** Deletes a **Widget**. */
    readonly delete: operations["deleteWidget"];
  };
  readonly "/content/placements": {
    /** Returns a list of **Placements**. Optional parameters can be passed in. */
    readonly get: operations["getPlacements"];
    /**
     * Creates a **Placement**.
     *
     * **Required Fields**
     * * widget_uuid
     * * template_file
     *
     * **Template Files**
     *
     * To view the list of values accepted by the `template_file` property, including **custom** templates, see [Placements](https://developer.bigcommerce.com/api-docs/store-management/widgets/overview#placements).
     */
    readonly post: operations["createPlacement"];
  };
  readonly "/content/placements/{uuid}": {
    /** Returns a single **Placement**. */
    readonly get: operations["getPlacement"];
    /** Updates a **Placement**. */
    readonly put: operations["updatePlacement"];
    /** Deletes a **Placement**. */
    readonly delete: operations["deletePlacement"];
  };
  readonly "/content/regions": {
    /** Returns a list of unique **Theme Regions** in a file. */
    readonly get: operations["getContentRegions"];
  };
}

export interface definitions {
  readonly widgetTemplate_Put: definitions["widgetTemplate_Base"] & {
    /** Can be added to create a new widget template version instead of updating the current one. */
    readonly create_new_version?: boolean;
  };
  readonly widgetTemplate_Post: {
    /** User-friendly name. */
    readonly name: string;
    readonly schema?: definitions["widgetSchema"];
    /** Handlebars HTML content. Also has access to Stencil Paper helpers. */
    readonly template: string;
    /** The GraphQL Storefront API query that provides widget data. */
    readonly storefront_api_query?: string;
  };
  readonly widgetTemplate_Full: definitions["widgetTemplate_Base"] & {
    /** The primary identifier. */
    readonly uuid?: string;
    /** The kind of widget template. */
    readonly kind?: string;
    /** The date on which this object was initially created. */
    readonly date_created?: string;
    /** The date on which this object was last updated. */
    readonly date_modified?: string;
    /** The identifier to the current version of this widget template. */
    readonly current_version_uuid?: string;
    /** A read-only value. Do not attempt to set or modify this value in a POST or PUT operation. */
    readonly icon_name?: string;
  };
  readonly widget_Full: definitions["widget_Base"] & {
    /** The primary identifier. */
    readonly uuid?: string;
    readonly widget_template?: definitions["widgetTemplate_Full"];
    /** The date on which this object was initially created. */
    readonly date_created?: string;
    /** The date on which this object was last updated. */
    readonly date_modified?: string;
    /** The identifier of the widget template version associated with this widget. */
    readonly version_uuid?: string;
  };
  readonly widget_Post: {
    /** User friendly name. */
    readonly name: string;
    /** The user-friendly description. */
    readonly description?: string;
    /** The JSON data that populates the template. */
    readonly widget_configuration?: { readonly [key: string]: any };
    /** The widget template UUID. */
    readonly widget_template_uuid: string;
  };
  readonly widget_Put: definitions["widget_Base"] & {
    /** The widget template UUID. */
    readonly widget_template_uuid?: string;
  };
  readonly placement_Post: {
    /** A widget identifier. */
    readonly widget_uuid: string;
    /** The template file that you would like to target. */
    readonly template_file: string;
  } & definitions["placement_Base"];
  readonly placement_Put: {
    /** The template file that you would like to target. */
    readonly template_file?: string;
    /** A widget identifier. */
    readonly widget_uuid?: string;
  } & definitions["placement_Base"];
  readonly placement_Full: {
    /** The primary identifier. */
    readonly uuid?: string;
    /** The template file that you would like to target. */
    readonly template_file?: string;
    /** The date on which this object was initially created. */
    readonly date_created?: string;
    /** The date on which this object was last updated. */
    readonly date_modified?: string;
  } & definitions["placement_Base"] & {
      readonly widget?: definitions["widget_Full"];
    };
  /** Data about the response, including pagination and collection totals. */
  readonly metaCollection: {
    readonly pagination?: definitions["pagination"];
  };
  /** Data about the response, including pagination and collection totals. */
  readonly pagination: {
    /** Total number of items in the result set. */
    readonly total?: number;
    /** Total number of items in the collection response. */
    readonly count?: number;
    /** The amount of items returned in the collection per page, controlled by the limit parameter. */
    readonly per_page?: number;
    /** The page you are currently on within the collection. */
    readonly current_page?: number;
    /** The total number of pages in the collection. */
    readonly total_pages?: number;
    /** Pagination links for the previous and next parts of the whole collection. */
    readonly links?: {
      /** Link to the previous page returned in the response. */
      readonly previous?: string;
      /** Link to the current page returned in the response. */
      readonly current?: string;
      /** Link to the next page returned in the response. */
      readonly next?: string;
    };
  };
  /** Error payload for the BigCommerce API. */
  readonly error_Base: {
    /** The HTTP status code. */
    readonly status?: number;
    /** The error title describing the particular error. */
    readonly title?: string;
    readonly type?: string;
    readonly instance?: string;
    readonly errors?: { readonly [key: string]: any };
  };
  readonly themeRegion: {
    /** The region name. */
    readonly name?: string;
  };
  /** Empty meta object; may be used later. */
  readonly Meta: { readonly [key: string]: any };
  readonly placement_Base: {
    /** The identifier of a page you would like to target. For product pages, choose product ID. For category pages, choose category ID. Home page does not support `entity_id`. */
    readonly entity_id?: string;
    /** The sort order to control the position of a content widget in a region. */
    readonly sort_order?: number;
    /** The name of the region in which to insert content widgets. */
    readonly region?: string;
    /** Sets the placement as either inactive or active. */
    readonly status?: "inactive" | "active";
  };
  readonly widgetTemplate_Base: {
    /** The user-friendly name. */
    readonly name?: string;
    readonly schema?: definitions["widgetSchema"];
    /** The widget template HTML. Supports Handlebars and Paper helpers. */
    readonly template?: string;
    /** The GraphQL Storefront API query that provides widget data. */
    readonly storefront_api_query?: string;
  };
  readonly widget_Base: {
    /** The user-friendly name. */
    readonly name?: string;
    /** The user-friendly description. */
    readonly description?: string;
    /** The JSON data that populates the template. */
    readonly widget_configuration?: { readonly [key: string]: any };
  };
  readonly "new-model": readonly {
    readonly type?: string;
    readonly label?: string;
    readonly id?: string;
    readonly default?: number;
    readonly typeMeta?: string;
    readonly conditional?: definitions["widgetSchemaConditional"];
  }[];
  /** **Tab.** Use the **tab** settings type to create settings visible in Page Builder. */
  readonly widgetSchemaTab: "tab";
  readonly widgetSchemaTabSections: {
    readonly label?: string;
    /** For examples of each type of setting, see [Page Builder > Schema Settings](https://developer.bigcommerce.com/stencil-docs/page-builder/schema-settings/alignment) in Theme Docs. */
    readonly settings?: readonly definitions["widgetSchemaSetting_Base"][];
  };
  /** **Array.** Use the **array** settings type to build collections of elements within the widget. Each element in the array can contain tabs, sections, and an entire schema. */
  readonly widgetSchemaArray: {
    readonly type?: "array";
    readonly label?: string;
    readonly id?: string;
    /** number of elements in the list to display by default. */
    readonly defaultCount?: number;
    /** name for each element in the list */
    readonly entryLabel?: string;
    /** used to display an image stored at the specified attribute name */
    readonly thumbnail?: {
      readonly type?: string;
      readonly valueKey?: string;
    };
    /** The schema used for each element in the array. */
    readonly schema?: readonly (Partial<definitions["widgetSchemaHidden"]> &
      Partial<definitions["widgetSchemaTab"]>)[];
  };
  /** For examples of each type of setting, see [Page Builder > Schema Settings](https://developer.bigcommerce.com/stencil-docs/page-builder/schema-settings/alignment) in Theme Docs. */
  readonly widgetSchemaSetting_Base: {
    /**
     * The type of setting component to display. You can view the list of elements below to discover which are available to use.
     *
     * For examples of each type of setting, see [Page Builder > Schema Settings](https://developer.bigcommerce.com/stencil-docs/page-builder/schema-settings/alignment) in Theme Docs.
     */
    readonly type?:
      | "alignment"
      | "boolean"
      | "boxModel"
      | "code"
      | "color"
      | "imageManager"
      | "input"
      | "number"
      | "productId"
      | "productImage"
      | "range"
      | "regexInput"
      | "select"
      | "text"
      | "toggle";
    /** The user friendly message to inform the user how this setting will be used. */
    readonly label?: string;
    /** The variable name where the setting value will be available in the widget template. */
    readonly id?: string;
    /** The default value to use when rendering the widget for the first time. Make sure to set sensible defaults to make your widget easier to use. */
    readonly default?: string;
    /** Additional information needed based on the selected setting type. */
    readonly typeMeta?: {
      readonly selectOptions?: readonly {
        readonly label?: string;
        readonly value?: string;
      }[];
    };
    readonly conditional?: definitions["widgetSchemaConditional"];
  };
  /** The schema for the widget's merchant-facing UI. For more information on the available schema settings, see [Widget UI Schema](https://developer.bigcommerce.com/stencil-docs/page-builder/widget-ui-schema). */
  readonly widgetSchema: readonly (Partial<definitions["widgetSchemaTab"]> &
    Partial<definitions["widgetSchemaArray"]> &
    Partial<definitions["widgetSchemaHidden"]>)[];
  /** **Hidden.** Use the **hidden** settings type to create controls that have no user interface drawn in Page Builder. Hidden settings are not grouped into any other tabs or arrays. */
  readonly widgetSchemaHidden: "hidden";
  readonly widgetSchemaTabSectionsSettings: { readonly [key: string]: any };
  /** An optional property that can be added to each setting to control whether it should be displayed to the user while editing in Page Builder. This does not clear the value in the setting, just controls the display of the setting. */
  readonly widgetSchemaConditional: {
    /** The ID of the `setting` object the conditional attribute is related to. */
    readonly key?: string;
    /** Specifies the operation used to determine whether to display the setting. The `IN` operator is currently the only supported operator. The setting will be displayed if the conditional’s `value` property is equal to the selected value of the `selectOptions`. */
    readonly operator?: string;
    /** A single-object array containing a value from the `typeMeta`'s `selectOptions`. */
    readonly value?: readonly { readonly [key: string]: any }[];
  };
}

export interface parameters {
  /** The identifier for a specific template. */
  readonly TemplateUUID: string;
  /** The identifier for a specific widget template. */
  readonly FilterWidgetTemplateUUIDParam: string;
  /** The kind of widget template. */
  readonly FilterWidgetTemplateKindParam: string;
  /** The template file, for example: `pages/home`. */
  readonly FilterTemplateFileParam: string;
  /** The template file, for example: `templateFile=pages/home`. */
  readonly RequiredTemplateFile: string;
  /** The identifier for a specific layout. */
  readonly LayoutUUID: string;
  /** The identifier for a specific placement. */
  readonly PlacementUUID: string;
  /** The identifier for a specific widget. */
  readonly WidgetUUID: string;
  /** The identifier for a specific widget. */
  readonly FilterWidgetUUIDParam: string;
  /** Specifies the page number in a limited (paginated) list of products. */
  readonly PageParam: number;
  /** Controls the number of items per page in a limited (paginated) list of products. */
  readonly LimitParam: number;
  /** The query string associated with a widget's name and description. */
  readonly QueryWidgetsParam: string;
  readonly Accept: string;
  readonly "Content-Type": string;
}

export interface responses {
  readonly ThemeRegions_Resp: {
    readonly schema: {
      readonly data?: readonly definitions["themeRegion"][];
      /** Empty meta object; may be used later. */
      readonly meta?: { readonly [key: string]: any };
    };
  };
  readonly LayoutCollectionResponse: {
    readonly schema: {
      readonly data?: readonly {
        /** The primary identifier. */
        readonly uuid?: string;
        /** The specific instance of a page */
        readonly entity_id?: string;
        /** The page template name. */
        readonly template_file?: string;
        /** The name of the region defined in the stencil theme file. */
        readonly region?: string;
        /** The HTML layout which defines complex poisitoning for placements. */
        readonly markup?: string;
        /** The date on which this object was initially created. */
        readonly date_created?: string;
        /** The date on which this object was last updated. */
        readonly date_modified?: string;
      }[];
      /** Data about the response, including pagination and collection totals. */
      readonly meta?: {
        /** Data about the response, including pagination and collection totals. */
        readonly pagination?: {
          /** Total number of items in the result set. */
          readonly total?: number;
          /** Total number of items in the collection response. */
          readonly count?: number;
          /** The amount of items returned in the collection per page, controlled by the limit parameter. */
          readonly per_page?: number;
          /** The page you are currently on within the collection. */
          readonly current_page?: number;
          /** The total number of pages in the collection. */
          readonly total_pages?: number;
          /** Pagination links for the previous and next parts of the whole collection. */
          readonly links?: {
            /** Link to the previous page returned in the response. */
            readonly previous?: string;
            /** Link to the current page returned in the response. */
            readonly current?: string;
            /** Link to the next page returned in the response. */
            readonly next?: string;
          };
        };
      };
    };
  };
  readonly LayoutResponse: {
    readonly schema: {
      readonly data?: readonly {
        /** The primary identifier. */
        readonly uuid?: string;
        /** The specific instance of a page */
        readonly entity_id?: string;
        /** The page template name. */
        readonly template_file?: string;
        /** The name of the region defined in the stencil theme file. */
        readonly region?: string;
        /** The HTML layout which defines complex poisitoning for placements. */
        readonly markup?: string;
        /** The date on which this object was initially created. */
        readonly date_created?: string;
        /** The date on which this object was last updated. */
        readonly date_modified?: string;
      }[];
    };
  };
  readonly PlacementsCollection_Resp: {
    readonly schema: {
      readonly data?: readonly definitions["placement_Full"][];
      readonly meta?: definitions["metaCollection"];
    };
  };
  readonly Placement_Resp: {
    readonly schema: {
      readonly data?: definitions["placement_Full"];
      readonly meta?: { readonly [key: string]: any };
    };
  };
  readonly WidgetTemplateCollection_Resp: {
    readonly schema: {
      readonly data?: readonly definitions["widgetTemplate_Full"][];
      readonly meta?: definitions["pagination"];
    };
  };
  readonly WidgetTemplate_Resp: {
    readonly schema: {
      readonly data?: definitions["widgetTemplate_Full"];
    } & {
      readonly meta?: { readonly [key: string]: any };
    };
  };
  readonly WidgetCollection_Resp: {
    readonly schema: {
      readonly data?: readonly definitions["widget_Full"][];
      readonly meta?: definitions["metaCollection"];
    };
  };
  readonly Widget_Resp: {
    readonly schema: {
      readonly data?: definitions["widget_Full"];
      readonly meta?: { readonly [key: string]: any };
    };
  };
  /** This is the result of missing required fields, or of invalid data. See the response for more details. */
  readonly Error422_Resp: {
    readonly schema: definitions["error_Base"];
  };
  /** The resource was not found. */
  readonly Error404_Resp: {
    readonly schema: definitions["error_Base"];
  };
}

export interface operations {
  /** Returns a list of **Widget Templates**. */
  readonly getWidgetTemplates: {
    readonly parameters: {
      readonly query: {
        /** Specifies the page number in a limited (paginated) list of products. */
        readonly page?: number;
        /** Controls the number of items per page in a limited (paginated) list of products. */
        readonly limit?: number;
        /** The kind of widget template. */
        readonly widget_template_kind?: string;
        /** Filter items by channel_id. */
        readonly channel_id?: number;
      };
      readonly header: {
        readonly Accept?: string;
        readonly "Content-Type"?: string;
      };
    };
    readonly responses: {
      readonly 200: responses["WidgetTemplateCollection_Resp"];
      readonly 422: responses["Error422_Resp"];
    };
  };
  /**
   * Creates a **Widget Template**.
   *
   * ***Note:*** *There is a limit of 100 custom widget templates per store.*
   *
   * **Required Fields**
   * * name
   * * template
   */
  readonly createWidgetTemplate: {
    readonly parameters: {
      readonly body: {
        readonly templateBody: definitions["widgetTemplate_Post"];
      };
      readonly header: {
        readonly Accept?: string;
        readonly "Content-Type"?: string;
      };
    };
    readonly responses: {
      readonly 200: responses["WidgetTemplate_Resp"];
      readonly 422: responses["Error422_Resp"];
    };
  };
  /** Returns a single **Widget Template**. */
  readonly getWidgetTemplate: {
    readonly parameters: {
      readonly path: {
        /** The identifier for a specific template. */
        readonly uuid: string;
      };
      readonly header: {
        readonly Accept?: string;
        readonly "Content-Type"?: string;
      };
    };
    readonly responses: {
      readonly 200: responses["WidgetTemplate_Resp"];
      readonly 404: responses["Error404_Resp"];
      readonly 422: responses["Error422_Resp"];
    };
  };
  /** Updates a **Widget Template**. */
  readonly updateWidgetTemplate: {
    readonly parameters: {
      readonly path: {
        /** The identifier for a specific template. */
        readonly uuid: string;
      };
      readonly body: {
        readonly templateBody: definitions["widgetTemplate_Put"];
      };
      readonly header: {
        readonly Accept?: string;
        readonly "Content-Type"?: string;
      };
    };
    readonly responses: {
      readonly 200: responses["WidgetTemplate_Resp"];
      readonly 404: responses["Error404_Resp"];
      readonly 422: responses["Error422_Resp"];
    };
  };
  /** Deletes a **Widget Template**. */
  readonly deleteWidgetTemplate: {
    readonly parameters: {
      readonly path: {
        /** The identifier for a specific template. */
        readonly uuid: string;
      };
      readonly header: {
        readonly Accept?: string;
        readonly "Content-Type"?: string;
      };
    };
    readonly responses: {
      /** An empty response. */
      readonly 204: never;
      readonly 404: responses["Error404_Resp"];
      readonly 422: responses["Error422_Resp"];
    };
  };
  /** Returns a list of **Widgets**. Optional parameters can be passed in. */
  readonly getWidgets: {
    readonly parameters: {
      readonly query: {
        /** Specifies the page number in a limited (paginated) list of products. */
        readonly page?: number;
        /** Controls the number of items per page in a limited (paginated) list of products. */
        readonly limit?: number;
        /** The kind of widget template. */
        readonly widget_template_kind?: string;
        /** The identifier for a specific widget template. */
        readonly widget_template_uuid?: string;
        /** The URL encoded name of the widget. */
        readonly name?: string;
        /** Use to pass in comma-separated list of widget names. Example: `/widgets?name:in=test-widget-name,header%20images` */
        readonly "name:in"?: readonly any[];
        /** Filter items by channel_id. */
        readonly channel_id?: number;
      };
      readonly header: {
        readonly Accept?: string;
        readonly "Content-Type"?: string;
      };
    };
    readonly responses: {
      readonly 200: responses["WidgetCollection_Resp"];
      readonly 422: responses["Error422_Resp"];
    };
  };
  /**
   * Creates a **Widget**.
   *
   * **Note:** There is a limit of 10,000 widgets per store and 75 widgets per page. For more information, see [Store Limits](https://support.bigcommerce.com/s/article/Platform-Limits#storelimits).
   *
   * **Required Fields**
   * * name
   * * widget_template_uuid
   */
  readonly createWidget: {
    readonly parameters: {
      readonly body: {
        readonly widgetBody: definitions["widget_Post"];
      };
      readonly header: {
        readonly Accept?: string;
        readonly "Content-Type"?: string;
      };
    };
    readonly responses: {
      readonly 200: responses["Widget_Resp"];
      readonly 422: responses["Error422_Resp"];
    };
  };
  /** Returns a single **Widget**. */
  readonly getWidget: {
    readonly parameters: {
      readonly path: {
        /** The identifier for a specific widget. */
        readonly uuid: string;
      };
      readonly header: {
        readonly Accept?: string;
        readonly "Content-Type"?: string;
      };
    };
    readonly responses: {
      readonly 200: responses["Widget_Resp"];
      readonly 404: responses["Error404_Resp"];
      readonly 422: responses["Error422_Resp"];
    };
  };
  /** Updates a **Widget**. */
  readonly updateWidget: {
    readonly parameters: {
      readonly path: {
        /** The identifier for a specific widget. */
        readonly uuid: string;
      };
      readonly body: {
        readonly widgetBody: definitions["widget_Put"];
      };
      readonly header: {
        readonly Accept?: string;
        readonly "Content-Type"?: string;
      };
    };
    readonly responses: {
      readonly 200: responses["Widget_Resp"];
      readonly 404: responses["Error404_Resp"];
      readonly 422: responses["Error422_Resp"];
    };
  };
  /** Deletes a **Widget**. */
  readonly deleteWidget: {
    readonly parameters: {
      readonly path: {
        /** The identifier for a specific widget. */
        readonly uuid: string;
      };
      readonly header: {
        readonly Accept?: string;
        readonly "Content-Type"?: string;
      };
    };
    readonly responses: {
      /** An empty response. */
      readonly 204: never;
      readonly 404: responses["Error404_Resp"];
      readonly 422: responses["Error422_Resp"];
    };
  };
  /** Returns a list of **Placements**. Optional parameters can be passed in. */
  readonly getPlacements: {
    readonly parameters: {
      readonly query: {
        /** Specifies the page number in a limited (paginated) list of products. */
        readonly page?: number;
        /** Controls the number of items per page in a limited (paginated) list of products. */
        readonly limit?: number;
        /** The kind of widget template. */
        readonly widget_template_kind?: string;
        /** The template file, for example: `pages/home`. */
        readonly template_file?: string;
        /** The identifier for a specific widget. */
        readonly widget_uuid?: string;
        /** The identifier for a specific widget template. */
        readonly widget_template_uuid?: string;
      };
      readonly header: {
        readonly Accept?: string;
        readonly "Content-Type"?: string;
      };
    };
    readonly responses: {
      readonly 200: responses["PlacementsCollection_Resp"];
      readonly 422: responses["Error422_Resp"];
    };
  };
  /**
   * Creates a **Placement**.
   *
   * **Required Fields**
   * * widget_uuid
   * * template_file
   *
   * **Template Files**
   *
   * To view the list of values accepted by the `template_file` property, including **custom** templates, see [Placements](https://developer.bigcommerce.com/api-docs/store-management/widgets/overview#placements).
   */
  readonly createPlacement: {
    readonly parameters: {
      readonly body: {
        readonly placementBody: definitions["placement_Post"];
      };
      readonly header: {
        readonly Accept?: string;
        readonly "Content-Type"?: string;
      };
    };
    readonly responses: {
      readonly 200: responses["Placement_Resp"];
      readonly 422: responses["Error422_Resp"];
    };
  };
  /** Returns a single **Placement**. */
  readonly getPlacement: {
    readonly parameters: {
      readonly path: {
        /** The identifier for a specific placement. */
        readonly uuid: string;
      };
      readonly header: {
        readonly Accept?: string;
        readonly "Content-Type"?: string;
      };
    };
    readonly responses: {
      readonly 200: responses["Placement_Resp"];
      readonly 404: responses["Error404_Resp"];
      readonly 422: responses["Error422_Resp"];
    };
  };
  /** Updates a **Placement**. */
  readonly updatePlacement: {
    readonly parameters: {
      readonly path: {
        /** The identifier for a specific placement. */
        readonly uuid: string;
      };
      readonly body: {
        readonly placementBody: definitions["placement_Put"];
      };
      readonly header: {
        readonly Accept?: string;
        readonly "Content-Type"?: string;
      };
    };
    readonly responses: {
      readonly 200: responses["Placement_Resp"];
      readonly 404: responses["Error404_Resp"];
      readonly 422: responses["Error422_Resp"];
    };
  };
  /** Deletes a **Placement**. */
  readonly deletePlacement: {
    readonly parameters: {
      readonly path: {
        /** The identifier for a specific placement. */
        readonly uuid: string;
      };
      readonly header: {
        readonly Accept?: string;
        readonly "Content-Type"?: string;
      };
    };
    readonly responses: {
      /** An empty response. */
      readonly 204: never;
      readonly 404: responses["Error404_Resp"];
      readonly 422: responses["Error422_Resp"];
    };
  };
  /** Returns a list of unique **Theme Regions** in a file. */
  readonly getContentRegions: {
    readonly parameters: {
      readonly header: {
        readonly Accept?: string;
        readonly "Content-Type"?: string;
      };
      readonly query: {
        /** The template file, for example: `templateFile=pages/home`. */
        readonly template_file: string;
      };
    };
    readonly responses: {
      readonly 200: responses["ThemeRegions_Resp"];
    };
  };
}
