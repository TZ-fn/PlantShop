import { ReactElement } from 'react';
import styles from './FormLabel.module.scss';

interface FormLabelProps {
  type: 'wrong-password' | 'wrong-email' | 'no-match-password';
}

export default function FormLabel({ type }: FormLabelProps): ReactElement {
  return (
    <div className={styles.labelContainer}>
      {type === 'wrong-email' && <div>wrong email</div>}
      {type === 'wrong-password' && <div>wrong password</div>}
      {type === 'no-match-password' && <div>no-match-password</div>}
    </div>
  );
}
