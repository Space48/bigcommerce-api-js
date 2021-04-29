import type { V3 as reference } from "../internal/reference";
import type { NarrowResponse } from "./response-narrowing";
import type { Operation, OperationIndex, Parameters, Request, Response } from "../internal/operation";
import { Const } from "../internal/type-utils";
export declare type Operations = reference.Operation;
export declare type RequestLine = keyof Operations;
export declare type OptionalParamsRequestLine = keyof OperationIndex.FilterOptionalParams<Operations>;
export declare type InferResponse<ReqLine extends RequestLine, Params> = NarrowResponse<Operations, Request<ReqLine, Params>, Operations[ReqLine]['response']>;
export declare type ResponseData<ReqLine extends RequestLine, Query = unknown> = Response.Success<ResolveResponse<ReqLine, Query>> extends {
    readonly body: {
        readonly data?: infer Data;
    };
} ? Data : never;
declare type ResolveResponse<ReqLine extends RequestLine, Query = unknown> = unknown extends Query ? Operations[ReqLine]['response'] : Query extends Parameters['query'] ? InferResponse<ReqLine, {
    path: any;
    body: any;
    query: Query;
}> : never;
export interface Client {
    send<ReqLine extends OptionalParamsRequestLine>(requestLine: ReqLine): Promise<InferResponse<ReqLine, {}>>;
    send<ReqLine extends RequestLine, Params extends Operation.MinimalInput<Operations[ReqLine]>>(requestLine: ReqLine, params: Const<Params>): Promise<InferResponse<ReqLine, Params>>;
}
export {};
