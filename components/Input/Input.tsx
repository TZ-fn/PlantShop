import { ChangeEventHandler, useState } from 'react';
import Image from 'next/image';
import DisabledEyeIcon from 'public/icons/disabledEyeIcon.svg';
import EyeIcon from 'public/icons/eyeIcon.svg';
import styles from './Input.module.scss';

interface InputProps {
  id: string;
  type: string;
  placeholder: string;
  value: string;
  label: string;
  onChangeFunction: ChangeEventHandler<HTMLInputElement>;
}

export default function Input({
  id,
  type,
  placeholder,
  value,
  label,
  onChangeFunction,
}: InputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function handleShowPasswordButton() {
    setIsPasswordVisible(!isPasswordVisible);
  }

  return (
    <div className={styles.inputContainer}>
      <label htmlFor={id} className={styles.inputLabel}>
        {label}
      </label>
      <input
        id={id}
        className={styles.input}
        type={type === 'password' ? (isPasswordVisible ? 'text' : 'password') : type}
        placeholder={placeholder}
        value={value}
        onChange={onChangeFunction}
        autoComplete={type === 'password' ? 'off' : 'on'}
      />
      {type === 'password' && (
        <div className={styles.imageContainer} onClick={handleShowPasswordButton}>
          <Image
            src={isPasswordVisible ? EyeIcon.src : DisabledEyeIcon.src}
            layout='fixed'
            height={33}
            width={33}
            alt=''
          />
        </div>
      )}
    </div>
  );
}
