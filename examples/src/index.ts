import _ from 'todash';


type testTuple = ['vue', 'react', 'angular', { vue: string }, { react: number }, { angular: boolean }];

type ccc = { a: string } & { a: string | boolean }

Object.assign

type cc = _.TupleByConcat<testTuple, ['hello', 'world']>

// A = { a: string } | { b: number }
// A <= B
//  >>> (B -> T) <= (A -> T)

interface NodeEle<T> {
  name: string;
  age: number;
  isAdmin: boolean;
  ext: T;
  children?: NodeEle<T>[]
}

const nodeEle: NodeEle<string> = {
  name: '平平无奇古天乐',
  age: 20,
  isAdmin: false,
  ext: '我是字符串',
  children: [
    {
      name: '一无所有王建林',
      age: 55,
      isAdmin: true,
      ext: ''
    },
    {
      name: '不知妻美刘强东',
      age: 45,
      isAdmin: false,
      ext: ''
    }
  ]
}

function getDeepEle (nodeEle: NodeEle<string>[], path: number[]) {
  const initVal = nodeEle[path.shift()]
  return path.reduce((acc, current) => acc.children[current], initVal)
}

console.log(getDeepEle([nodeEle], [0, 1]));

class Animal {
  /**
   *
   */
  eat() { console.log('eat'); }
}


class Dog extends Animal {
  bark() { console.log('bark ~~'); }
}


type C = typeof Animal


// import AliasAnimalType = typeof Animal

var AliasAnimal: C = Animal

const animalArr: Animal[] = [new Animal()];
const dogArr: Animal[] = [new Animal()];

// animalArr = dogArr

// dogArr = animalArr


const symbolA = Symbol();
const symbolB = Symbol();

interface SymbolTest {
  [symbolA]: string;
  [symbolB]: number;
}


var cc: SymbolTest;

cc[symbolA]

type ccddd = keyof SymbolTest

type keyofAny = keyof any;
type keyofAny2 = keyof unknown;
