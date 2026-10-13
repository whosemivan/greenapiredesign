import type { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import clsx from 'clsx';
import s from './Button.module.scss';

type ButtonVariantType = 'primary' | 'secondary' | 'ghost';

type ButtonSizeType = 'small' | 'medium' | 'large';

type ButtonPropsType = {
	children: ReactNode;
	variant?: ButtonVariantType;
	size?: ButtonSizeType;
	href?: string;
	isExternal?: boolean;
	isBlock?: boolean;
	className?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'>;

export const Button: FC<ButtonPropsType> = ({
	children,
	variant = 'primary',
	size = 'medium',
	href,
	isExternal,
	isBlock,
	className,
	type = 'button',
	...buttonProps
}) => {
	const classNames = clsx(s.button, s[variant], s[size], isBlock && s.block, className);

	if (href) {
		return (
			<a
				className={classNames}
				href={href}
				target={isExternal ? '_blank' : undefined}
				rel={isExternal ? 'noopener noreferrer' : undefined}
			>
				{children}
			</a>
		);
	}

	return (
		<button className={classNames} type={type} {...buttonProps}>
			{children}
		</button>
	);
};
