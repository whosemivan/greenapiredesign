import type { ContactFormValuesType } from '@/types/contactForm';

export const INITIAL_CONTACT_FORM_VALUES: ContactFormValuesType = {
	fullName: '',
	phone: '',
	email: '',
	company: '',
	website: '',
	comment: '',
	isConsentGiven: false,
};

// Форма пока заглушка: запрос на сервер не отправляется
export const FAKE_SUBMIT_DELAY_MS = 900;
