import React from 'react';
import SEO from '../../components/seo';
import Header from './components/header';
import Footer from './components/footer';
import SideBar, { IProps as ISideBarProps } from './components/side-bar';
import Content, { IAnchorLink } from './components/content';
import '@primer/css/core/index.scss';
import 'prismjs/themes/prism.css';
import styles from './index.module.less';

interface IPathContext extends ISideBarProps {
  /** 当前页面的内容 */
  content: string;
  /** 当前页面的标题 */
  title: string;
  /** 锚点列表 */
  anchorList: IAnchorLink[];
}

interface IProps {
  /** 通过 graphql 注入的数据 */
  data: any;
  /** 创建页面时注入的内容 */
  pathContext: IPathContext;
}

const IndexPage: React.SFC<IProps> = (props) => {
  const { pathContext: {
    title,
    content,
    anchorList,
    currentPath,
    menuList
  } } = props;

  return (
    <>
      <SEO title={title} />
      <Header />
      <SideBar
        currentPath={currentPath}
        menuList={menuList}
      />
      <Content
        anchorList={anchorList}
        content={content}
      />
      <Footer />
    </>
  )
}

export default IndexPage
