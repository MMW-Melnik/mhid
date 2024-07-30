'use client'

import { useContactForm } from '@/features/index'
import { formConfig } from '@/shared/config'
import { Button, Input, TextArea } from '@/shared/ui'
import { ButtonSize } from '@/shared/ui/button/button.interface'
import Image from 'next/image'
import { FC } from 'react'
import styles from './contact-form.module.scss'

export const ContactForm: FC = () => {
	const { register, handleSubmit, errors, isLoading } = useContactForm()

	return (
		<>
			<section className={styles.contact_form_widget}>
				<form onSubmit={handleSubmit} className={styles.form_widget}>
					<div className={styles.form}>
						<div className={styles.form_inputs}>
							<Input
								type="text"
								placeholder="Person Name"
								inputName="Full Name"
								inputErrorMessage={errors.fullName?.message}
								{...register('fullName', formConfig.validation.name)}
							/>
							<Input
								type="email"
								placeholder="example@gmail.com"
								inputName="Email"
								inputErrorMessage={errors.email?.message}
								{...register('email', formConfig.validation.email)}
							/>

							<TextArea
								placeholder="Message goes here..."
								textAreaName="Message"
								textAreaErrorMessage={errors.message?.message}
								{...register('message', formConfig.validation.message)}
							/>
						</div>
						<div className={styles.button_container}>
							<Button
								type="submit"
								buttonSize={ButtonSize.LARGE}
								buttonText={isLoading ? 'Just a moment...' : 'Send message'}
								disabled={isLoading}
							/>
						</div>
					</div>
				</form>
				<Image
					src={'./contact-form.svg'}
					alt="contact form image"
					draggable={false}
					className={styles.contact_form_image}
					width={780}
					height={440}
				/>
			</section>
		</>
	)
}
