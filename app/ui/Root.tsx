import React from 'react';
import styles from '@/app/styles/ui/Root.module.scss';

type Props = {
  isMobile: boolean;
  children: React.ReactNode;
};

function Root(props: Props) {
  const { isMobile, children } = props;

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.content}>{children}</div>
      </main>
    </div>
  );
}

export default Root;
