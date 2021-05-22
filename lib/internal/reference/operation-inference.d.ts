import type { RequestMethod } from "../operation";
export declare type InferOperationIndex<PathsSpec> = Flatten<{
    [PathStr in (keyof PathsSpec) & string]: PathOperationIndex<PathStr, PathsSpec[PathStr]>;
}>;
declare type Flatten<T extends Record<string, any>> = UnionToIntersection<T[keyof T]>;
declare type UnionToIntersection<T> = (T extends any ? (x: T) => any : never) extends (x: infer R) => any ? R : never;
declare type PathOperationIndex<Path extends string, PathSpec> = 1 extends 0 ? never : {
    [K in keyof PathSpec as K extends RequestMethodLc ? `${Uppercase<K>} ${Path}` : never]: PathSpec[K] extends {
        parameters?: infer Params;
        responses?: infer Responses;
        requestBody: {
            content: {
                "application/json": infer RequestBody;
            };
        };
    } ? {
        readonly parameters: (unknown extends Params ? {} : Params) & {
            body: RequestBody;
        };
        readonly response: Response<Responses>;
    } : PathSpec[K] extends {
        parameters?: infer Params;
        responses?: infer Responses;
    } ? {
        readonly parameters: unknown extends Params ? {} : CorrectOas2RequestBody<Params>;
        readonly response: Response<Responses>;
    } : never;
};
declare type CorrectOas2RequestBody<Params> = Params extends {
    body?: infer Body;
} ? Omit<Params, 'body'> & {
    body: RealOas2RequestBody<Body>;
} : Params;
declare type RealOas2RequestBody<T> = T extends {
    [key: string]: infer RealBody;
} ? RealBody : never;
declare type RequestMethodLc = Lowercase<RequestMethod>;
declare type Response<ResponsesSpec> = 1 extends 0 ? never : {
    [Status in keyof ResponsesSpec]: {
        status: Status;
        body: ResponsesSpec[Status] extends {
            content: {
                "application/json": infer ResponseBody;
            };
        } ? ResponseBody : ResponsesSpec[Status] extends {
            schema: infer Schema;
        } ? Schema : never;
    };
}[keyof ResponsesSpec];
export {};
