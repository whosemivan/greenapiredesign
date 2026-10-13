import GatewayIcon from '@/assets/icons/products/gateway.svg';
import WabaIcon from '@/assets/icons/products/waba.svg';
import TelegramIcon from '@/assets/icons/products/telegram.svg';
import GptIcon from '@/assets/icons/products/gpt.svg';
import MaxIcon from '@/assets/icons/products/max.svg';
import MarketingIcon from '@/assets/icons/products/marketing.svg';
import type { AccentToneType } from '@/types/common';
import { SITE_URL } from './links';

export type ProductListItemType = {
	id: string;
	icon: typeof GatewayIcon;
	tone: AccentToneType;
	label: string;
	title: string;
	description: string;
	linkText: string;
	href: string;
};

export const PRODUCTS_LIST: ProductListItemType[] = [
	{
		id: 'whatsapp',
		icon: GatewayIcon,
		tone: 'green',
		label: 'WHATSAPP* API',
		title: 'GREEN-API',
		description:
			'WhatsApp* API для отправки сообщений, изображений, видео и документов до 100 МБ. Поддержка групп, статусов и статистики доставки.',
		linkText: 'Документация',
		href: `${SITE_URL}/docs/`,
	},
	{
		id: 'waba',
		icon: WabaIcon,
		tone: 'blue',
		label: 'WHATSAPP* BUSINESS API',
		title: 'GREEN-API: WABA',
		description:
			'Интеграция WhatsApp* Business API (WABA) для отправки и получения сообщений. Подключите WhatsApp* к CRM и сервисам через HTTP API.',
		linkText: 'Подробнее о WABA',
		href: `${SITE_URL}/waba`,
	},
	{
		id: 'telegram',
		icon: TelegramIcon,
		tone: 'cyan',
		label: 'TELEGRAM API',
		title: 'GREEN-API: Telegram 🔥',
		description:
			'Интеграция с Telegram на любом языке программирования: PHP, JavaScript, 1С, Python, Java, C#, VBA.',
		linkText: 'Подробнее о Telegram API',
		href: `${SITE_URL}/telegram`,
	},
	{
		id: 'gpt',
		icon: GptIcon,
		tone: 'purple',
		label: 'GPT',
		title: 'GREEN-API: GPT',
		description:
			'Библиотеки GPT чат-ботов для WhatsApp*. Подключите чат-ботов и автоматизируйте общение с клиентами.',
		linkText: 'Библиотеки GPT',
		href: `${SITE_URL}/docs/gpt/`,
	},
	{
		id: 'max',
		icon: MaxIcon,
		tone: 'green',
		label: 'MAX API · MAX BOT API',
		title: 'GREEN-API: MAX',
		description:
			'MAX API для отправки и получения сообщений, изображений, видео и файлов до 100 МБ. Управление группами. SDK для MAX BOT API.',
		linkText: 'Подробнее о MAX API',
		href: `${SITE_URL}/max`,
	},
	{
		id: 'marketing',
		icon: MarketingIcon,
		tone: 'orange',
		label: 'MARKETING',
		title: 'GREEN-API: Marketing',
		description: 'Сервис для рассылок сообщений в мессенджерах от GREEN-API.',
		linkText: 'Подробнее',
		href: `${SITE_URL}/marketing/`,
	},
];
