export type Const<A> =
  | (A extends Narrowable ? A : never)
  | ({ [K in keyof A]: Const<A[K]> });

type Narrowable =
  | string
  | number
  | bigint
  | boolean
  | readonly any[];

export type RemoveStart<Start extends string, Subject extends string> =
  Subject extends `${Start}${infer End}` ? End : never
