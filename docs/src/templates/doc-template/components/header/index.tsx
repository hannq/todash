import React from 'react';
import { Link } from 'gatsby';
import styles from './index.module.less';
import simReactReduxImg from '../../../../images/todash.png';
import { version } from '../../../../../../package.json';
import { GithubFilled } from '@ant-design/icons';
// import Img from "gatsby-image";
interface IProps {

}

const Footer: React.SFC<IProps> = () => {
  return (
    <section className={styles.wrapper}>
      <header className={styles.header}>
        <Link className={styles.linkWrapper} to={`/`}>
          <img className={styles.logo} src={simReactReduxImg} alt="logo"/>
          <span className={styles.text}>Sim React Redux {version}</span>
        </Link>
        <a href="https://github.com/hannq/todash"><GithubFilled className={styles.githubIcon} /></a>
      </header>
    </section>
  )
}

export default Footer
