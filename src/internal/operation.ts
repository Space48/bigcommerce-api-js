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
  status: number | string
  body?: any
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
