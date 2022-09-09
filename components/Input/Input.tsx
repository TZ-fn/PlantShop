import { ChangeEventHandler } from 'react';
import styles from './Input.module.scss';

interface InputProps {
  id: string;
  type: string;
  placeholder: string;
  label: string;
  onChangeFunction: ChangeEventHandler<HTMLInputElement>;
}

export default function Input({ id, type, placeholder, label, onChangeFunction }: InputProps) {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={id} className={styles.inputLabel}>
        {label}
      </label>
      <input
        id={id}
        className={styles.input}
        type={type}
        placeholder={placeholder}
        onChange={onChangeFunction}
      />
    </div>
  );
}
