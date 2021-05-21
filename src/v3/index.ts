import type { V3 as reference } from "../internal/reference";
import type { NarrowResponse } from "./response-narrowing"
import type { Operation, OperationIndex, Parameters, Request, RequestMethod, Response } from "../internal/operation";
import { Const } from "../internal/type-utils";
import fetch from "node-fetch";
import { stringify } from "query-string";
import { Agent } from "http";

export type Operations = reference.Operation;

export type RequestLine = keyof Operations;

export type NoParamsRequestLine = keyof OperationIndex.FilterOptionalParams<Operations>;

export type InferResponse<ReqLine extends RequestLine, Params> =
  NarrowResponse<
    Operations,
    Request<ReqLine, Params>,
    Operations[ReqLine]['response']
  >;

export type ResponseData<ReqLine extends RequestLine, Params = unknown> =
  Response.Success<ResolveResponse<ReqLine, Params>> extends { readonly body: { readonly data?: infer Data } }
    ? Data
    : never;

export type Config = {
  readonly storeHash: string;
  readonly accessToken: string;
  readonly agent?: Agent
};

export class Client {
  constructor(
    private readonly config: Config,
  ) {}

  private readonly headers = {
    Accept: "application/json",
    "X-Auth-Token": this.config.accessToken,
  };

  send<ReqLine extends NoParamsRequestLine>(requestLine: ReqLine): Promise<InferResponse<ReqLine, {}>>

  send<ReqLine extends RequestLine, Params extends Operation.MinimalInput<Operations[ReqLine]>>(
    requestLine: ReqLine,
    params: Const<Params & Operation.MinimalInput<Operations[ReqLine]>>
  ): Promise<InferResponse<ReqLine, Params>>

  send(requestLine: string, params?: Parameters): Promise<Response>

  async send(requestLine: string, params?: Parameters): Promise<Response> {
    const [method, path] = requestLine.split(" ");
    const queryParams = stringify(params?.query ?? {}, { arrayFormat: "comma" } );
    const queryString = queryParams.length ? `?${queryParams}` : "";
    const res = await fetch(`https://api.bigcommerce.com/stores/${this.config.storeHash}/v3${path}${queryString}`, {
      method,
      headers: {
        ...this.headers,
        'Content-Type': params?.body && 'application/json',
      },
      agent: this.config.agent,
      body: params?.body && JSON.stringify(params.body),
    });
    const body = await res.text();
    return {
      status: res.status,
      body: body && JSON.parse(body),
    };
  }

  get<Path extends NoParamsRequestPath<'GET'>>(path: Path): Promise<ResponseData<`GET ${Path}`, {}> | null>

  get<Path extends RequestPath<'GET'>, Params extends Operation.MinimalInput<Operations[`GET ${Path}`]>>(
    path: Path,
    params: Const<Params & Operation.MinimalInput<Operations[`GET ${Path}`]>>
  ): Promise<ResponseData<`GET ${Path}`, Params> | null>

  async get(path: string, params?: Parameters): Promise<unknown> {
    const res = await this.send(`GET ${path}`, params);
    if (res.status === 404) {
      return null;
    }
    this.checkResponseStatus(`GET ${path}`, res);
    return res.body.data;
  }

  list<Path extends NoParamsListablePath>(path: Path): AsyncIterable<ListItemType<Path, {}>>

  list<Path extends ListablePath, Params extends Operation.MinimalInput<Operations[`GET ${Path}`]>> (
    path: Path,
    params: Const<Params & Operation.MinimalInput<Operations[`GET ${Path}`]>>
  ): AsyncIterable<ListItemType<Path, Params>>

  async *list<T>(path: string, params?: Parameters): AsyncIterable<T> {
    const MAX_PAGES = Number.MAX_SAFE_INTEGER;
    for (let page = 0; page < MAX_PAGES; page++) {
      const res = await this.send(`GET ${path}`, { ...params, query: { ...params?.query, page }});
      this.checkResponseStatus(`GET ${path}`, res);
      yield* res.body.data as T[];
    }
  }

  post<Path extends NoParamsRequestPath<'POST'>>(path: Path): Promise<ResponseData<`POST ${Path}`, {}>>

  post<Path extends RequestPath<'POST'>, Params extends Operation.MinimalInput<Operations[`POST ${Path}`]>>(
    path: Path,
    params: Const<Params & Operation.MinimalInput<Operations[`POST ${Path}`]>>
  ): Promise<ResponseData<`POST ${Path}`, Params>>

  async post(path: string, params?: Parameters): Promise<unknown> {
    const res = await this.send(`POST ${path}`, params);
    this.checkResponseStatus(`POST ${path}`, res);
    return res.body.data;
  }

  put<Path extends NoParamsRequestPath<'PUT'>>(path: Path): Promise<ResponseData<`PUT ${Path}`, {}>>

  put<Path extends RequestPath<'PUT'>, Params extends Operation.MinimalInput<Operations[`PUT ${Path}`]>>(
    path: Path,
    params: Const<Params & Operation.MinimalInput<Operations[`PUT ${Path}`]>>
  ): Promise<ResponseData<`PUT ${Path}`, Params>>

  async put(path: string, params?: Parameters): Promise<unknown> {
    const res = await this.send(`PUT ${path}`, params);
    this.checkResponseStatus(`PUT ${path}`, res);
    return res.body.data;
  }

  delete<Path extends NoParamsRequestPath<'DELETE'>>(path: Path): Promise<ResponseData<`DELETE ${Path}`, {}> | null>

  delete<Path extends RequestPath<'DELETE'>, Params extends Operation.MinimalInput<Operations[`DELETE ${Path}`]>>(
    path: Path,
    params: Const<Params & Operation.MinimalInput<Operations[`DELETE ${Path}`]>>
  ): Promise<ResponseData<`DELETE ${Path}`, Params> | null>

  async delete(path: string, params?: Parameters): Promise<unknown> {
    const res = await this.send(`DELETE ${path}`, params);
    this.checkResponseStatus(`DELETE ${path}`, res);
    return res.body.data;
  }

  private checkResponseStatus(requestLine: string, response: Response): void {
    if (response.status > 299) {
      throw new Error(`ERROR DURING ${requestLine}: ${response.status} - ${response.body}`);
    }
  }
}

type ListItemType<Path extends string, Params = unknown> =
  ResponseData<`GET ${Path}` & RequestLine, Params> extends ReadonlyArray<infer T>
    ? T
    : never;

type ListablePath = ListablePath_<Operations>;

type NoParamsListablePath = ListablePath & NoParamsRequestPath<'GET'>;

type ListablePath_<Ops extends OperationIndex> = {
  [ReqLine in keyof Ops]:
    Response.Success<Ops[ReqLine]['response']> extends { body: { data?: ReadonlyArray<any> } }
      ? ReqLine extends `GET ${infer Path}`
        ? Path
        : never
      : never
}[keyof Ops];

type ResolveResponse<ReqLine extends RequestLine, Params = unknown> =
  unknown extends Params
    ? Operations[ReqLine]['response']
  : Params extends Parameters
    ? InferResponse<ReqLine, Params>
  : never;

type RequestPath<Method extends RequestMethod> =
  RequestLine & `${Method} ${any}` extends `${Method} ${infer Path}` ? Path : never;

type NoParamsRequestPath<Method extends RequestMethod> =
  NoParamsRequestLine & `${Method} ${any}` extends `${Method} ${infer Path}` ? Path : never;
