import { ReactElement } from 'react';
import styles from './FormLabel.module.scss';

interface FormLabelProps {
  type: 'wrong-password' | 'wrong-email' | 'no-match-password';
}

export default function FormLabel({ type }: FormLabelProps): ReactElement {
  return (
    <div className={styles.labelContainer}>
      {type === 'wrong-email' && (
        <div className={styles.labelContainer}>Please enter a valid e-mail address.</div>
      )}
      {type === 'wrong-password' && (
        <div className={styles.labelContainer}>Please enter a valid password.</div>
      )}
      {type === 'no-match-password' && (
        <div className={styles.labelContainer}>Passwords you have entered aren't matching.</div>
      )}
    </div>
  );
}
