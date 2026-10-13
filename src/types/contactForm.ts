export type ContactFormValuesType = {
	fullName: string;
	phone: string;
	email: string;
	company: string;
	website: string;
	comment: string;
	isConsentGiven: boolean;
};

export type ContactFormErrorsType = Partial<Record<keyof ContactFormValuesType, string>>;

export type ContactFormStatusType = 'idle' | 'submitting' | 'success';
