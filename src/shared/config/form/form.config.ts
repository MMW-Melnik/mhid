import { formMessages } from '../../data'

export const formConfig = {
  validation: {
    name: {
      required: formMessages.name.required,
      minLength: { value: 3, message: formMessages.name.minLength },
    },
    email: {
      required: formMessages.email.required,
      pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: formMessages.email.invalid },
    },
    message: {
      minLength: { value: 10, message: formMessages.message.minLength }
    },
  },
};
