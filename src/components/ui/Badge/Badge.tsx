import type { FC, ReactNode } from 'react';
import clsx from 'clsx';
import type { AccentToneType } from '@/types/common';
import s from './Badge.module.scss';

type BadgePropsType = {
	children: ReactNode;
	tone?: AccentToneType | 'neutral';
	isCode?: boolean;
	className?: string;
};

export const Badge: FC<BadgePropsType> = ({ children, tone = 'green', isCode, className }) => {
	return <span className={clsx(s.badge, s[tone], isCode && s.code, className)}>{children}</span>;
};
