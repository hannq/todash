/**
 * tuple 工具方法的 polyfill 版本
 * 4.0 以下版本可用
 */

import {
  UnionByPop,
  PopUnion,
  AssignByOwnKey,
  EnsureArray
} from './utils';

/**
 * 返回元组的第一项
 */
export type ShiftTuple<T extends any[]> = T[0];

/**
 * 删除元组的第一项，并返回被删除后的元组
 *
 */
export type TupleByShift<T extends any[]> = ((...params: T) => any) extends ((param1: any, ...rest: infer P) => any) ? P : never;

/**
 * 将一个类型添加元组的开头，并返回元组
 */
export type TupleByUnshift<T extends any[], E> = ((param1: E, ...params: T) => any) extends ((...params: infer P) => any) ? P : never;

/**
 * 【递归地】删除元组的第最后一项，并返回
 */
type _PopTupleRecursion<T extends any[], R = never> = {
  0: R;
  1: _PopTupleRecursion<TupleByShift<T>, ShiftTuple<T>>;
}[T extends [] ? 0 : 1];

/**
 * 返回元组的第最后一项
 */
export type PopTuple<T extends any[]> = _PopTupleRecursion<T>;

/**
 * 删除元组的最后一项，并返回被删除后的元组
 */
export type TupleByPop<T extends any[]> = AssignByOwnKey<TupleByShift<T>, T>;

/**
 * 将一个类型添加元组的末尾，并返回元组
 */
export type TupleByPush<T extends any[], E> = AssignByOwnKey<TupleByUnshift<T, any>, T & { [K: string]: E }>;

/**
 * 【递归地】将元组的顺序反转，并返回
 */
type _ReverseTupleRecursion<T extends any[], R = []> = {
  0: R;
  1: _ReverseTupleRecursion<TupleByShift<T>, TupleByUnshift<EnsureArray<R>, ShiftTuple<T>>>;
}[T extends [] ? 0 : 1];

/**
 * 将元组的顺序反转，并返回
 */
export type TupleByReverse<T extends any[]> = _ReverseTupleRecursion<T>;

/**
 * 【递归地】将元组的顺序反转，并返回
 */
type _TupleByConcatRecursion<T extends any[], E extends any[], R = T> = {
  0: R;
  1: _TupleByConcatRecursion<T, TupleByShift<E>, EnsureArray<TupleByPush<EnsureArray<R>, ShiftTuple<E>>>>;
}[E extends [] ? 0 : 1];

/**
 * 将指定的两个元组首尾相接
 */
export type TupleByConcat<T extends any[], E extends any[]> = _TupleByConcatRecursion<T, E>;

/**
 * 【递归地】 将 union 转化为 元组
 * */
type _Union2TupleRecursion<T, R extends any[] = []> = {
  0: R;
  1: _Union2TupleRecursion<UnionByPop<T>, EnsureArray<TupleByUnshift<R, PopUnion<T>>>>;
}[[T] extends [never] ? 0 : 1];

/**
 * 将 union 转化为 元组
 * */
export type Union2Tuple<T> = _Union2TupleRecursion<T>
