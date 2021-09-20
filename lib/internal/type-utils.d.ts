export declare type Const<A> = (A extends Narrowable ? A : never) | ({
    [K in keyof A]: Const<A[K]>;
});
declare type Narrowable = string | number | bigint | boolean | readonly any[];
export declare type RemoveStart<Start extends string, Subject extends string> = Subject extends `${Start}${infer End}` ? End : never;
export {};
