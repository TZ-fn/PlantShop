import { ChangeEvent, ReactElement, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Input from 'components/Input/Input';
import FormLabel from 'components/elements/FormLabel/FormLabel';
import { useFetch } from 'hooks/useFetch';
import comparePasswords from 'utils/comparePasswords';
import checkIfPasswordIsValid from 'utils/checkIfPasswordIsValid';
import checkIfEmailIsValid from 'utils/checkIfEmailIsValid';
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';
import styles from './RegisterForm.module.scss';

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
  }, [registerPageValues.email, registerPageValues.password, registerPageValues.confirmPassword]);

  useEffect(() => {
    if (response !== null && 'success' in response) {
      if (typeof response.message === 'object' && response.message.code === 11000) {
        toast.error('Email address already used, please use a different email.', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: false,
        });
      }

      if (response.success === true) {
        toast.success('Account successfully created!', {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    }
  }, [response]);

  useEffect(() => {
    if (error !== null) {
      toast.error(`${error}`, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: false,
      });
    }
  }, [isLoading, error]);

  function createUser() {
    if (
      !isPasswordValid ||
      !arePasswordsMatching ||
      !isEmailValid ||
      !registerPageValues.email.value ||
      !registerPageValues.password.value ||
      !registerPageValues.confirmPassword.value
    ) {
      toast.error('Please enter all the necessary data.', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: false,
      });
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
      {isLoading ? (
        <div className={styles.loadingSpinnerContainer}>
          <LoadingSpinner />
        </div>
      ) : (
        <button type='button' className={styles.loginButton} onClick={() => createUser()}>
          Sign up!
        </button>
      )}
    </div>
  );
}
