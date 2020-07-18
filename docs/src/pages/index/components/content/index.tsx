import React from 'react';
import { Link, graphql } from 'gatsby';
import Img, { FluidObject } from "gatsby-image";
import { Button } from 'antd';
import simReactReduxImg from '../../../../images/todash.png';
import styles from './index.module.less';

interface IProps { }

const Content: React.SFC<IProps> = (props) => {
  return (
    <article className={styles.wrapper}>
      <div className={styles.titleWrapper}>
        <img className={styles.logo} src={simReactReduxImg} alt="logo" />
        <h1 className={styles.title}>Todash</h1>
      </div>
      <h2 className={styles.subtitle}>Official React bindings for Todash</h2>
      <Button
        className={styles.startBtn}
        type='primary'
      >
        <Link to={`/introduction/quick-start`}>
          开始使用
        </Link>
      </Button>
    </article>
  )
}

export default Content
