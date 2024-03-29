import { ReactElement } from 'react';
import Image from 'next/image';
import styles from './FormLabel.module.scss';
import InfoIcon from 'public/icons/infoIcon.svg';

interface FormLabelProps {
  type: 'wrong-password' | 'wrong-email' | 'no-match-password';
}

export default function FormLabel({ type }: FormLabelProps): ReactElement {
  return (
    <div className={styles.labelContainer}>
      {type === 'wrong-email' && (
        <>
          <p>Please enter a valid e-mail address.</p>
          <div className={styles.iconContainer}>
            <Image src={InfoIcon.src} layout='fixed' height={40} width={40} alt='' />
          </div>
        </>
      )}
      {type === 'wrong-password' && (
        <>
          <p className={styles.invalidPasswordText}>
            Password must contain at least eight characters, including at least 1 lowercase letter,
            1 uppercase latter and 1 number.
          </p>
          <div className={styles.iconContainer}>
            <Image src={InfoIcon.src} layout='fixed' height={40} width={40} alt='' />
          </div>
        </>
      )}
      {type === 'no-match-password' && (
        <>
          <p>Passwords you have entered aren&apos;t matching.</p>
          <div className={styles.iconContainer}>
            <Image src={InfoIcon.src} layout='fixed' height={40} width={40} alt='' />
          </div>
        </>
      )}
    </div>
  );
}
