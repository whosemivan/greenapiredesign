import { useState, type ChangeEvent, type FocusEvent, type SubmitEvent } from 'react';
import type { ContactFormErrorsType, ContactFormStatusType, ContactFormValuesType } from '@/types/contactForm';
import { validateContactForm } from '@/utils/validateContactForm';
import { FAKE_SUBMIT_DELAY_MS, INITIAL_CONTACT_FORM_VALUES } from './ContactForm.consts';

type FieldNameType = keyof ContactFormValuesType;

export const useContactForm = () => {
	const [values, setValues] = useState<ContactFormValuesType>(INITIAL_CONTACT_FORM_VALUES);
	const [touchedFields, setTouchedFields] = useState<Partial<Record<FieldNameType, boolean>>>({});
	const [status, setStatus] = useState<ContactFormStatusType>('idle');

	// Ошибки вычисляем из значений, а показываем только для полей, которые пользователь уже трогал
	const errors = validateContactForm(values);
	const hasErrors = Object.keys(errors).length > 0;

	const visibleErrors = Object.fromEntries(
		Object.entries(errors).filter(([fieldName]) => touchedFields[fieldName as FieldNameType]),
	) as ContactFormErrorsType;

	const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value, type } = event.target;
		const nextValue = type === 'checkbox' ? (event.target as HTMLInputElement).checked : value;

		setValues((prevValues) => ({ ...prevValues, [name]: nextValue }));
	};

	const handleBlur = (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const fieldName = event.target.name as FieldNameType;

		setTouchedFields((prevTouched) => ({ ...prevTouched, [fieldName]: true }));
	};

	const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (hasErrors) {
			const allTouched = Object.fromEntries(Object.keys(values).map((fieldName) => [fieldName, true]));
			setTouchedFields(allTouched);

			const [firstInvalidFieldName] = Object.keys(errors);
			const firstInvalidField = event.currentTarget.elements.namedItem(firstInvalidFieldName);

			if (firstInvalidField instanceof HTMLElement) {
				firstInvalidField.focus();
			}

			return;
		}

		setStatus('submitting');

		window.setTimeout(() => setStatus('success'), FAKE_SUBMIT_DELAY_MS);
	};

	const handleReset = () => {
		setValues(INITIAL_CONTACT_FORM_VALUES);
		setTouchedFields({});
		setStatus('idle');
	};

	return {
		values,
		errors: visibleErrors,
		status,
		handleChange,
		handleBlur,
		handleSubmit,
		handleReset,
	};
};
