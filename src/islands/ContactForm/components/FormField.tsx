import type { FC, InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import clsx from 'clsx';
import s from './FormField.module.scss';

type FormFieldPropsType = {
	name: string;
	label: string;
	error?: string;
	isRequired?: boolean;
	isMultiline?: boolean;
	className?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement> & TextareaHTMLAttributes<HTMLTextAreaElement>, 'className'>;

export const FormField: FC<FormFieldPropsType> = ({
	name,
	label,
	error,
	isRequired,
	isMultiline,
	className,
	...controlProps
}) => {
	const controlId = `contact-${name}`;
	const errorId = `${controlId}-error`;

	const sharedProps = {
		id: controlId,
		name,
		required: isRequired,
		'aria-invalid': Boolean(error),
		'aria-describedby': error ? errorId : undefined,
		className: clsx(s.control, error && s.controlInvalid),
	};

	return (
		<div className={clsx(s.formField, className)}>
			<label className={s.label} htmlFor={controlId}>
				{label}
				{isRequired && ' *'}
			</label>

			{isMultiline ? (
				<textarea rows={3} {...sharedProps} {...controlProps} />
			) : (
				<input {...sharedProps} {...controlProps} />
			)}

			{error && (
				<p className={s.error} id={errorId}>
					{error}
				</p>
			)}
		</div>
	);
};
