import { ReactElement } from 'react';
import styles from './ProductCountBadge.module.scss';

interface FormLabelProps {
  type: string;
  message: string;
}

export default function FormLabel({ type, message }: FormLabelProps): ReactElement {
  return <div className={styles.labelContainer}></div>;
}
