// TODO： 待解决

const aaa = {
  a: {
    b: {
      c: {
        d: 'hello world',
      },
    },
  },
};

type ObtainKeyPathValue<
  T extends Record<string, any>,
  KP extends string,
> = KP extends `${infer K}.${infer Rest}`
  ? ObtainKeyPathValue<T[K], Rest>
  : KP extends `${infer PK}`
  ? T[PK]
  : T;

type ValidKeyType<T extends unknown> = T extends string ? T : never;

type ConcatPath<P extends string, C extends string> = [P] extends [never]
  ? never
  : [C] extends [never]
  ? P
  : `${P}.${C}`;

type LoopObtainKeyPath<T extends Record<string, any>, Result extends string = never> = {
  0: Result;
  1: LoopObtainKeyPath<
    T[keyof T] extends Record<string, any> ? T[keyof T] : never,
    | Result
    | ([Result] extends [never] ? ValidKeyType<keyof T> : never)
    | ConcatPath<Result, ValidKeyType<keyof T>>
  >;
}[[T] extends [never] ? 0 : 1];

type TA = {
  a: {
    b: string;
  };
};

type BBBBB = LoopObtainKeyPath<typeof aaa>;

type ccc = 'a' | 'b' | never;

type DDD = never | `a.${ccc}` | 'a' | 'b';

type AAAAAAA = ConcatPath<never, DDD>;

function get<T extends Record<string, any>, KP extends LoopObtainKeyPath<T>>(
  obj: T,
  keyPath: KP,
): KP {
  return null as any;
}

// const aaaaaaa = get(aaa, '');
