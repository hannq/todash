import React from 'react';
import styles from './index.module.less';
import { Anchor } from 'antd';
const { Link } = Anchor;
export interface IAnchorLink {
  depth: number;
  value: string;
  id: string;
}

interface IProps {
  content: string;
  anchorList: IAnchorLink[];
}

const Content: React.SFC<IProps> = ({ content, anchorList }) => {
  return (
    <>
      <article className={styles.contentWrappper}>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </article>
      {/* <Anchor className={styles.anchor}>
        {anchorList.map(({ id }, index) => <Link key={`${id}-${index}`} href={`#${id}`} title={id} />)}
      </Anchor> */}
    </>
  )
}

export default Content
