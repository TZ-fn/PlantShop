import { ReactElement } from 'react';
import styles from './FormLabel.module.scss';

interface FormLabelProps {
  type: 'wrong-password' | 'wrong-email' | 'no-match-password';
}

export default function FormLabel({ type }: FormLabelProps): ReactElement {
  return (
    <div className={styles.labelContainer}>
      {type === 'wrong-email' && (
        <p>Please enter a valid e-mail address.</p>
      )}
      {type === 'wrong-password' && (
        <p>Please enter a valid password.</p>
      )}
      {type === 'no-match-password' && (
        <p>Passwords you have entered aren't matching.</p>
      )}
    </div>
  );
}
