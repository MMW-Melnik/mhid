import { useForm } from 'react-hook-form'
import { contactFormData } from '../../../shared/types'
import { sendEmail } from '../api/emailService'


export const useContactForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<contactFormData>();

  const onSubmit = async (data: contactFormData) => {
    try {
      await sendEmail(data);
      console.log('Email sent successfully');
      reset();
    } catch (error) {
      console.error('Failed to send email', error);
    }
  };

  return { register, handleSubmit: handleSubmit(onSubmit), errors };
};
