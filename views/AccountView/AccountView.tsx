import Image from 'next/image';
import { RootState } from 'store/store';
import { useSelector } from 'react-redux';
import AccountIcon from 'public/icons/loginIcon.svg';
import styles from './AccountView.module.scss';
import AccountDetails from 'views/AccountView/AccountDetails/AccountDetails';

export default function AccountView() {
  const isUserAuthorised = useSelector((state: RootState) => state.authorisation.isUserAuthorised);

  return (
    <div className={styles.accountContainer}>
      <div className={styles.accountHeader}>
        <Image src={AccountIcon.src} width={80} height={80} />
        <h2>Account</h2>
      </div>
      {isUserAuthorised ? (
        <AccountDetails />
      ) : (
        <p className={styles.notLoggedIn}>Please log in first.</p>
      )}
    </div>
  );
}
