import { useState, MouseEvent, ChangeEvent } from 'react';
import Input from 'components/Input/Input';
import checkIfPasswordIsValid from 'utils/checkIfPasswordIsValid';
import styles from './LoginView.module.scss';
import FormLabel from 'components/elements/FormLabel/FormLabel';

export default function LoginView() {
  const [isLoginPage, setIsLoginPage] = useState(false);
  const [registerPageValues, setRegisterPageValues] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [loginPageValues, setLoginPageValues] = useState({
    email: '',
    password: '',
  });
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  function handleTabButtonClick(e: MouseEvent<HTMLButtonElement>) {
    return (e.target as HTMLButtonElement).id === 'registerTab'
      ? setIsLoginPage(false)
      : setIsLoginPage(true);
  }

  function createUser() {}

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
          <FormLabel type='wrong-email' />
          <Input
            id='email'
            type='text'
            placeholder='Enter your email...'
            label='E-mail'
            value={registerPageValues.email}
            onChangeFunction={(e: ChangeEvent<HTMLInputElement>) =>
              setRegisterPageValues({ ...registerPageValues, email: e.target.value })
            }
          />

          <FormLabel type='wrong-password' />
          <Input
            id='password'
            type='password'
            placeholder='Enter your password...'
            label='Password'
            value={registerPageValues.password}
            onChangeFunction={(e: ChangeEvent<HTMLInputElement>) =>
              setIsPasswordValid(checkIfPasswordIsValid(e.target.value))
            }
          />

          <FormLabel type='no-match-password' />
          <Input
            id='confirm-password'
            type='password'
            placeholder='Confirm your password...'
            label='Confirm password'
            value={registerPageValues.confirmPassword}
            onChangeFunction={(e: ChangeEvent<HTMLInputElement>) =>
              setRegisterPageValues({ ...registerPageValues, confirmPassword: e.target.value })
            }
          />
          <button type='button' className={styles.loginButton} onClick={() => createUser()}>
            Sign me up!
          </button>
        </div>
      )}
      {isLoginPage && (
        <div className={styles.loginContainer}>
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
