import { contactFormData } from '../../types'

export const getEmailConfig = (data: contactFormData) => {
	return {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			fullName: data.fullName,
			_replyto: data.email,
			message: data.message
		})
	}
}

export const getEmailUrl = () => {
	return `https://formspree.io/f/${process.env.FORM_ID}`
}
