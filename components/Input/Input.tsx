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
  const [inputType, setInputType] = useState(type);
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={id} className={styles.inputLabel}>
        {label}
      </label>
      <input
        id={id}
        className={styles.input}
        type={inputType}
        placeholder={placeholder}
        value={value}
        onChange={onChangeFunction}
      />
      {type === 'password' && (
        <div className={styles.imageContainer}>
          <Image
            src={isPasswordVisible ? DisabledEyeIcon.src : EyeIcon.src}
            layout='fixed'
            height={33}
            width={33}
          />
        </div>
      )}
    </div>
  );
}
