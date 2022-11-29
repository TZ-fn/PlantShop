import { useState, MouseEvent, useEffect } from 'react';
import { toast } from 'react-toastify';
import checkIfEmailIsValid from 'utils/checkIfEmailIsValid';
import checkIfPasswordIsValid from 'utils/checkIfPasswordIsValid';
import comparePasswords from 'utils/comparePasswords';
import RegisterForm from './RegisterForm/RegisterForm';
import LoginForm from './LoginForm/LoginForm';
import styles from './LoginView.module.scss';

export default function LoginView() {
  const [isLoginPage, setIsLoginPage] = useState(false);

  function handleTabButtonClick(e: MouseEvent<HTMLButtonElement>) {
    return (e.target as HTMLButtonElement).id === 'registerTab'
      ? setIsLoginPage(false)
      : setIsLoginPage(true);
  }

  // useEffect(() => {
  //   if (registerPageValues.email.wasTouched) {
  //     setIsEmailValid(checkIfEmailIsValid(registerPageValues.email.value));
  //   }
  //   if (registerPageValues.password.wasTouched) {
  //     setIsPasswordValid(checkIfPasswordIsValid(registerPageValues.password.value));
  //   }
  //   if (registerPageValues.confirmPassword.wasTouched) {
  //     setArePasswordsMatching(
  //       comparePasswords(
  //         registerPageValues.password.value,
  //         registerPageValues.confirmPassword.value,
  //       ),
  //     );
  //   }
  // }, [registerPageValues, loginPageValues]);

  // useEffect(() => {
  //   if (registerResponse !== null) {
  //     if (registerResponse.code === 11000) {
  //       toast.error('Email address already used, please use a different email.', {
  //         position: toast.POSITION.TOP_RIGHT,
  //         autoClose: false,
  //       });
  //     }

  //     if (response.success === true) {
  //       toast.success('Account successfully created!', {
  //         position: toast.POSITION.TOP_RIGHT,
  //       });
  //     }
  //   }
  // }, [response]);

  // useEffect(() => {
  //   console.log(error);
  // }, [error]);

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
      {!isLoginPage && <RegisterForm />}
      {isLoginPage && <LoginForm />}
    </div>
  );
}
