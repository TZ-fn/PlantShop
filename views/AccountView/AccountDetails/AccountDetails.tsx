import { RootState } from 'store/store';
import { useSelector } from 'react-redux';
import styles from './AccountDetails.module.scss';

export default function AccountDetails() {
  const username = useSelector((state: RootState) => state.authorisation.username);
  console.log(username);
  return (
    <div className={styles.accountDetailsContainer}>
      <p className={styles.userName}>You are logged in as: {username}</p>
    </div>
  );
}
