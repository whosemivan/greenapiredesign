import type { FC } from 'react';
import clsx from 'clsx';
import CheckCircleIcon from '@/assets/icons/check-circle.svg?react';
import { Button } from '@/components/ui/Button/Button';
import { FormField } from './components/FormField';
import { useContactForm } from './useContactForm';
import s from './ContactForm.module.scss';

type ContactFormPropsType = {
	privacyPolicyHref: string;
	userAgreementHref: string;
};

export const ContactForm: FC<ContactFormPropsType> = ({ privacyPolicyHref, userAgreementHref }) => {
	const contactForm = useContactForm();

	if (contactForm.status === 'success') {
		return (
			<div className={clsx(s.contactForm, s.success)} role="status">
				<CheckCircleIcon className={s.successIcon} aria-hidden />
				<p className={s.successTitle}>Заявка успешно отправлена!</p>
				<Button variant="secondary" onClick={contactForm.handleReset}>
					Отправить ещё одну заявку
				</Button>
			</div>
		);
	}

	const isSubmitting = contactForm.status === 'submitting';

	return (
		<form className={s.contactForm} noValidate onSubmit={contactForm.handleSubmit}>
			<div className={s.fieldsGrid}>
				<FormField
					name="fullName"
					label="Ваше ФИО"
					placeholder="Иван Иванов"
					autoComplete="name"
					value={contactForm.values.fullName}
					error={contactForm.errors.fullName}
					isRequired
					onChange={contactForm.handleChange}
					onBlur={contactForm.handleBlur}
				/>
				<FormField
					name="phone"
					label="Ваш номер WhatsApp*"
					type="tel"
					placeholder="+7 999 123-45-67"
					autoComplete="tel"
					inputMode="tel"
					value={contactForm.values.phone}
					error={contactForm.errors.phone}
					isRequired
					onChange={contactForm.handleChange}
					onBlur={contactForm.handleBlur}
				/>
				<FormField
					name="email"
					label="Ваша почта"
					type="email"
					placeholder="name@company.ru"
					autoComplete="email"
					value={contactForm.values.email}
					error={contactForm.errors.email}
					isRequired
					onChange={contactForm.handleChange}
					onBlur={contactForm.handleBlur}
				/>
				<FormField
					name="company"
					label="Название Вашей компании"
					placeholder="ООО «Компания»"
					autoComplete="organization"
					value={contactForm.values.company}
					onChange={contactForm.handleChange}
					onBlur={contactForm.handleBlur}
				/>
				<FormField
					className={s.fullWidth}
					name="website"
					label="Ваш сайт"
					type="url"
					placeholder="https://company.ru"
					autoComplete="url"
					value={contactForm.values.website}
					onChange={contactForm.handleChange}
					onBlur={contactForm.handleBlur}
				/>
				<FormField
					className={s.fullWidth}
					name="comment"
					label="Комментарий"
					placeholder="Расскажите о вашей задаче"
					value={contactForm.values.comment}
					isMultiline
					onChange={contactForm.handleChange}
					onBlur={contactForm.handleBlur}
				/>
			</div>

			<div className={s.consent}>
				<label className={s.consentLabel}>
					<input
						className={s.checkbox}
						type="checkbox"
						name="isConsentGiven"
						checked={contactForm.values.isConsentGiven}
						aria-invalid={Boolean(contactForm.errors.isConsentGiven)}
						aria-describedby={contactForm.errors.isConsentGiven ? 'contact-consent-error' : undefined}
						onChange={contactForm.handleChange}
						onBlur={contactForm.handleBlur}
					/>
					<span>
						Согласен с{' '}
						<a className={s.consentLink} href={privacyPolicyHref} target="_blank" rel="noopener noreferrer">
							политикой конфиденциальности
						</a>{' '}
						и{' '}
						<a className={s.consentLink} href={userAgreementHref} target="_blank" rel="noopener noreferrer">
							условиями использования
						</a>
					</span>
				</label>
				{contactForm.errors.isConsentGiven && (
					<p className={s.consentError} id="contact-consent-error">
						{contactForm.errors.isConsentGiven}
					</p>
				)}
			</div>

			<Button type="submit" size="large" isBlock disabled={isSubmitting} aria-busy={isSubmitting}>
				{isSubmitting && <span className={s.spinner} aria-hidden />}
				{isSubmitting ? 'Отправляем…' : 'Отправить'}
			</Button>
		</form>
	);
};
