import Input from 'components/Input/Input';
import { useState } from 'react';
import styles from './LoginView.module.scss';

export default function LoginView() {
  const [isLoginPage, setIsLoginPage] = useState(false);

  function handleTabButtonClick(e) {
    return e.target.id === 'registerTab' ? setIsLoginPage(false) : setIsLoginPage(true);
  }

  return (
    <div className={styles.mainContainer}>
      {!isLoginPage && (
        <div className={styles.registerContainer}>
          <Input id='email' type='text' placeholder='Enter your email' label='E-mail' />
          <Input id='password' type='text' placeholder='Enter your password' label='Password' />
          <button type='button' className={styles.registerButton}>
            Sign me up!
          </button>
        </div>
      )}
      {isLoginPage && <div className={styles.loginContainer}>login</div>}
      <div className={styles.tabsContainer}>
        <button
          id='registerTab'
          type='button'
          className={`${styles.tab} ${!isLoginPage && styles.active}`}
          onClick={(e) => handleTabButtonClick(e)}
        >
          Register
        </button>
        <button
          id='loginTab'
          type='button'
          className={`${styles.tab} ${isLoginPage && styles.active}`}
          onClick={(e) => handleTabButtonClick(e)}
        >
          Login
        </button>
      </div>
    </div>
  );
}
