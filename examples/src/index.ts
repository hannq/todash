import _ from 'todash';


type testTuple = ['vue', 'react', 'angular', { vue: string }, { react: number }, { angular: boolean }];

type ccc = { a: string } & { a: string | boolean }

Object.assign

type cc = _.TupleByConcat<testTuple, ['hello', 'world']>
