import { useState, MouseEvent } from 'react';
import Input from 'components/Input/Input';
import styles from './LoginView.module.scss';

export default function LoginView() {
  const [isLoginPage, setIsLoginPage] = useState(false);

  function handleTabButtonClick(e: MouseEvent<HTMLButtonElement>) {
    return (e.target as HTMLButtonElement).id === 'registerTab'
      ? setIsLoginPage(false)
      : setIsLoginPage(true);
  }

  return (
    <div className={styles.mainContainer}>
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
      {!isLoginPage && (
        <div className={styles.registerContainer}>
          <Input id='email' type='text' placeholder='Enter your email...' label='E-mail' />
          <Input id='password' type='text' placeholder='Enter your password...' label='Password' />
          <Input
            id='confirm-password'
            type='text'
            placeholder='Confirm your password...'
            label='Confirm password'
          />
          <button type='button' className={styles.loginButton}>
            Sign me up!
          </button>
        </div>
      )}
      {isLoginPage && (
        <div className={styles.loginContainer}>
          {' '}
          <Input id='email' type='text' placeholder='Enter your email...' label='E-mail' />
          <Input id='password' type='text' placeholder='Enter your password...' label='Password' />
          <button type='button' className={styles.loginButton}>
            Log in!
          </button>
        </div>
      )}
    </div>
  );
}
