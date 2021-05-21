export declare type RequestMethod = 'DELETE' | 'GET' | 'PATCH' | 'POST' | 'PUT';
export declare type Request<ReqLine extends RequestLine = RequestLine, Params extends Parameters = Parameters> = {
    readonly requestLine: ReqLine;
    readonly parameters: Params;
};
export declare type RequestLine = `${RequestMethod} ${string}`;
export declare type Parameters = {
    readonly path?: Record<string, any>;
    readonly query?: any;
    readonly body?: any;
    readonly header?: Record<string, any>;
};
export declare type Response = {
    status: number | string;
    body?: any;
};
export declare namespace Response {
    type Success<T extends Response | Operation> = T extends {
        status: 200 | 201 | 204;
    } ? T : T extends Operation ? Success<T['response']> : never;
}
export declare type Operation = {
    readonly parameters: Request['parameters'];
    readonly response: Response;
};
export declare namespace Operation {
    export type MinimalInput<Op extends Operation> = InputParameters<Op['parameters']>;
    type InputParameters<OpParams extends Operation['parameters']> = MakeEmptyObjectOptional<{
        [K in keyof OpParams]: K extends 'query' ? Partial<OpParams[K]> : K extends 'header' ? Omit<OpParams[K], 'Accept' | 'Content-Type'> : OpParams[K];
    }>;
    export {};
}
export declare type OperationIndex = Record<string, Operation>;
export declare namespace OperationIndex {
    type FilterOptionalParams<Ops extends OperationIndex> = {
        [K in keyof Ops as {} extends Operation.MinimalInput<Ops[K]> ? K : never]: Ops[K];
    };
}
declare type MakeEmptyObjectOptional<T> = 1 extends 0 ? never : ({
    readonly [K in keyof T as {} extends T[K] ? K : never]?: T[K];
} & {
    readonly [K in keyof T as {} extends T[K] ? never : K]: T[K];
});
export declare function resolvePath(parameterizedPath: string, pathParams: Record<string, any>): string;
export {};
