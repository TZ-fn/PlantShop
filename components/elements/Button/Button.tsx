import { ReactElement, ReactNode, MouseEventHandler } from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  type: 'button' | 'submit' | 'reset' | undefined;
  ariaLabel?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function Button({
  children,
  className = styles.buttonDefault,

  type = 'button',
  ariaLabel,
  onClick,
}: ButtonProps): ReactElement {
  return (
    <button className={className} aria-label={ariaLabel} type={type} onClick={onClick}>
      {children}
    </button>
  );
}
