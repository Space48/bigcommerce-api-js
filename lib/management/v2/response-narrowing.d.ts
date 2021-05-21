import type { OperationIndex, Request, Response } from "../../internal/operation";
/**
 * This module contains functionality for narrowing the response type based on input parameters.
 *
 * See v3 for examples of how this can be done.
 */
export declare type NarrowResponse<Ops extends OperationIndex, Req extends Request, Rep extends Response> = Rep;
