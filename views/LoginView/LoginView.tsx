import { useState } from 'react';
import styles from './LoginView.module.scss';

export default function LoginView() {
  const [isLoginPage, setIsLoginPage] = useState(false);
  return (
    <div className={styles.mainContainer}>
      {isLoginPage && <div className={styles.loginContainer}>login</div>}
      {!isLoginPage && <div className={styles.registerContainer}>register</div>}
    </div>
  );
}
