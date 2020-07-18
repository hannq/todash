---
order: 1
groupName: "介绍"
name: "快速上手"
---

## 使用步骤

### 1、定义每个页面各自的 `state`

```typescript

// src/views/home/state.ts

const defaultState = {
  /** 标题 */
  title: '首页',
  /** 计数器1 */
  count1: 0,
  /** 计数器2 */
  count2: 0,
}

export default defaultState;
```

### 2、创建各个页面的 `actorsFactory`

```typescript
// src/views/home/actors.ts

import state from "./state";
import { createActorsFactory } from "sim-react-redux";

export default createActorsFactory(state, store => ({
  /**
   * 把 count1 +1
   */
  async addCount1() {
    const { count1 } = store.getState();
    return {
      count1: count1 + 1
    };
  },
  /**
   * 把 count2 +1
   */
  async addCount2() {
    const { count2 } = store.getState();
    return {
      count2: count2 + 1
    };
  }
}));
```

### 3、创建各个页面的 `actorsFactory` 合并，然后创建整个应用的 `store`

```typescript
// src/store.ts

import { applyMiddleware } from 'redux';
import {
  Provider,
  createStore,
  createActorsHook,
  createSelectorHook,
  combineActorsFactories
} from 'sim-react-redux';
import { createLogger } from 'redux-logger';
import homeActorsFactory from '../views/home/actors';
import userActorsFactory from '../views/user/actors';

// 合并 actorsFactory
const rootActorsFactory = combineActorsFactories({
  /** 主页 */
  home: homeActorsFactory,
  /** 用户 */
  user: userActorsFactory,
});

const useActors = createActorsHook(rootActorsFactory);
const useSelector = createSelectorHook(rootActorsFactory);

// 这里直接使用社区已有的 redux 中间件
const logger = createLogger();
const store = createStore(rootActorsFactory, applyMiddleware(logger));

export {
  store,
  useActors,
  useSelector,
  Provider,
  rootActorsFactory
}
```

### 4、把合并后的 `actorsFactory` 和 创建的 `store`, 从顶层注入

```tsx
// src/index.tsx

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { store, Provider, rootActorsFactory } from './store';

const App = () => (
  <Provider actorsFactory={rootActorsFactory} store={store}>
    <BrowserRouter>
      { /** ... */ }
    </BrowserRouter>
  </Provider>
)

render(<App />, document.getElementById('root'));
```

### 5、现在就可以在任意 页面/组件 中使用啦

```tsx
// src/views/home/components/count1/index.tsx

import React, { FC } from 'react';
import { Button } from 'antd';
// 这里可以配置路径别名 如使用 '@store'
import { useActors, useSelector } from '../../../../store';

interface IProps { }
const Count01: FC<IProps> = () => {
  // 注: 这里所有的操作在 vscode 里都会有完备的代码提示和校验
  // ############### 获取数值 ###############
  // 可以直接这么做映射
  const count1 = useSelector(({ home }) => home.count1);
  const count2 = useSelector(({ home }) => home.count2);
  // 也可以使用解构的方法
  // const { count1 } = useSelector(({ home }) => home);

  // ############### 获取方法 ###############
  const { home: { addCount1 } } = useActors();
  // 也可以使用字符串提取的方式
  // 注: 在 vscode 里会有字符串提示直接供选择
  // const addCount1 = useActors('home', 'addCount1');

  return (
    <div style={{ borderTop: '1px solid #ccc', padding: 10  }}>
      <h4>count-01</h4>
      <div>count-01: {count1}</div>
      <div>count-01: {count2}</div>
      <Button onClick={() => addCount1()}>count + 1</Button>
    </div>
  )
}

export default Count01
```

## 在线编辑
<iframe
  src="https://stackblitz.com/edit/sim-react-redux?embed=1&file=index.tsx"
  width="100%"
  height="480"
></iframe>
