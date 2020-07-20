/**
 * 用来替换需要 extends any 类型的场景
 * @doc [TypeScript 3.9: Type Parameters That Extend any No Longer Act as any](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-9.html#type-parameters-that-extend-any-no-longer-act-as-any)
 */
export type AnyObject = { [K in keyof any]: any; };

/**
 * 将 union 转换成 intersection
 */
export type CombineUnion<T> = (T extends any ? (param: T) => any : never) extends (param: infer P) => any ? P : never;

/**
 * 将 union 转换成 intersection
 * 与 CombineUnion 区别在于： PureCombineUnion 让合并之后的类型更加整洁
 */
export type PureCombineUnion<T extends object> = Pick<CombineUnion<T>, keyof CombineUnion<T>>;

/**
 * 将 union类型 转换为 类型重载
 */
export type OverloadUnion<T> = CombineUnion<T extends any ? { (param: T): any } : never>;

/**
 * 将 union 类型的最后一项弹出
 */
export type PopUnion<T> = OverloadUnion<T> extends (param: infer P) => any ? P : never;

/**
 * 将 union 类型的最后一项弹出后，将剩余的部分返回
 */
export type UnionByPop<T> = Exclude<T, PopUnion<T>>;

/**
 * 把自身（source）已有的属性 用 目标（target）的同名属性覆盖
 */
export type AssignByOwnKey<S, T extends AnyObject> = { [K in keyof S]: T[K] };

/**
 * 将 数组/元组 转化为 union
 * */
export type Array2Union<T extends any[]> = T[number];

/**
 * 确保指定类型一定是 数组/元组
 */
export type EnsureArray<T> = T extends any[] ? T : [];
