import { RootState } from 'store/store';
import { useSelector } from 'react-redux';
import styles from './AccountView.module.scss';

export default function AccountView() {
  const isUserAuthorised = useSelector((state: RootState) => state.authorisation.isUserAuthorised);

  return (
    <div className={styles.accountContainer}>
      <h2 className={styles.accountHeader}>Account</h2>
      {isUserAuthorised ? '' : <p className={styles.notLoggedIn}>Please log in first...</p>}
    </div>
  );
}
