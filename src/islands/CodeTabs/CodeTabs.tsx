import type { FC, ReactNode } from 'react';
import clsx from 'clsx';
import CopyIcon from '@/assets/icons/copy.svg?react';
import CheckIcon from '@/assets/icons/check.svg?react';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import { useTabs } from '@/hooks/useTabs';
import s from './CodeTabs.module.scss';

export type CodeTabListItemType = {
	id: string;
	label: string;
	code: string;
	docsHref: string;
};

type CodeTabsPropsType = {
	tabsList: CodeTabListItemType[];
	// Код подсвечивается при сборке и приходит из Astro именованными слотами
	[slotName: string]: ReactNode | CodeTabListItemType[];
};

export const CodeTabs: FC<CodeTabsPropsType> = ({ tabsList, ...panels }) => {
	const tabs = useTabs(tabsList, 'code');
	const copyToClipboard = useCopyToClipboard();

	return (
		<div className={s.codeTabs}>
			<div className={s.tabsList} role="tablist" aria-label="Язык программирования">
				{tabsList.map((tab, index) => (
					<button
						key={tab.id}
						className={clsx(s.tab, tab.id === tabs.activeTabId && s.tabActive)}
						{...tabs.getTabProps(tab, index)}
					>
						{tab.label}
					</button>
				))}
			</div>

			<div className={s.panels}>
				<div className={s.toolbar}>
					<a className={s.docsLink} href={tabs.activeTab.docsHref}>
						Документация {tabs.activeTab.label}
					</a>
					<button
						className={clsx(s.copyButton, copyToClipboard.isCopied && s.copyButtonDone)}
						type="button"
						onClick={() => copyToClipboard.copy(tabs.activeTab.code)}
					>
						{copyToClipboard.isCopied ? (
							<CheckIcon className={s.copyIcon} aria-hidden />
						) : (
							<CopyIcon className={s.copyIcon} aria-hidden />
						)}
						<span aria-live="polite">
							{copyToClipboard.isCopied && 'Скопировано'}
							{copyToClipboard.hasError && 'Не удалось скопировать'}
							{!copyToClipboard.isCopied && !copyToClipboard.hasError && 'Копировать'}
						</span>
					</button>
				</div>

				{tabsList.map((tab) => (
					<div key={tab.id} className={s.panel} {...tabs.getPanelProps(tab)}>
						{panels[tab.id] as ReactNode}
					</div>
				))}
			</div>
		</div>
	);
};
