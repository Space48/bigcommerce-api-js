import type { OperationIndex, Request, Response } from "../internal/operation";

export type NarrowResponse<Ops extends OperationIndex, Req extends Request, Rep extends Response> = Rep;
