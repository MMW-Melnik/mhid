'use client'

import { useContactForm } from '@/features/index'
import { Button, Input, TextArea } from '@/shared/ui'
import { ButtonSize } from '@/shared/ui/button/button.interface'
import Image from 'next/image'
import { FC, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
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
			<div className={styles.form_widget}>
				<form onSubmit={handleSubmit} className={styles.form}>
					<div className={styles.form}>
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
								buttonText={isLoading ? t('button.name') : t('button.name')}
								disabled={isLoading}
							/>
						</div>
					</div>
				</form>
			</div>
			<Image
				src={'./contact-form.svg'}
				alt={t('formImageAlt', { defaultValue: 'contact form image' })}
				draggable={false}
				className={styles.contact_form_image}
				width={780}
				height={440}
			/>
		</section>
	)
}
