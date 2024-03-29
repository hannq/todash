import {
  UnionByPop,
  PopUnion,
  EnsureString
} from './utils';

/**
 * 返回元组的第一项
 */
export type ShiftTuple<T extends any[]> = T[0];

/**
 * 删除元组的第一项，并返回被删除后的元组
 */
export type TupleByShift<T extends any[]> = T extends [any, ...infer Rest] ? Rest : [];

/**
 * 将一个类型添加元组的开头，并返回元组
 */
export type TupleByUnshift<T extends any[], E> = [E, ...T];

/**
 * 将一个类型添加元组的末尾，并返回 暴力枚举后的 元组联合类型
 */
export type TupleByUnionUnshift<T extends any[], E> = (E extends any ? (() => TupleByUnshift<T, E>) : never) extends () => infer R ? R : never;

/**
 * 返回元组的第最后一项
 */
export type PopTuple<T extends any[]> = T extends [...any[], infer Tail] ? Tail : never;

/**
 * 删除元组的最后一项，并返回被删除后的元组
 */
export type TupleByPop<T extends any[]> = T extends [...infer Head, any] ? Head : [];

/**
 * 将一个类型添加元组的末尾，并返回元组
 */
export type TupleByPush<T extends any[], E> = [...T, E];

/**
 * 将一个类型添加元组的末尾，并返回 暴力枚举后的 元组联合类型
 */
export type TupleByUnionPush<T extends any[], E> = (E extends any ? (() => TupleByPush<T, E>) : never) extends () => infer R ? R : never;

/**
 * 【递归地】将元组的顺序反转，并返回
 */
type _ReverseTupleRecursion<T extends any[], R extends any[] = []> = T extends [] ? R : _ReverseTupleRecursion<TupleByPop<T>, TupleByPush<R, PopTuple<T>>>

/**
 * 将元组的顺序反转，并返回
 */
export type TupleByReverse<T extends any[]> = _ReverseTupleRecursion<T>;

/**
 * 将指定的两个元组首尾相接
 */
export type TupleByConcat<T extends any[], E extends any[]> = [...T, ...E];

/**
 *【递归地】将一个元组的所有元素连接成一个字符串并返回这个字符串
 */
type _JoinRecursion<
  Acc extends string,
  Separator extends string,
  AccArr extends string[],
> = AccArr['length'] extends 0 ? Acc : _JoinRecursion<`${Acc}${AccArr['length'] extends 0 ? '' : Separator}${EnsureString<ShiftTuple<AccArr>>}`, Separator, TupleByShift<AccArr>>;

/**
 * 将一个字符串元组的所有元素用指定分隔符连接成一个字符串并返回这个字符串
 */
export type TupleJoin<StrArr extends string[], Separator extends string = ','> = (StrArr extends any ? (() => _JoinRecursion<EnsureString<ShiftTuple<StrArr>>, Separator, TupleByShift<StrArr>>) : never) extends () => infer R ? R : never;

/**
 * 【递归地】 将 union 转化为 元组
 * */
type _Union2TupleRecursion<T, R extends any[] = []> = [T] extends [never] ? R : _Union2TupleRecursion<UnionByPop<T>, TupleByUnshift<R, PopUnion<T>>>;

/**
 * 将 union 转化为 元组
 * */
export type Union2Tuple<T> = _Union2TupleRecursion<T>
