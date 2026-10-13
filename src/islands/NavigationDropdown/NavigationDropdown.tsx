import { useCallback, useId, useRef, useState, type FC } from 'react';
import clsx from 'clsx';
import ChevronDownIcon from '@/assets/icons/chevron-down.svg?react';
import { useClickOutside } from '@/hooks/useClickOutside';
import type { NavigationLinkType } from '@/types/navigation';
import s from './NavigationDropdown.module.scss';

type NavigationDropdownPropsType = {
	label: string;
	linksList: NavigationLinkType[];
	activeId?: string;
	align?: 'start' | 'end';
	triggerClassName?: string;
};

export const NavigationDropdown: FC<NavigationDropdownPropsType> = ({
	label,
	linksList,
	activeId,
	align = 'start',
	triggerClassName,
}) => {
	const [isOpen, setIsOpen] = useState(false);

	const containerRef = useRef<HTMLDivElement>(null);
	const menuId = useId();

	const handleClose = useCallback(() => setIsOpen(false), []);

	useClickOutside(containerRef, handleClose, isOpen);

	return (
		<div className={s.dropdown} ref={containerRef}>
			<button
				className={clsx(s.trigger, triggerClassName)}
				type="button"
				aria-expanded={isOpen}
				aria-controls={menuId}
				onClick={() => setIsOpen((isPrevOpen) => !isPrevOpen)}
			>
				{label}
				<ChevronDownIcon className={clsx(s.chevron, isOpen && s.chevronOpen)} aria-hidden />
			</button>

			{isOpen && (
				<ul className={clsx(s.menu, s[align])} id={menuId}>
					{linksList.map((link) => (
						<li key={link.id}>
							<a
								className={clsx(s.menuLink, link.id === activeId && s.menuLinkActive)}
								href={link.href}
								aria-current={link.id === activeId ? 'true' : undefined}
								onClick={handleClose}
							>
								{link.label}
							</a>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};
