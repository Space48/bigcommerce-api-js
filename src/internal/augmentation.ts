import type { Operation, OperationIndex } from "./operation";

export type AugmentOps<Base extends OperationIndex, Augmentation extends OperationIndexAugmentation> = {
  [K in keyof Base]:
    K extends keyof Augmentation
      ? AugmentOp<Base[K], Augmentation[K]>
      : Base[K]
};

type OperationIndexAugmentation = Record<string, OperationAugmentation>;

export type AugmentOp<Base extends Operation, Augmentation extends OperationAugmentation> = {
  [K in keyof Base | keyof Augmentation]: 
    K extends keyof Base & keyof Augmentation & 'parameters'
      ? Augmentation['parameters'] extends ParamAugmentation
        ? AugmentParams<Base['parameters'], Augmentation['parameters']>
        : Base['parameters']
    : K extends keyof Augmentation & 'response'
      ? Augmentation[K]
    : K extends keyof Base
      ? Base[K]
    : never
}

type OperationAugmentation = {
  parameters?: ParamAugmentation
  response?: any
};

export type AugmentParams<Base extends Operation['parameters'], Augmentation extends ParamAugmentation> = {
  [K in keyof Base | keyof Augmentation]: 
    K extends keyof Augmentation & 'query'
      ? AugmentRecord<Exclude<Base['query'], undefined>, Exclude<Augmentation['query'], undefined>>
    : K extends keyof Augmentation & 'body'
      ? Augmentation['body']
    : K extends keyof Base
      ? Base[K]
    : never
}

type ParamAugmentation = {
  query?: Record<string, any>
  body?: any
};

type AugmentRecord<Base, Augmentation> = 1 extends 0 ? never : {
  [K in (keyof Base) | (keyof Augmentation)]: 
    K extends keyof Augmentation ? Augmentation[K]
    : K extends keyof Base ? Base[K]
    : never
}
