import { useEffect, useState, type FC } from 'react';
import clsx from 'clsx';
import { Button } from '@/components/ui/Button/Button';
import type { NavigationMenuItemType } from '@/types/navigation';
import s from './MobileMenu.module.scss';

type MobileMenuPropsType = {
	menuList: NavigationMenuItemType[];
	languagesList: NavigationMenuItemType[];
	currentLanguageId: string;
	loginHref: string;
};

const MENU_PANEL_ID = 'mobile-menu-panel';

export const MobileMenu: FC<MobileMenuPropsType> = ({ menuList, languagesList, currentLanguageId, loginHref }) => {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		document.body.style.overflow = isOpen ? 'hidden' : '';

		return () => {
			document.body.style.overflow = '';
		};
	}, [isOpen]);

	useEffect(() => {
		if (!isOpen) {
			return;
		}

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				setIsOpen(false);
			}
		};

		document.addEventListener('keydown', handleKeyDown);

		return () => document.removeEventListener('keydown', handleKeyDown);
	}, [isOpen]);

	const handleClose = () => setIsOpen(false);

	return (
		<div className={s.mobileMenu}>
			<button
				className={clsx(s.burger, isOpen && s.burgerOpen)}
				type="button"
				aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
				aria-expanded={isOpen}
				aria-controls={MENU_PANEL_ID}
				onClick={() => setIsOpen((isPrevOpen) => !isPrevOpen)}
			>
				<span className={s.burgerLine} />
				<span className={s.burgerLine} />
				<span className={s.burgerLine} />
			</button>

			<nav
				className={clsx(s.panel, isOpen && s.panelOpen)}
				id={MENU_PANEL_ID}
				aria-label="Мобильное меню"
				inert={!isOpen}
			>
				<ul className={s.menuList}>
					{menuList.map((menuItem) => (
						<li key={menuItem.id}>
							<a className={s.menuLink} href={menuItem.href} onClick={handleClose}>
								{menuItem.label}
							</a>

							{menuItem.children && (
								<ul className={s.submenuList}>
									{menuItem.children.map((childItem) => (
										<li key={childItem.id}>
											<a className={s.submenuLink} href={childItem.href} onClick={handleClose}>
												{childItem.label}
											</a>
										</li>
									))}
								</ul>
							)}
						</li>
					))}
				</ul>

				<div className={s.footer}>
					<div className={s.languagesList}>
						{languagesList.map((language) => (
							<a
								key={language.id}
								className={clsx(
									s.languageLink,
									language.id === currentLanguageId && s.languageLinkActive,
								)}
								href={language.href}
								aria-current={language.id === currentLanguageId ? 'true' : undefined}
							>
								{language.label}
							</a>
						))}
					</div>

					<Button href={loginHref} size="large" isBlock>
						Войти
					</Button>
				</div>
			</nav>
		</div>
	);
};
