import { forwardRef } from 'react'
import { IInput } from './input.interface'
import styles from './input.module.scss'

export const Input = forwardRef<HTMLInputElement, IInput>(({ type, placeholder, inputName, inputErrorMessage, ...rest }, ref) => {
  return (
    <div className={styles.input_container}>
      <p className={styles.input_label}>{inputName}</p>
      <div className={styles.input_value}>
        <input
          className={styles.input}
        type={type}
          placeholder={placeholder}
          ref={ref}
          {...rest}
        />
        <div className={styles.underline}></div>
      </div>
      {inputErrorMessage && <p className={styles.error_message}>{inputErrorMessage}</p>}
    </div>
  );
});

Input.displayName = 'Input';
