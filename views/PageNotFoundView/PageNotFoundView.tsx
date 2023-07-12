import type { NextPage } from 'next';
import styles from './PageNotFoundView.module.scss';

const PageNotFoundView: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>404 - Page Not Found</h1>
    </div>
  );
};

export default PageNotFoundView;
