'use client'

import ContactFormImage from '@/app/assets/images/contact/contact_form.jpg'
import { useContactForm } from '@/features/index'
import { Button, FormattedText, Heading, Input, TextArea } from '@/shared/ui'
import { ButtonSize } from '@/shared/ui/button/button.interface'
import Image from 'next/image'
import { FC, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ContentBlock } from '../content-block'
import styles from './contact-form.module.scss'

export const ContactForm: FC = () => {
	const { register, handleSubmit, errors, isLoading } = useContactForm()
	const { t } = useTranslation('form')
	const [isLoaded, setIsLoaded] = useState(false)

	useEffect(() => {
		setIsLoaded(true)
	}, [])

	if (!isLoaded) {
		return null
	}

	const formConfig = {
		validation: {
			name: {
				required: t('name.required'),
				minLength: { value: 3, message: t('name.minLength') }
			},
			email: {
				required: t('email.required'),
				pattern: {
					value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
					message: t('email.invalid')
				}
			},
			message: {
				minLength: { value: 10, message: t('message.minLength') }
			}
		}
	}

	return (
		<section className={styles.contact_form_widget}>
			<Image
				src={ContactFormImage.src}
				alt={t('formImageAlt', { defaultValue: 'contact form image' })}
				className={styles.contact_form_image}
				draggable={false}
				loading="eager"
				aria-label="contact form image"
				width={580}
				height={440}
			/>

			<div>
				<ContentBlock
					isAnimated={false}
					className={styles.contact_form_text_container}
				>
					<Heading level={3}>
						{t('formHeading', { defaultValue: 'Contact Us' })}
					</Heading>
					<FormattedText text={t('formText')} />
				</ContentBlock>

				<div className={styles.contact_form_container}>
					<div className={styles.form_widget}>
						<form onSubmit={handleSubmit} className={styles.form}>
							<div className={styles.form_inputs}>
								<Input
									type="text"
									placeholder={t('name.placeholder')}
									inputName={t('name.fullName')}
									inputErrorMessage={errors.fullName?.message}
									{...register('fullName', formConfig.validation.name)}
								/>
								<Input
									type="email"
									placeholder={t('email.placeholder')}
									inputName="Email"
									inputErrorMessage={errors.email?.message}
									{...register('email', formConfig.validation.email)}
								/>
								<TextArea
									placeholder={t('message.placeholder')}
									textAreaName={t('message.fullName')}
									textAreaErrorMessage={errors.message?.message}
									{...register('message', formConfig.validation.message)}
								/>
							</div>
							<div className={styles.button_container}>
								<Button
									type="submit"
									buttonSize={ButtonSize.LARGE}
									buttonText={
										isLoading ? t('button.sending') : t('button.name')
									}
									disabled={isLoading}
								/>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	)
}
