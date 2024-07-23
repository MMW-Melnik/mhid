import { getEmailConfig, getEmailUrl } from '@/shared/config'
import { contactFormData } from '@/shared/types'

export const sendEmail = async (data: contactFormData) => {
	const response = await fetch(getEmailUrl(), getEmailConfig(data))
	if (!response.ok) {
		throw new Error('Network response was not ok')
	}

	return response.json()
}
