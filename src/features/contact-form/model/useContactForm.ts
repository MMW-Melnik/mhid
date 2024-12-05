'use client'

import { notifyError, notifySuccess } from '@/shared/lib/toats'
import { contactFormData } from '@/shared/types'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { sendEmail } from '../api/emailService'

export const useContactForm = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<contactFormData>()
	const [isLoading, setIsLoading] = useState(false)

	const onSubmit = async (data: contactFormData) => {
		setIsLoading(true)
		try {
			await sendEmail(data)
			notifySuccess('Message sent successfully!')
			reset()
		} catch (error) {
			notifyError('Failed to send message.')
		} finally {
			setIsLoading(false)
		}
	}
	return {
		register,
		handleSubmit: handleSubmit(onSubmit),
		errors,
		isLoading
	}
}
