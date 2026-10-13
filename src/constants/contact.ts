import SupportIcon from '@/assets/icons/contact/support.svg';
import RegistryIcon from '@/assets/icons/contact/registry.svg';
import SlaIcon from '@/assets/icons/contact/sla.svg';
import { REGISTRY_URL } from './links';

export const CONTACT_ADVANTAGES_LIST = [
	{
		id: 'support',
		icon: SupportIcon,
		title: 'Техподдержка',
		caption: 'Каналы поддержки в WhatsApp*, Telegram и MAX',
		href: '#footer-support',
	},
	{
		id: 'registry',
		icon: RegistryIcon,
		title: 'Реестр отечественного ПО',
		caption: 'Запись № 26143 ПО «GREEN-API»',
		href: REGISTRY_URL,
	},
	{
		id: 'status',
		icon: SlaIcon,
		title: 'GREEN-API status',
		caption: 'status.green-api.com',
		href: 'https://status.green-api.com/',
	},
];
