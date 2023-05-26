import type { Storefront as reference } from "../internal/reference";
import type { NarrowResponse } from "./response-narrowing";
import type { Operation, OperationIndex, Parameters, Request, RequestMethod, Response } from "../internal/operation";
import { Const } from "../internal/type-utils";
export declare type Operations = reference.Operation;
export declare type RequestLine = keyof Operations;
export declare type NoParamsRequestLine = keyof OperationIndex.FilterOptionalParams<Operations>;
export declare type InferResponse<ReqLine extends RequestLine, Params extends Parameters> = NarrowResponse<Operations, Request<ReqLine, Params>, Operations[ReqLine]['response']>;
export declare type ResponseData<ReqLine extends RequestLine, Params = unknown> = Response.Success<ResolveResponse<ReqLine, Params>> extends {
    readonly body: infer Data;
} ? Data : never;
export interface Client {
    send<ReqLine extends NoParamsRequestLine>(requestLine: ReqLine): Promise<InferResponse<ReqLine, {}>>;
    send<ReqLine extends RequestLine, Params extends Operation.MinimalInput<Operations[ReqLine]>>(requestLine: ReqLine, params: Const<Params & Operation.MinimalInput<Operations[ReqLine]>>): Promise<InferResponse<ReqLine, Params>>;
    delete<Path extends RequestPath<'DELETE'>, Params extends Operation.MinimalInput<Operations[`DELETE ${Path}`]>>(path: Path, params: Const<Params & Operation.MinimalInput<Operations[`DELETE ${Path}`]>>): Promise<ResponseData<`DELETE ${Path}`, Params> | null>;
    get<Path extends NoParamsRequestPath<'GET'>>(requestLine: Path): Promise<ResponseData<`GET ${Path}`, {}> | null>;
    get<Path extends RequestPath<'GET'>, Params extends Operation.MinimalInput<Operations[`GET ${Path}`]>>(path: Path, params: Const<Params & Operation.MinimalInput<Operations[`GET ${Path}`]>>): Promise<ResponseData<`GET ${Path}`, Params> | null>;
    post<Path extends NoParamsRequestPath<'POST'>>(requestLine: Path): Promise<ResponseData<`POST ${Path}`, {}>>;
    post<Path extends RequestPath<'POST'>, Params extends Operation.MinimalInput<Operations[`POST ${Path}`]>>(path: Path, params: Const<Params & Operation.MinimalInput<Operations[`POST ${Path}`]>>): Promise<ResponseData<`POST ${Path}`, Params>>;
    put<Path extends RequestPath<'PUT'>, Params extends Operation.MinimalInput<Operations[`PUT ${Path}`]>>(path: Path, params: Const<Params & Operation.MinimalInput<Operations[`PUT ${Path}`]>>): Promise<ResponseData<`PUT ${Path}`, Params>>;
}
declare type ResolveResponse<ReqLine extends RequestLine, Params = unknown> = unknown extends Params ? Operations[ReqLine]['response'] : Params extends Parameters ? InferResponse<ReqLine, Params> : never;
declare type RequestPath<Method extends RequestMethod> = RequestLine & `${Method} ${any}` extends `${Method} ${infer Path}` ? Path : never;
declare type NoParamsRequestPath<Method extends RequestMethod> = NoParamsRequestLine & `${Method} ${any}` extends `${Method} ${infer Path}` ? Path : never;
export {};
