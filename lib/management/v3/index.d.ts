/// <reference types="node" />
import type { V3 as reference } from "../../internal/reference";
import type { NarrowResponse } from "./response-narrowing";
import { Operation, OperationIndex, Parameters, Request, RequestMethod, Response } from "../../internal/operation";
import { Const } from "../../internal/type-utils";
import { Agent } from "http";
export declare type Operations = reference.Operation;
export declare type RequestLine = keyof Operations;
export declare type NoParamsRequestLine = keyof OperationIndex.FilterOptionalParams<Operations>;
export declare type InferResponse<ReqLine extends RequestLine, Params> = NarrowResponse<Operations, Request<ReqLine, Params>, Operations[ReqLine]['response']>;
export declare type ResponseData<ReqLine extends RequestLine, Params = unknown> = Response.Success<ResolveResponse<ReqLine, Params>> extends {
    readonly body: {
        readonly data?: infer Data;
    };
} ? Data : never;
export declare type Config = {
    readonly storeHash: string;
    readonly accessToken: string;
    readonly agent?: Agent;
};
export declare class Client {
    private readonly config;
    constructor(config: Config);
    private readonly headers;
    send<ReqLine extends NoParamsRequestLine>(requestLine: ReqLine): Promise<InferResponse<ReqLine, {}>>;
    send<ReqLine extends RequestLine, Params extends Operation.MinimalInput<Operations[ReqLine]>>(requestLine: ReqLine, params: Const<Params & Operation.MinimalInput<Operations[ReqLine]>>): Promise<InferResponse<ReqLine, Params>>;
    send(requestLine: string, params?: Parameters): Promise<Response>;
    get<Path extends NoParamsRequestPath<'GET'>>(path: Path): Promise<ResponseData<`GET ${Path}`, {}> | null>;
    get<Path extends RequestPath<'GET'>, Params extends Operation.MinimalInput<Operations[`GET ${Path}`]>>(path: Path, params: Const<Params & Operation.MinimalInput<Operations[`GET ${Path}`]>>): Promise<ResponseData<`GET ${Path}`, Params> | null>;
    get<T = unknown>(path: string, params?: Parameters): Promise<T>;
    list<Path extends NoParamsListablePath>(path: Path): AsyncIterable<ListItemType<Path, {}>>;
    list<Path extends ListablePath, Params extends Operation.MinimalInput<Operations[`GET ${Path}`]>>(path: Path, params: Const<Params & Operation.MinimalInput<Operations[`GET ${Path}`]>>): AsyncIterable<ListItemType<Path, Params>>;
    list<T = unknown>(path: string, params?: Parameters): AsyncIterable<T>;
    post<Path extends NoParamsRequestPath<'POST'>>(path: Path): Promise<ResponseData<`POST ${Path}`, {}>>;
    post<Path extends RequestPath<'POST'>, Params extends Operation.MinimalInput<Operations[`POST ${Path}`]>>(path: Path, params: Const<Params & Operation.MinimalInput<Operations[`POST ${Path}`]>>): Promise<ResponseData<`POST ${Path}`, Params>>;
    post<T = unknown>(path: string, params?: Parameters): Promise<T>;
    put<Path extends NoParamsRequestPath<'PUT'>>(path: Path): Promise<ResponseData<`PUT ${Path}`, {}>>;
    put<Path extends RequestPath<'PUT'>, Params extends Operation.MinimalInput<Operations[`PUT ${Path}`]>>(path: Path, params: Const<Params & Operation.MinimalInput<Operations[`PUT ${Path}`]>>): Promise<ResponseData<`PUT ${Path}`, Params>>;
    put<T = unknown>(path: string, params?: Parameters): Promise<T>;
    delete<Path extends NoParamsRequestPath<'DELETE'>>(path: Path): Promise<ResponseData<`DELETE ${Path}`, {}> | null>;
    delete<Path extends RequestPath<'DELETE'>, Params extends Operation.MinimalInput<Operations[`DELETE ${Path}`]>>(path: Path, params: Const<Params & Operation.MinimalInput<Operations[`DELETE ${Path}`]>>): Promise<ResponseData<`DELETE ${Path}`, Params> | null>;
    delete<T = unknown>(path: string, params?: Parameters): Promise<T>;
    private checkResponseStatus;
}
declare type ListItemType<Path extends string, Params = unknown> = ResponseData<`GET ${Path}` & RequestLine, Params> extends ReadonlyArray<infer T> ? T : never;
declare type ListablePath = ListablePath_<Operations>;
declare type NoParamsListablePath = ListablePath & NoParamsRequestPath<'GET'>;
declare type ListablePath_<Ops extends OperationIndex> = {
    [ReqLine in keyof Ops]: Response.Success<Ops[ReqLine]['response']> extends {
        body: {
            data?: ReadonlyArray<any>;
        };
    } ? ReqLine extends `GET ${infer Path}` ? Path : never : never;
}[keyof Ops];
declare type ResolveResponse<ReqLine extends RequestLine, Params = unknown> = unknown extends Params ? Operations[ReqLine]['response'] : Params extends Parameters ? InferResponse<ReqLine, Params> : never;
declare type RequestPath<Method extends RequestMethod> = RequestLine & `${Method} ${any}` extends `${Method} ${infer Path}` ? Path : never;
declare type NoParamsRequestPath<Method extends RequestMethod> = NoParamsRequestLine & `${Method} ${any}` extends `${Method} ${infer Path}` ? Path : never;
export {};
