import { useState, MouseEvent } from 'react';
import Image from 'next/image';
import AccountIcon from 'public/icons/loginIcon.svg';
import { RootState } from 'store/store';
import { useSelector } from 'react-redux';
import RegisterForm from './RegisterForm/RegisterForm';
import LoginForm from './LoginForm/LoginForm';
import styles from './LoginView.module.scss';

export default function LoginView() {
  const [isLoginPage, setIsLoginPage] = useState(false);
  const isUserAuthorised = useSelector((state: RootState) => state.authorisation.isUserAuthorised);

  function handleTabButtonClick(e: MouseEvent<HTMLButtonElement>) {
    return (e.target as HTMLButtonElement).id === 'registerTab'
      ? setIsLoginPage(false)
      : setIsLoginPage(true);
  }

  return isUserAuthorised ? (
    <div className={styles.loggedIn}>
      <Image src={AccountIcon.src} width={120} height={120} />
      <p>You are already logged in.</p>
    </div>
  ) : (
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
      {!isLoginPage && <RegisterForm />}
      {isLoginPage && <LoginForm />}
    </div>
  );
}
