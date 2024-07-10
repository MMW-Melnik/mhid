import { forwardRef } from 'react'
import { ITextArea } from './text-area.interface'
import styles from './text-area.module.scss'

export const TextArea = forwardRef<HTMLTextAreaElement, ITextArea>(({ placeholder, textAreaName, textAreaErrorMessage, ...rest }, ref) => {
  return (
		<div className={`${styles.textarea_container} ${textAreaErrorMessage ? styles['has-error'] : ''}`}>
		<p className={styles.textarea_label}>{textAreaName}</p>
		<div className={styles.textarea_value}>
			<textarea
				className={styles.textarea}
				placeholder={placeholder}
				ref={ref}
				{...rest}
			></textarea>
			<div className={styles.underline}></div>
		</div>
		<div className={styles.error}>
			{textAreaErrorMessage && <p className={styles.error_message}>{textAreaErrorMessage}</p>}
		</div>
	</div>
  );
});

TextArea.displayName = 'TextArea';
