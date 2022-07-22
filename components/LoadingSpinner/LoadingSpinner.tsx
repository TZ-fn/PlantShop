import { ReactElement } from 'react';
import styles from './LoadingSpinner.module.scss';

export default function LoadingSpinner(): ReactElement {
  return (
    <div className={styles.spinner}>
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  );
}
