import { useRef, useState, type KeyboardEvent } from 'react';

type TabListItemType = {
	id: string;
};

const OFFSET_BY_KEY: Record<string, number> = { ArrowRight: 1, ArrowLeft: -1 };

// Паттерн WAI-ARIA Tabs: переключение стрелками влево/вправо
export const useTabs = <T extends TabListItemType>(tabsList: T[], idPrefix: string) => {
	const [activeTabId, setActiveTabId] = useState(tabsList[0].id);

	const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

	const activeTab = tabsList.find((tab) => tab.id === activeTabId) ?? tabsList[0];

	const handleTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
		const offset = OFFSET_BY_KEY[event.key];

		if (!offset) {
			return;
		}

		event.preventDefault();

		const nextTab = tabsList[(index + offset + tabsList.length) % tabsList.length];
		setActiveTabId(nextTab.id);
		tabRefs.current[nextTab.id]?.focus();
	};

	const getTabProps = (tab: T, index: number) => {
		const isActive = tab.id === activeTabId;

		return {
			ref: (element: HTMLButtonElement | null) => {
				tabRefs.current[tab.id] = element;
			},
			id: `${idPrefix}-tab-${tab.id}`,
			type: 'button' as const,
			role: 'tab',
			'aria-selected': isActive,
			'aria-controls': `${idPrefix}-panel-${tab.id}`,
			tabIndex: isActive ? 0 : -1,
			onClick: () => setActiveTabId(tab.id),
			onKeyDown: (event: KeyboardEvent<HTMLButtonElement>) => handleTabKeyDown(event, index),
		};
	};

	const getPanelProps = (tab: T) => ({
		id: `${idPrefix}-panel-${tab.id}`,
		role: 'tabpanel',
		'aria-labelledby': `${idPrefix}-tab-${tab.id}`,
		hidden: tab.id !== activeTabId,
	});

	return { activeTabId, activeTab, getTabProps, getPanelProps };
};
