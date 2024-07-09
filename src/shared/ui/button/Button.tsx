import { forwardRef } from 'react'
import { ButtonSize, IButton } from './button.interface'
import styles from './button.module.scss'

export const Button = forwardRef<HTMLButtonElement, IButton>(({ buttonText, buttonSize, type = 'button', className, onClick, ...rest }, ref) => {
  const buttonSizeClass = buttonSize === ButtonSize.SMALL ? styles.small : styles.large;

  return (
    <button
      ref={ref}
      className={`${styles.button} ${buttonSizeClass} ${className}`}
      type={type}
      onClick={onClick}
      {...rest}
    >
      <span>{buttonText}</span>
    </button>
  );
});

Button.displayName = 'Button';
