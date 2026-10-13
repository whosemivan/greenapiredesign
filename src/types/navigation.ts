export type NavigationLinkType = {
	id: string;
	label: string;
	href: string;
	isExternal?: boolean;
};

export type NavigationMenuItemType = NavigationLinkType & {
	// Пункты выпадающего меню
	children?: NavigationLinkType[];
};
