interface Action<T> {
  payload?: T;
  type: string;
}

class EffectModule {
  count = 1;
  message = "hello!";

  delay(input: Promise<number>) {
    return input.then(i => ({
      payload: `hello ${i}!`,
      type: 'delay'
    }));
  }

  setMessage(action: Action<Date>) {
    return {
      payload: action.payload!.getMilliseconds(),
      type: "set-message"
    };
  }
}

type plunkFunc<T extends Object> = Pick<T, { [K in keyof T]: T[K] extends Function ? K : never }[keyof T]>;
type plunkPromise<T> = T extends Promise<infer P> ? P : T;
type plunkAction<T> = T extends Action<infer P> ? P : T;

type mapFunc<T extends { [x: string]: Function }> = {
  [K in keyof T]: T[K] extends ((param: infer P) => infer R) ? (action: plunkAction<plunkPromise<P>>) => Action<plunkAction<plunkPromise<R>>> : never
}

type asdf = mapFunc<plunkFunc<EffectModule>>
