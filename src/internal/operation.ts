import { stringify } from "query-string";
import { Agent } from "http";
import { Agent as HttpsAgent } from "https";
import fetch from "cross-fetch";

export type RequestMethod = 'DELETE' | 'GET' | 'PATCH' | 'POST' | 'PUT';

export type Request<ReqLine extends RequestLine = RequestLine, Params extends Parameters = Parameters> = {
  readonly requestLine: ReqLine
  readonly parameters: Params
};

export type RequestLine = `${RequestMethod} ${string}`;

export type Parameters = {
  readonly path?: Record<string, any>
  readonly query?: any
  readonly body?: any
  readonly header?: Record<string, any>
};

export type Response = {
  readonly status: number | string
  readonly body?: any
};

export namespace Response {
  export type Success<T extends Response | Operation> = 
    T extends { status: 200 | 201 | 204 } ? T
    : T extends Operation ? Success<T['response']>
    : never;
}

export type Operation = {
  readonly parameters: Request['parameters']
  readonly response: Response
};

export namespace Operation {
  export type MinimalInput<Op extends Operation> = InputParameters<Op['parameters']>;

  type InputParameters<OpParams extends Operation['parameters']> =
    MakeEmptyObjectOptional<{
      [K in keyof OpParams]:
        K extends 'query' ? Partial<OpParams[K]>
        : K extends 'header' ? Omit<OpParams[K], 'Accept' | 'Content-Type'>
        : OpParams[K]
    }>
  ;
}

export type OperationIndex = Record<string, Operation>;

export namespace OperationIndex {
  export type FilterOptionalParams<Ops extends OperationIndex> = {
    [K in keyof Ops as {} extends Operation.MinimalInput<Ops[K]> ? K : never]: Ops[K]
  };
}

type MakeEmptyObjectOptional<T> = 1 extends 0 ? never : ({
  readonly [K in keyof T as {} extends T[K] ? K : never]?: T[K]
} & {
  readonly [K in keyof T as {} extends T[K] ? never : K]: T[K]
});

export function resolvePath(parameterizedPath: string, pathParams: Record<string, any>): string {
  return parameterizedPath
    .split("/")
    .map(el => {
      const match = el.match(/^\{(.+)\}$/)
      if (!match) {
        return el;
      }
      const paramName = match[1];
      const param = pathParams[paramName];
      if (param === null || param === undefined || param === '') {
        throw new Error(`Path param ${paramName} must be specified.`);
      }
      return encodeURIComponent(param);
    })
    .join('/');
}

export type Transport = (requestLine: string, params?: Parameters) => Promise<Response>;

export type FetchTransportOptions = {
  readonly baseUrl: string
  readonly headers: Record<string, string>
  readonly agent?: Agent
  readonly retry?: {
    readonly decider?: (attemptNum: number, response: globalThis.Response) => boolean
    readonly backoff?: (numFailures: number, response: globalThis.Response) => number
  }
};

const defaultRetryConfig: FetchTransportOptions['retry'] = {
  decider: (attemptNum, response) => {
    if (response.status === 429 && attemptNum < 50) {
      return true;
    }
    if (response.status >= 500 && response.status < 600 && attemptNum < 5) {
      return true;
    }
    return false;
  },

  backoff: numFailures => {
    const maxRandomization = 0.2;
    const randomization = 0.9 + Math.random() * maxRandomization;
    return numFailures * 500 * randomization;
  },
};

export function fetchTransport(options: FetchTransportOptions): Transport {
  const {
    agent,
    baseUrl,
    headers,
    retry,
  } = options;

  const _agent = agent || new HttpsAgent({ maxSockets: 10, keepAlive: true });

  const shouldRetry = retry?.decider ?? defaultRetryConfig?.decider!;
  const backoffTime = retry?.backoff ?? defaultRetryConfig?.backoff!;

  return async (requestLine, params) => {
    const [method, paramaterizedPath] = requestLine.split(" ", 2);
    const path = resolvePath(paramaterizedPath, params?.path ?? {});
    const queryParams = stringify(params?.query ?? {}, { arrayFormat: "comma" } );
    const queryString = queryParams.length ? `?${queryParams}` : "";
    const body = params?.body && JSON.stringify(params.body);
    
    const fetchFn = () => fetch(
      `${baseUrl}${path}${queryString}`,
      {
        method,
        headers: {
          ...headers,
          "Accept-Encoding": "gzip",
          'Content-Type': params?.body && 'application/json',
          "Accept": "application/json"
        },
        agent: _agent,
        body,
      } as any,
    );

    let response: globalThis.Response;
    for (let attemptNum = 1;; attemptNum++) {
      response = await fetchFn();
      if (shouldRetry(attemptNum, response)) {
        await new Promise<void>(
          resolve => setTimeout(() => resolve(), backoffTime(attemptNum, response)),
        );
      } else {
        break;
      }
    }

    const responseBody = await response!.text();

    return {
      status: response!.status,
      body: responseBody && JSON.parse(responseBody),
    };
  };
}
