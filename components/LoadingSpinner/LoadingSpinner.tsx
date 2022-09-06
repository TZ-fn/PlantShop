import { ReactElement } from 'react';
import styles from './LoadingSpinner.module.scss';

export default function LoadingSpinner(): ReactElement {
  return (
    <div className={styles.spinner} aria-busy='true'>
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
