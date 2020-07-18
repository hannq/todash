import React from 'react';
import styles from './index.module.less';

interface IProps { }

const Footer: React.SFC<IProps> = () => {
  return (
    <footer className={styles.footer}>
      <span>Copyright&nbsp;</span>
      <a href="https://github.com/hannq/sim-react-redux">&copy;Sim React Redux&nbsp;</a>
      <span>的使用文档&nbsp;{new Date().getFullYear()}</span>
    </footer>
  )
}

export default Footer
