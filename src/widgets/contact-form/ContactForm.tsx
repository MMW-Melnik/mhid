import { FC } from 'react'
import { useContactForm } from '../../features/contact-form/model/useContactForm'
import { Button, Input } from '../../shared/ui'
import { ButtonSize } from '../../shared/ui/button/button.interface'
import styles from './contact-form.module.scss'

export const ContactForm: FC = ({}) => {
	const { register, handleSubmit } = useContactForm();
	
	return (
		<form onSubmit={handleSubmit} className={styles.form_widget}>
			<div className={styles.text_container}>
				<h2 className={styles.heading}>Get in&nbsp;touch</h2>
				<span className={styles.subheading}>Tell&nbsp;us about yourself</span>
			</div>

			<div className={styles.form}>
				<div className={styles.form_inputs}>
					<Input type='text' placeholder='Person Name' inputName='Full Name' {...register('fullName', {required: true})}/>
					<Input type='email' placeholder='example@gmail.com' inputName='Email' {...register('email', {required: true})}/>
					<Input type='text' placeholder='Message goes here...' inputName='Message' {...register('message', {required: false})}/>
				</div>
				<Button type='submit' buttonSize={ButtonSize.LARGE} buttonText='Send message'/>
			</div>
		</form>
	);
};
