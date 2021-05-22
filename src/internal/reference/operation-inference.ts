import type { RequestMethod } from "../operation";

export type InferOperationIndex<PathsSpec> =
  Flatten<
    {
      [PathStr in (keyof PathsSpec) & string]: PathOperationIndex<PathStr, PathsSpec[PathStr]>
    }
  >;

type Flatten<T extends Record<string, any>> = UnionToIntersection<T[keyof T]>;

type UnionToIntersection<T> = 
  (T extends any ? (x: T) => any : never) extends (x: infer R) => any ? R : never;

type PathOperationIndex<Path extends string, PathSpec> = 1 extends 0 ? never : {
  [K in keyof PathSpec as K extends RequestMethodLc ? `${Uppercase<K>} ${Path}` : never]:
    // oas 3
    PathSpec[K] extends { parameters?: infer Params, responses?: infer Responses, requestBody: { content: { "application/json": infer RequestBody } } }
      ? {
        readonly parameters: (unknown extends Params ? {} : Params) & { body: RequestBody }
        readonly response: Response<Responses>
      }
    // oas 2
    : PathSpec[K] extends { parameters?: infer Params, responses?: infer Responses }
      ? {
        readonly parameters: unknown extends Params ? {} : CorrectOas2RequestBody<Params>
        readonly response: Response<Responses>
      }
    : never
};

type CorrectOas2RequestBody<Params> =
  Params extends { body: { [nonsenseKey: string]: infer RealBody } }
    ? Omit<Params, 'body'> & { body: RealBody }
  : Params extends { body?: { [nonsenseKey: string]: infer RealBody } }
    ? Omit<Params, 'body'> & { body?: RealBody }
    : Params;

type RequestMethodLc = Lowercase<RequestMethod>;

type Response<ResponsesSpec> = 1 extends 0 ? never : {
  [Status in keyof ResponsesSpec]: {
    status: Status
    body:
      // oas 3
      ResponsesSpec[Status] extends { content: { "application/json": infer ResponseBody } } ? ResponseBody
      // oas 2
      : ResponsesSpec[Status] extends { schema: infer Schema } ? Schema
      : never
  }
}[keyof ResponsesSpec];
