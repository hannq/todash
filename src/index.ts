import * as Utils from './utils';
import * as Tuple from './tuple';
import * as TupleShim from './tuple-shim';
import * as StringUtils from './string';
export * from './utils';
export * from './tuple';
export * from './string';

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

  /**
   * 确保指定类型一定是 string
   */
  export type EnsureString<T> = Utils.EnsureString<T>;

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

  /**
   * 将一个字符串元组的所有元素用指定分隔符连接成一个字符串并返回这个字符串
   */
  export type TupleJoin<StrArr extends string[], Separator extends string = ","> = Tuple.TupleJoin<StrArr, Separator>;

  // ##################### string #####################

  /**
   * 用来判断当前字符串是否以另外一个给定的子字符串开头
   */
  export type StringStartsWith<Str extends string, SearchString extends string> = StringUtils.StringStartsWith<Str, SearchString>;

  /**
   * 用来判断当前字符串是否是以另外一个给定的子字符串“结尾”的
   */
  export type StringEndsWith<Str extends string, SearchString extends string> = StringUtils.StringEndsWith<Str, SearchString>;

  /**
   * 方法从字符串的开头删除空格
   */
  export type StringTrimStart<T extends string> = StringUtils.StringTrimStart<T>;

  /**
   * 从一个字符串的末端移除空白字符
   */
  export type StringTrimEnd<T extends string> = StringUtils.StringTrimEnd<T>;

  /**
   * 从一个字符串的两端删除空白字符
   */
  export type StringTrim<T extends string> = StringUtils.StringTrim<T>;

  /**
   * 构造并返回一个新字符串，该字符串包含被连接在一起的指定数量的字符串的副本
   */
  export type StringRepeat<Str extends string, Count extends number = 0> = StringUtils.StringRepeat<Str, Count>;


  /**
   * 将一个或多个字符串与原字符串连接合并，形成一个新的字符串并返回
   */
  export type StringConcat<Str extends string, StrOrStrArrForConcat extends string | string[] = ""> = StringUtils.StringConcat<Str, StrOrStrArrForConcat>;

  /**
   * 使用指定的分隔符字符串将一个字符串分割成子字符串元组，以一个指定的分割字串来决定每个拆分的位置
   */
  export type StringSplit<Str extends string, Separator extends string = ""> = StringUtils.StringSplit<Str, Separator>;

  // ##################### polyfill #####################
  // ##################### tuple #####################

  /**
   * 返回元组的第一项
   */
  export type ShiftTupleShim<T extends any[]> = TupleShim.ShiftTuple<T>;

  /**
  * 删除元组的第一项，并返回被删除后的元组
  */
  export type TupleByShiftShim<T extends any[]> = TupleShim.TupleByShift<T>;

  /**
  * 将一个类型添加元组的开头，并返回元组
  */
  export type TupleByUnshiftShim<T extends any[], E> = TupleShim.TupleByUnshift<T, E>;

  /**
  * 返回元组的第最后一项
  */
  export type PopTupleShim<T extends any[]> = TupleShim.PopTuple<T>;

  /**
  * 删除元组的最后一项，并返回被删除后的元组
  */
  export type TupleByPopShim<T extends any[]> = TupleShim.TupleByPop<T>;

  /**
  * 将一个类型添加元组的末尾，并返回元组
  */
  export type TupleByPushShim<T extends any[], E> = TupleShim.TupleByPush<T, E>;

  /**
  * 将元组的顺序反转，并返回
  */
  export type TupleByReverseShim<T extends any[]> = TupleShim.TupleByReverse<T>;

  /**
  * 将指定的两个元组首尾相接
  */
  export type TupleByConcatShim<T extends any[], E extends any[]> = TupleShim.TupleByConcat<T, E>;
}

export default Todash;
