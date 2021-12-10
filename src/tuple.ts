import {
  UnionByPop,
  PopUnion,
} from './utils';

/**
 * 返回元组的第一项
 */
export type ShiftTuple<T extends any[]> = T[0];

/**
 * 删除元组的第一项，并返回被删除后的元组
 */
export type TupleByShift<T extends any[]> = T extends [any, ...infer Rest] ? Rest : never;

/**
 * 将一个类型添加元组的开头，并返回元组
 */
export type TupleByUnshift<T extends any[], E> = [E, ...T];

/**
 * 返回元组的第最后一项
 */
export type PopTuple<T extends any[]> = T extends [...any[], infer Tail] ? Tail : never;

/**
 * 删除元组的最后一项，并返回被删除后的元组
 */
export type TupleByPop<T extends any[]> = T extends [...infer Head, any] ? Head : never;

/**
 * 将一个类型添加元组的末尾，并返回元组
 */
export type TupleByPush<T extends any[], E> = [...T, E];

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
 * 【递归地】 将 union 转化为 元组
 * */
type _Union2TupleRecursion<T, R extends any[] = []> = [T] extends [never] ? R : _Union2TupleRecursion<UnionByPop<T>, TupleByUnshift<R, PopUnion<T>>>;

/**
 * 将 union 转化为 元组
 * */
export type Union2Tuple<T> = _Union2TupleRecursion<T>
