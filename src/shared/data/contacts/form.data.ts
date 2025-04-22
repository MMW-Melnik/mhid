export const formMessages = {
	en: {
		formText:
			'We welcome your feedback and suggestions! If you have any thoughts on how we can improve or want to share your experience with the website, feel free to reach out. Your opinion is important to us and will help shape future improvements.',
		name: {
			placeholder: 'Person Name',
			fullName: 'Full Name',
			required: 'Full Name is required',
			minLength: 'Full Name must be at least 3 characters'
		},
		email: {
			placeholder: 'example@gmail.com',
			required: 'Email is required',
			invalid: 'Invalid email address'
		},
		message: {
			fullName: 'Message',
			placeholder: 'Message goes here...',
			minLength: 'Message must be at least 10 characters'
		},
		button: {
			name: 'Send message',
			sending: 'Sending...'
		}
	},
	// fr: {
	// 	name: {
	// 		placeholder: 'Nom',
	// 		fullName: 'Nom complet',
	// 		required: 'Le nom complet est requis',
	// 		minLength: 'Le nom complet doit comporter au moins 3 caractères'
	// 	},
	// 	email: {
	// 		placeholder: 'example@gmail.com',
	// 		required: 'Email est requis',
	// 		invalid: 'Adresse e-mail invalide'
	// 	},
	// 	message: {
	// 		fullName: 'Le message',
	// 		placeholder: 'Le message va ici...',
	// 		minLength: 'Le message doit comporter au moins 10 caractères'
	// 	},
	// 	button: {
	// 		name: 'Envoyer le message'
	// 	}
	// },
	// de: {
	// 	name: {
	// 		placeholder: 'Name',
	// 		fullName: 'Vollständiger Name',
	// 		required: 'Vollständiger Name ist erforderlich',
	// 		minLength: 'Der vollständige Name muss mindestens 3 Zeichen lang sein'
	// 	},
	// 	email: {
	// 		placeholder: 'example@gmail.com',
	// 		required: 'E-Mail ist erforderlich',
	// 		invalid: 'Ungültige E-Mail-Adresse'
	// 	},
	// 	message: {
	// 		fullName: 'Nachricht',
	// 		placeholder: 'Nachricht hier einfügen...',
	// 		minLength: 'Die Nachricht muss mindestens 10 Zeichen lang sein'
	// 	},
	// 	button: {
	// 		name: 'Nachricht senden'
	// 	}
	// },
	ua: {
		name: {
			placeholder: 'Ім’я',
			fullName: 'Повне ім’я',
			required: 'Повне ім’я є обов’язковим',
			minLength: 'Повне ім’я повинно містити щонайменше 3 символи'
		},
		email: {
			placeholder: 'example@gmail.com',
			required: 'Електронна пошта є обов’язковою',
			invalid: 'Невірна електронна адреса'
		},
		message: {
			fullName: 'Повідомлення',
			placeholder: 'Повідомлення тут...',
			minLength: 'Повідомлення повинно містити щонайменше 10 символів'
		},
		button: {
			name: 'Надіслати повідомлення'
		}
	}
}

export const emailRegexPatterns = {
	email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
}
