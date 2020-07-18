import React, { Children } from 'react';
import { Link, graphql } from 'gatsby';
import styles from './index.module.less';
import { Menu } from 'antd';
const { ItemGroup, Item } = Menu;

interface IMenuChild {
  /** 子菜单路径 */
  path: string;
  /** 菜单组名称 */
  groupName: string;
  /** 子菜单名称 */
  name: string;
}

interface IMenu {
  /** 菜单组名称 */
  groupName: string;
  /** 子菜单 */
  children: IMenuChild[];
}

export interface IProps {
  /** 当前所属路径 */
  currentPath: string;
  /** 菜单列表 */
  menuList: IMenu[];
}

const Footer: React.SFC<IProps> = (props) => {
  const {
    currentPath,
    menuList
  } = props;
  return (
    <div className={styles.sideBarWrapper}>
      <Menu style={{ minHeight: '100%' }} selectedKeys={[currentPath]}>
        {menuList.map(({ groupName, children }) => (
          <ItemGroup key={groupName} title={groupName}>
            {children.map(({ name, path }) => <Item key={path}><Link to={path}>{name}</Link></Item>)}
          </ItemGroup>
        ))}
      </Menu>
    </div>
  )
}

export default Footer
