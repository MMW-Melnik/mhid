export const formMessages = {
	name: {
		required: 'Full Name is required',
		minLength: 'Full Name must be at least 3 characters'
	},
	email: {
		required: 'Email is required',
		invalid: 'Invalid email address'
	},
	message: {
		minLength: 'Message must be at least 10 characters'
	}
}

export const emailRegexPatterns = {
	email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
}
