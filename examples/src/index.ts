import _ from 'todash';


type testTuple = ['vue', 'react', 'angular', { vue: string }, { react: number }, { angular: boolean }];

type cc = _.TupleByConcat<testTuple, ['hello', 'world']>
