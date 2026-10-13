import type { ContactFormErrorsType, ContactFormValuesType } from '@/types/contactForm';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const PHONE_DIGITS_MIN = 10;
const PHONE_DIGITS_MAX = 15;

export const validateEmail = (email: string): boolean => EMAIL_PATTERN.test(email.trim());

export const validatePhone = (phone: string): boolean => {
	const digitsCount = phone.replace(/\D/g, '').length;

	return digitsCount >= PHONE_DIGITS_MIN && digitsCount <= PHONE_DIGITS_MAX;
};

export const validateContactForm = (values: ContactFormValuesType): ContactFormErrorsType => {
	const errors: ContactFormErrorsType = {};

	if (values.fullName.trim().length < 2) {
		errors.fullName = 'Укажите имя';
	}

	if (!validatePhone(values.phone)) {
		errors.phone = 'Введите номер в международном формате';
	}

	if (!validateEmail(values.email)) {
		errors.email = 'Проверьте адрес почты';
	}

	if (!values.isConsentGiven) {
		errors.isConsentGiven = 'Нужно согласие на обработку данных';
	}

	return errors;
};
