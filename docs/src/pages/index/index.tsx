import React from 'react';
import SEO from '../../components/seo';
import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';
import styles from './index.module.less';

interface IProps { }

const IndexPage: React.SFC<IProps> = () => {
  return (
    <div className={styles.wrapper}>
      <SEO title="首页" />
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

export default IndexPage
