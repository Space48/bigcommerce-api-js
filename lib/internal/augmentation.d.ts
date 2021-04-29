import type { Operation, OperationIndex } from "./operation";
export declare type AugmentOps<Base extends OperationIndex, Augmentation extends OperationIndexAugmentation> = {
    [K in keyof Base]: K extends keyof Augmentation ? AugmentOp<Base[K], Augmentation[K]> : Base[K];
};
declare type OperationIndexAugmentation = Record<string, OperationAugmentation>;
export declare type AugmentOp<Base extends Operation, Augmentation extends OperationAugmentation> = {
    [K in keyof Base | keyof Augmentation]: K extends keyof Base & keyof Augmentation & 'parameters' ? Augmentation['parameters'] extends ParamAugmentation ? AugmentParams<Base['parameters'], Augmentation['parameters']> : Base['parameters'] : K extends keyof Augmentation & 'response' ? Augmentation[K] : K extends keyof Base ? Base[K] : never;
};
declare type OperationAugmentation = {
    parameters?: ParamAugmentation;
    response?: any;
};
export declare type AugmentParams<Base extends Operation['parameters'], Augmentation extends ParamAugmentation> = {
    [K in keyof Base | keyof Augmentation]: K extends keyof Augmentation & 'query' ? AugmentRecord<Exclude<Base['query'], undefined>, Exclude<Augmentation['query'], undefined>> : K extends keyof Augmentation & 'body' ? Augmentation['body'] : K extends keyof Base ? Base[K] : never;
};
declare type ParamAugmentation = {
    query?: Record<string, any>;
    body?: any;
};
declare type AugmentRecord<Base, Augmentation> = 1 extends 0 ? never : {
    [K in (keyof Base) | (keyof Augmentation)]: K extends keyof Augmentation ? Augmentation[K] : K extends keyof Base ? Base[K] : never;
};
export {};
