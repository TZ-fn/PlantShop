import { ChangeEvent, ReactElement, useState } from 'react';
import Input from 'components/Input/Input';
import FormLabel from 'components/elements/FormLabel/FormLabel';
import { useFetch } from 'hooks/useFetch';
import styles from './RegisterForm.module.scss';

interface RegisterFormProps {
  children: JSX.IntrinsicElements['li'];
}

export default function RegisterForm(): ReactElement {
  const [registerPageValues, setRegisterPageValues] = useState({
    email: { value: '', wasTouched: false },
    password: { value: '', wasTouched: false },
    confirmPassword: { value: '', wasTouched: false },
  });
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [arePasswordsMatching, setArePasswordsMatching] = useState(true);

  const userData = {
    email: registerPageValues.email.value,
    password: registerPageValues.password.value,
  };

  const fetchSettings = {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(userData),
  };

  const [response, isLoading, error, refresh] = useFetch('/api/register', fetchSettings);

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

    refresh();

    setRegisterPageValues({
      email: { value: '', wasTouched: false },
      password: { value: '', wasTouched: false },
      confirmPassword: { value: '', wasTouched: false },
    });
  }

  return (
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
        Log in!
      </button>
    </div>
  );
}
