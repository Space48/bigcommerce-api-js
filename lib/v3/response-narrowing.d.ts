import type { Operation, OperationIndex, Parameters, Request, Response } from "../internal/operation";
export declare type NarrowResponse<Ops extends OperationIndex, Req extends Request, Rep extends Response> = NarrowResponse_<Req['parameters'], Rep, Includes<Ops[Req['requestLine']]>>;
declare type Includes<Op extends Operation> = Op['parameters'] extends {
    query?: {
        include?: infer T;
    };
} ? T extends ReadonlyArray<infer E> ? E : T extends string ? T : never : never;
declare type NarrowResponse_<Params extends Parameters, Rep extends Response, Includes extends string> = Rep extends {
    body: {
        data?: infer Data;
        meta?: infer Meta;
    };
} ? {
    status: Rep['status'];
    body: {
        data: NarrowData<Data, Params['query'], Includes>;
        meta: Meta;
    };
} : Rep;
declare type NarrowData<Data, Query extends Record<string, any> | undefined, Includes extends string> = Data extends ReadonlyArray<infer El> ? ReadonlyArray<NarrowData<El, Query, Includes>> : Required<NarrowFields<Omit<Data, Includes>, Query> & NarrowIncludes<Pick<Data, Includes & keyof Data>, Query>>;
declare type NarrowFields<Data, Query extends Record<string, any> | undefined> = Query extends {
    include_fields: ReadonlyArray<infer F>;
} ? Pick<Data, (F | 'id') & keyof Data> : Query extends {
    exclude_fields: ReadonlyArray<infer F | 'id'>;
} ? Omit<Data, F & keyof Data> : Data;
declare type NarrowIncludes<Data, Query extends Record<string, any> | undefined> = Query extends {
    include: ReadonlyArray<infer F>;
} ? Pick<Data, F & keyof Data> : {};
export {};
