import { ChangeEvent, ReactElement, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Input from 'components/Input/Input';
import { useFetch } from 'hooks/useFetch';
import styles from './LoginForm.module.scss';

export default function LoginForm(): ReactElement {
  const [loginPageValues, setLoginPageValues] = useState({
    email: { value: '', wasTouched: false },
    password: { value: '', wasTouched: false },
  });

  useEffect(() => {}, [loginPageValues.email, loginPageValues.password]);

  useEffect(() => {
    if (response !== null) {
      if (response.success === true) {
        toast.success('Login successful!', {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    }
  }, [response]);

  const userData = {
    email: loginPageValues.email.value,
    password: loginPageValues.password.value,
  };

  const fetchSettings = {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(userData),
  };

  const [response, isLoading, error, refresh] = useFetch('/api/register', fetchSettings);

  useEffect(() => {
    console.log(error);
  }, [isLoading, error]);

  function authenticateUser() {
    if (!loginPageValues.email.value || !loginPageValues.password.value) {
      return;
    }
  }

  return (
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
      <button type='button' className={styles.loginButton} onClick={() => authenticateUser()}>
        Log in!
      </button>
    </div>
  );
}