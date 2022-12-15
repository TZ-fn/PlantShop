import { ReactElement } from 'react';
import styles from './AccountDetails.module.scss';

export default function AccountDetails(): ReactElement {
  return (
    <div className={styles.accountDetailsContainer}>
      <p className={styles.userName}>You are logged in as: {}</p>
    </div>
  );
}
