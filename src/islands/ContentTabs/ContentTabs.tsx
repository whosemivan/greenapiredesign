import type { FC, ReactNode } from 'react';
import clsx from 'clsx';
import { useTabs } from '@/hooks/useTabs';
import s from './ContentTabs.module.scss';

export type ContentTabListItemType = {
	id: string;
	label: string;
};

type ContentTabsPropsType = {
	tabsList: ContentTabListItemType[];
	ariaLabel: string;
	// Содержимое вкладок приходит из Astro именованными слотами
	[slotName: string]: ReactNode | ContentTabListItemType[] | string;
};

export const ContentTabs: FC<ContentTabsPropsType> = ({ tabsList, ariaLabel, ...panels }) => {
	const tabs = useTabs(tabsList, 'content');

	return (
		<div className={s.contentTabs}>
			<div className={s.tabsList} role="tablist" aria-label={ariaLabel}>
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

			{tabsList.map((tab) => (
				<div key={tab.id} className={s.panel} {...tabs.getPanelProps(tab)}>
					{panels[tab.id] as ReactNode}
				</div>
			))}
		</div>
	);
};
