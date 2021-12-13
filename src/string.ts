/**
 * base on TS 4.1 template literal
 */

import { EnsureString } from './utils';
import { TupleJoin } from './tuple';

/**
 * 用来判断当前字符串是否以另外一个给定的子字符串开头
 */
export type StringStartsWith<Str extends string, SearchString extends string> = Str extends `${SearchString}${string}` ? Str : never;

/**
 * 用来判断当前字符串是否是以另外一个给定的子字符串“结尾”的
 */
export type StringEndsWith<Str extends string, SearchString extends string> = Str extends `${string}${SearchString}` ? Str : never;

/**
 * 方法从字符串的开头删除空格
 */
export type StringTrimStart<T extends string> = T extends ` ${infer Rest}` ? StringTrimStart<Rest> : T;

/**
 * 从一个字符串的末端移除空白字符
 */
export type StringTrimEnd<T extends string> = T extends `${infer Rest} ` ? StringTrimEnd<Rest> : T;

/**
 * 从一个字符串的两端删除空白字符
 */
export type StringTrim<T extends string> = StringTrimEnd<StringTrimStart<T>>;

/**
 *【递归地】构造并返回一个新字符串，该字符串包含被连接在一起的指定数量的字符串的副本
 * */
type _RepeatRecursion<
  Str extends string,
  Count extends number,
  Acc extends string = '',
  CountArr extends any[] = []
> = CountArr['length'] extends Count ? Acc : _RepeatRecursion<Str, Count, `${Acc}${Str}`, [...CountArr, never]>;

/**
 * 构造并返回一个新字符串，该字符串包含被连接在一起的指定数量的字符串的副本
 */
export type StringRepeat<Str extends string, Count extends number = 0> = _RepeatRecursion<Str, Count>;

/**
 * 将一个或多个字符串与原字符串连接合并，形成一个新的字符串并返回
 */
export type StringConcat<Str extends string, StrOrStrArrForConcat extends string | (string[]) = ''> = StrOrStrArrForConcat extends string ? `${Str}${StrOrStrArrForConcat}` : StrOrStrArrForConcat extends string[] ? `${Str}${EnsureString<TupleJoin<StrOrStrArrForConcat, ''>>}` : Str;

/**
 *【递归地】方法使用指定的分隔符字符串将一个String对象分割成子字符串数组，以一个指定的分割字串来决定每个拆分的位置
 * */
type _SplitRecursion<Str extends string, Separator extends string = '', Result extends string[] = []> = Str extends `${infer Chunk}${Separator}${infer Rest}` ? _SplitRecursion<Rest, Separator, [...Result, Chunk]> : [...Result, ...(Str extends '' ? [] : [Str])];

/**
 * 使用指定的分隔符字符串将一个字符串分割成子字符串元组，以一个指定的分割字串来决定每个拆分的位置
 */
export type StringSplit<Str extends string, Separator extends string = ''> = _SplitRecursion<Str, Separator>;
