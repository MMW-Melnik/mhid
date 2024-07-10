import { FC } from 'react'
import { ToastProvider } from '../../app/providers'
import { useContactForm } from '../../features/contact-form/model/useContactForm'
import { formConfig } from '../../shared/config'
import { Button, Input } from '../../shared/ui'
import { ButtonSize } from '../../shared/ui/button/button.interface'
import { TextArea } from '../../shared/ui/text-area/TextArea'
import styles from './contact-form.module.scss'

export const ContactForm: FC = ({}) => {
	const { register, handleSubmit, errors, isLoading } = useContactForm()
	
	return (
		<>
		<ToastProvider>
    <form onSubmit={handleSubmit} className={styles.form_widget}>
      <div className={styles.text_container}>
        <h2 className={styles.heading}>Get in touch</h2>
        <span className={styles.subheading}>Tell us about yourself</span>
      </div>

      <div className={styles.form}>
        <div className={styles.form_inputs}>
          <Input type='text' placeholder='Person Name' inputName='Full Name' inputErrorMessage={errors.fullName?.message} {...register('fullName', formConfig.validation.name)} />
          <Input type='email' placeholder='example@gmail.com' inputName='Email' inputErrorMessage={errors.email?.message} {...register('email', formConfig.validation.email)} />

          <TextArea placeholder='Message goes here...' textAreaName='Message' textAreaErrorMessage={errors.message?.message} {...register('message', formConfig.validation.message)} />
        </div>
        <div className={styles.button_container}>
          <Button type='submit' buttonSize={ButtonSize.LARGE} buttonText={isLoading ? 'Sending...' : 'Send message'} disabled={isLoading} />
        </div>
      </div>
    </form>
		</ToastProvider>
		</>
	)  
}  
