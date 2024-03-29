/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  readonly "/countries": {
    /** Get a list of all countries available. A country or territory, identifiable by an ISO 3166 country code. */
    readonly get: {
      readonly parameters: {
        readonly header: {
          readonly Accept: string;
          readonly "Content-Type": string;
        };
        readonly query: {
          /** Number of pages */
          readonly page?: number;
          /** Count per page */
          readonly limit?: number;
          readonly country?: string;
          readonly country_iso2?: string;
          readonly country_iso3?: string;
        };
      };
      readonly responses: {
        readonly 200: responses["countryCollection_Resp"];
      };
    };
  };
  readonly "/countries/{id}": {
    /**
     * Returns a single *Country*.
     *
     * Gets a country. A country or territory, identifiable by an ISO 3166 country code.
     */
    readonly get: {
      readonly parameters: {
        readonly path: {
          /** The id of the country. */
          readonly id: number;
        };
        readonly header: {
          readonly Accept: string;
          readonly "Content-Type": string;
        };
      };
      readonly responses: {
        readonly 200: responses["countriesResponse"];
      };
    };
    readonly parameters: {
      readonly path: {
        readonly id: string;
      };
    };
  };
  readonly "/countries/{country_id}/states": {
    /**
     * Returns a list of *States* belonging to a *Country*.
     *
     * A state or province, identifiable by an ISO 3166 subdivision code.
     */
    readonly get: {
      readonly parameters: {
        readonly path: {
          /** Id of the country */
          readonly country_id: number;
        };
        readonly header: {
          readonly Accept: string;
          readonly "Content-Type": string;
        };
        readonly query: {
          /** Name of the state/province. */
          readonly state?: string;
          /** Abbreviation for the state/province. */
          readonly state_abbreviation?: string;
          /** Number of pages */
          readonly page?: number;
          /** Count per page */
          readonly limit?: number;
        };
      };
      readonly responses: {
        readonly 200: responses["countriesStatesCollectionResponse"];
      };
    };
    readonly parameters: {
      readonly path: {
        readonly country_id: string;
      };
    };
  };
  readonly "/countries/{country_id}/states{id}": {
    /**
     * Returns a *State*.
     *
     * A state or province, identifiable by an ISO 3166 subdivision code.
     */
    readonly get: {
      readonly parameters: {
        readonly path: {
          /** Id of the country */
          readonly country_id: number;
          /** Id of the states */
          readonly id: number;
        };
        readonly header: {
          readonly Accept: string;
          readonly "Content-Type": string;
        };
      };
      readonly responses: {
        readonly 200: responses["countriesStatesResponse"];
      };
    };
    readonly parameters: {
      readonly path: {
        readonly country_id: string;
        readonly id: string;
      };
    };
  };
  readonly "/countries/count": {
    /** Returns a count of all countries. */
    readonly get: operations["countriesCount"];
  };
  readonly "/countries/states/count": {
    /** Returns a count of all states. */
    readonly get: {
      readonly responses: {
        readonly 200: responses["countResponse"];
      };
    };
  };
  readonly "/countries/states": {
    /** Returns a list of all states. */
    readonly get: {
      readonly responses: {
        readonly 200: responses["countriesStatesCollectionResponse"];
      };
    };
  };
  readonly "/countries/{country_id}/states/count": {
    /** Returns a count of a country's states. */
    readonly get: {
      readonly parameters: {
        readonly path: {
          readonly country_id: string;
        };
      };
      readonly responses: {
        readonly 200: responses["countResponse"];
      };
    };
    readonly parameters: {
      readonly path: {
        readonly country_id: string;
      };
    };
  };
}

export interface definitions {
  readonly country_Full: {
    /** Id of the country. */
    readonly id?: number;
  } & definitions["country_Base"] & {
      readonly states?: definitions["countriesStates_Full"];
    };
  /** Refers to the `states` object return in `GET` countries requests. */
  readonly countriesStates_Full: {
    readonly url?: string;
    readonly resource?: string;
  };
  /** Refers to the state returned in `GET` states requests. */
  readonly countriesState_Full: {
    /** Numeric ID of the state/province. */
    readonly id?: number;
    /** Name of the state/province. */
    readonly state?: string;
    /** Abbreviation for the state/province. */
    readonly state_abbreviation?: string;
    /** Numeric ID of the state’s/province’s associated country. */
    readonly country_id?: number;
  };
  readonly country_Base: {
    /** Country name. */
    readonly country?: string;
    /** 2-letter country code. */
    readonly country_iso2?: string;
    /** 3-letter country code. */
    readonly country_iso3?: string;
  };
  readonly count_Full: {
    readonly count?: number;
  };
}

export interface responses {
  readonly countriesResponse: {
    readonly schema: definitions["country_Full"];
  };
  readonly countriesStatesResponse: {
    readonly schema: definitions["countriesState_Full"];
  };
  readonly countryCollection_Resp: {
    readonly schema: readonly definitions["country_Full"][];
  };
  readonly countriesStatesCollectionResponse: {
    readonly schema: readonly definitions["countriesState_Full"][];
  };
  readonly countResponse: {
    readonly schema: definitions["count_Full"];
  };
}

export interface operations {
  /** Returns a count of all countries. */
  readonly countriesCount: {
    readonly responses: {
      readonly 200: responses["countResponse"];
    };
  };
}
