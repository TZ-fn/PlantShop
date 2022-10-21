import { useState, MouseEvent, ChangeEvent, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useFetch } from 'hooks/useFetch';
import Input from 'components/Input/Input';
import checkIfEmailIsValid from 'utils/checkIfEmailIsValid';
import checkIfPasswordIsValid from 'utils/checkIfPasswordIsValid';
import comparePasswords from 'utils/comparePasswords';
import FormLabel from 'components/elements/FormLabel/FormLabel';
import { UserData } from 'types/types';
import styles from './LoginView.module.scss';

export default function LoginView() {
  const [isLoginPage, setIsLoginPage] = useState(false);
  const [registerPageValues, setRegisterPageValues] = useState({
    email: { value: '', wasTouched: false },
    password: { value: '', wasTouched: false },
    confirmPassword: { value: '', wasTouched: false },
  });
  const [loginPageValues, setLoginPageValues] = useState({
    email: { value: '', wasTouched: false },
    password: { value: '', wasTouched: false },
  });
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [arePasswordsMatching, setArePasswordsMatching] = useState(true);

  const [data] = useFetch('/api/db', {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(data),
  });

  function handleTabButtonClick(e: MouseEvent<HTMLButtonElement>) {
    return (e.target as HTMLButtonElement).id === 'registerTab'
      ? setIsLoginPage(false)
      : setIsLoginPage(true);
  }

  useEffect(() => {
    if (registerPageValues.email.wasTouched) {
      setIsEmailValid(checkIfEmailIsValid(registerPageValues.email.value));
    }
    if (registerPageValues.password.wasTouched) {
      setIsPasswordValid(checkIfPasswordIsValid(registerPageValues.password.value));
    }
    if (registerPageValues.confirmPassword.wasTouched) {
      setArePasswordsMatching(
        comparePasswords(
          registerPageValues.password.value,
          registerPageValues.confirmPassword.value,
        ),
      );
    }
  }, [registerPageValues, loginPageValues]);

  async function fetchData(data: UserData) {
    const fetchSettings = {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(data),
    };
    try {
      const response = await fetch('/api/db', fetchSettings);
      const data = await response.json();

      if (response.status === 500 && data.code === 11000) {
        throw new Error('Email address already used, please use a different email.');
      }

      if ((data.success = true)) {
        toast.success('Account successfully created!', {
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    } catch (e) {
      if (e instanceof Error) {
        toast.error(`${e.message}`, {
          position: toast.POSITION.BOTTOM_CENTER,
          autoClose: false,
        });
      }
    }
  }

  function createUser() {
    if (
      !isPasswordValid ||
      !arePasswordsMatching ||
      !isEmailValid ||
      !registerPageValues.email.value ||
      !registerPageValues.password.value ||
      !registerPageValues.confirmPassword.value
    ) {
      return;
    }
    fetchData({
      email: registerPageValues.email.value,
      password: registerPageValues.password.value,
    });
    setRegisterPageValues({
      email: { value: '', wasTouched: false },
      password: { value: '', wasTouched: false },
      confirmPassword: { value: '', wasTouched: false },
    });
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
          {!isEmailValid && <FormLabel type='wrong-email' />}
          <Input
            id='email'
            type='text'
            placeholder='Enter your email...'
            label='E-mail'
            value={registerPageValues.email.value}
            onChangeFunction={(e: ChangeEvent<HTMLInputElement>) =>
              setRegisterPageValues({
                ...registerPageValues,
                email: { value: e.target.value, wasTouched: true },
              })
            }
          />

          {!isPasswordValid && <FormLabel type='wrong-password' />}
          <Input
            id='password'
            type='password'
            placeholder='Enter your password...'
            label='Password'
            value={registerPageValues.password.value}
            onChangeFunction={(e: ChangeEvent<HTMLInputElement>) =>
              setRegisterPageValues({
                ...registerPageValues,
                password: { value: e.target.value, wasTouched: true },
              })
            }
          />

          {!arePasswordsMatching && <FormLabel type='no-match-password' />}
          <Input
            id='confirm-password'
            type='password'
            placeholder='Confirm your password...'
            label='Confirm password'
            value={registerPageValues.confirmPassword.value}
            onChangeFunction={(e: ChangeEvent<HTMLInputElement>) =>
              setRegisterPageValues({
                ...registerPageValues,
                confirmPassword: { value: e.target.value, wasTouched: true },
              })
            }
          />
          <button type='button' className={styles.loginButton} onClick={() => createUser()}>
            Sign me up!
          </button>
        </div>
      )}
      {isLoginPage && (
        <div className={styles.loginContainer}>
          <Input
            id='email'
            type='text'
            placeholder='Enter your email...'
            label='E-mail'
            value={loginPageValues.email.value}
            onChangeFunction={(e: ChangeEvent<HTMLInputElement>) =>
              setLoginPageValues({
                ...loginPageValues,
                email: { value: e.target.value, wasTouched: true },
              })
            }
          />
          <Input
            id='password'
            type='password'
            placeholder='Enter your password...'
            label='Password'
            value={loginPageValues.password.value}
            onChangeFunction={(e: ChangeEvent<HTMLInputElement>) =>
              setLoginPageValues({
                ...loginPageValues,
                password: { value: e.target.value, wasTouched: true },
              })
            }
          />
          <button type='button' className={styles.loginButton}>
            Log in!
          </button>
        </div>
      )}
    </div>
  );
}
