import { ReactElement } from 'react';
import styles from './ProductCountBadge.module.scss';

interface FormLabelProps {
  message: string;
}

export default function FormLabel({ message }: FormLabelProps): ReactElement {
  return <div className={styles.labelContainer}>{message}</div>;
}
