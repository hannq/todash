import * as Utils from './utils';
import * as Tuple from './tuple';
export * from './utils';
export * from './tuple';

/**
 * TypeScript 类型辅助工具
 * 类型 之于 Todash，数组之于 lodash
 * */
namespace Todash {
  // ##################### utils #####################

  /**
   * 用来替换需要 extends any 类型的场景
   * @doc [TypeScript 3.9: Type Parameters That Extend any No Longer Act as any](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-9.html#type-parameters-that-extend-any-no-longer-act-as-any)
   */
  export type AnyObject = Utils.AnyObject;

  /**
   * 将 union 转换成 intersection
   */
  export type CombineUnion<T> = Utils.CombineUnion<T>;

  /**
   * 将 union 转换成 intersection
   * 与 CombineUnion 区别在于： PureCombineUnion 让合并之后的类型更加整洁
   */
  export type PureCombineUnion<T extends object> = Utils.PureCombineUnion<T>;

  /**
   * 将 union类型 转换为 类型重载
   */
  export type OverloadUnion<T> = Utils.OverloadUnion<T>;

  /**
   * 将 union 类型的最后一项弹出
   */
  export type PopUnion<T> = Utils.PopUnion<T>;

  /**
   * 将 union 类型的最后一项弹出后，将剩余的部分返回
   */
  export type UnionByPop<T> = Utils.UnionByPop<T>;

  /**
   * 把自身（source）已有的属性 用 目标（target）的同名属性覆盖
   */
  export type AssignByOwnKey<S, T> = Utils.AssignByOwnKey<S, T>;

  /**
   * 将 union 转化为 元组
   */
  export type Union2Tuple<T> = Tuple.Union2Tuple<T>;

  /**
   * 从对象中删除指定值类型的字段
   */
  export type OmitBy<T, V> = Utils.OmitBy<T, V>;

  /**
   * 从对象中删除可选字段
   */
  export type OmitOptional<T> = Utils.OmitOptional<T>;

  /**
   * 从对象中删除非指定值类型的字段
   */
  export type FilterBy<T, V> = Utils.FilterBy<T, V>;

  // ##################### tuple #####################

  /**
   * 返回元组的第一项
   */
  export type ShiftTuple<T extends any[]> = Tuple.ShiftTuple<T>;

  /**
   * 删除元组的第一项，并返回被删除后的元组
   */
  export type TupleByShift<T extends any[]> = Tuple.TupleByShift<T>;

  /**
   * 将一个类型添加元组的开头，并返回元组
   */
  export type TupleByUnshift<T extends any[], E> = Tuple.TupleByUnshift<T, E>;

  /**
   * 返回元组的第最后一项
   */
  export type PopTuple<T extends any[]> = Tuple.PopTuple<T>;

  /**
   * 删除元组的最后一项，并返回被删除后的元组
   */
  export type TupleByPop<T extends any[]> = Tuple.TupleByPop<T>;

  /**
   * 将一个类型添加元组的末尾，并返回元组
   */
  export type TupleByPush<T extends any[], E> = Tuple.TupleByPush<T, E>;

  /**
   * 将元组的顺序反转，并返回
   */
  export type TupleByReverse<T extends any[]> = Tuple.TupleByReverse<T>;

  /**
   * 将指定的两个元组首尾相接
   */
  export type TupleByConcat<T extends any[], E extends any[]> = Tuple.TupleByConcat<T, E>;

}

export default Todash;
