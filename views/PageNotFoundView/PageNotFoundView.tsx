import Link from 'next/link';
import styles from './PageNotFoundView.module.scss';

const PageNotFoundView = () => {
  return (
    <div className={styles.mainContainer}>
      <h2 className={styles.sectionHeader}>404 - Page Not Found</h2>
      <p className={styles.message}>The address you are trying to reach doesn't exist. ☹️</p>
      <p className={styles.message}>
        Return to the{' '}
        <Link href={'/'} passHref>
          <span className={styles.link}>main page</span>
        </Link>
        .
      </p>
    </div>
  );
};

export default PageNotFoundView;
