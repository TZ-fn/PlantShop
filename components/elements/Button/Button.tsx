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
  className,
  type = 'button',
  ariaLabel,
  onClick,
}: ButtonProps): ReactElement {
  return (
    <Button
      className={styles[`${className ? className : 'buttonDefault'}`]}
      aria-label={ariaLabel}
      type={type}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
