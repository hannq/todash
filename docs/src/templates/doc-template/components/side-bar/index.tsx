import type { DataNode } from 'antd/lib/tree';
import React, { useMemo, useState } from 'react';
import { Link } from 'gatsby';
import { Tree, Input } from 'antd';
import styles from './index.module.less';
const { Search } = Input;

export interface IProps {
  /** 当前所属路径 */
  currentPath: string;
  /** 菜单列表 */
  menuList: DataNode[];
}

const { showLine } = {
  showLine: { showLeafIcon: false },
}

const SideBar: React.SFC<IProps> = (props) => {
  const {
    currentPath,
    menuList
  } = props;

  const selectedKeys = useMemo(() => [currentPath], [currentPath]);
  const [keywords, setKeywords] = useState('');
  const treeData = useMemo(() => menuList.map(({ title, children, ...rest }) => ({
    ...rest,
    title: <h4 className={styles.treeRoot}>{title}</h4>,
    children: children.filter(({ title }) => (title as string).includes(keywords)).map(({ key, title, ...restChild }) => ({
      ...restChild,
      key,
      title: <Link className={styles.link} to={key as string}>{title}</Link>
    }))
  })), [menuList, keywords]);

  return (
    <div className={styles.sideBarWrapper}>
      <div className={styles.searchWrapper}><Search onSearch={setKeywords} /></div>
      <div className={styles.treeWrapper}>
        <Tree
          showLine={showLine}
          showIcon={false}
          switcherIcon={null}
          blockNode={true}
          defaultExpandAll={true}
          selectedKeys={selectedKeys}
          treeData={treeData}
        />
      </div>
    </div>
  )
}


export default SideBar
