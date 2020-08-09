import React from 'react';
import { Link } from 'gatsby';
import styles from './index.module.less';
import simReactReduxImg from '../../../../images/todash.png';
import { version } from '../../../../../../package.json';
import { GithubFilled } from '@ant-design/icons';
// import Img from "gatsby-image";
interface IProps { }

const Footer: React.SFC<IProps> = () => {
  return (
    <section className={styles.wrapper}>
      <header className={styles.header}>
        <Link className={styles.linkWrapper} to={`/`}>
          <div className={styles.logoWrapper}>
            <img className={styles.logo} src={simReactReduxImg} alt="logo"/>
          </div>
          <div className={styles.textWrapper}>
            <h1 className={styles.textTitle}>Todash {version}</h1>
            <h4 className={styles.textSubtitle}>是一个 类型推导 工具库，旨在帮助你快速方便的编写具备类型推导的 TypeScript 代码。</h4>
          </div>
        </Link>
        <div className={styles.rightWrapper}>
          <Link className={styles.changeLog} to={`/change-log`}>更新日志</Link>
          <a href="https://github.com/hannq/todash"><GithubFilled className={styles.githubIcon} /></a>
        </div>
      </header>
    </section>
  )
}

export default Footer
