import type { NavigationMenuItemType } from '@/types/navigation';
import { ENGLISH_SITE_URL, SITE_URL } from './links';

export const PRODUCTS_MENU_LIST: NavigationMenuItemType[] = [
	{ id: 'whatsapp', label: 'GREEN-API', href: `${SITE_URL}/` },
	{ id: 'waba', label: 'GREEN-API: WABA', href: `${SITE_URL}/waba` },
	{ id: 'telegram', label: 'GREEN-API: Telegram', href: `${SITE_URL}/telegram` },
	{ id: 'gpt', label: 'GREEN-API: GPT', href: `${SITE_URL}/docs/gpt/` },
	{ id: 'max', label: 'GREEN-API: MAX', href: `${SITE_URL}/max` },
	{ id: 'marketing', label: 'GREEN-API: Marketing', href: `${SITE_URL}/marketing/` },
];

export const HEADER_MENU_LIST: NavigationMenuItemType[] = [
	{ id: 'docs', label: 'Документация', href: `${SITE_URL}/docs/` },
	{ id: 'sdk', label: 'SDK', href: `${SITE_URL}/docs/sdk/` },
	{ id: 'products', label: 'Продукты', href: '#products', children: PRODUCTS_MENU_LIST },
	{ id: 'chatbots', label: 'Чат-боты', href: `${SITE_URL}/docs/chatbots/` },
	{ id: 'integrations', label: 'Интеграции', href: `${SITE_URL}/docs/integration/` },
	{ id: 'pricing', label: 'Тарифы', href: '#pricing' },
	{ id: 'releases', label: 'Релизы', href: `${SITE_URL}/docs/release/` },
	{ id: 'articles', label: 'Статьи', href: `${SITE_URL}/articles/` },
	{ id: 'blog', label: 'Блог', href: `${SITE_URL}/blog/` },
	{ id: 'news', label: 'Новости', href: `${SITE_URL}/articles/news/` },
	{ id: 'faq', label: 'FAQ', href: `${SITE_URL}/docs/faq/` },
];

export const LANGUAGES_LIST: NavigationMenuItemType[] = [
	{ id: 'ru', label: '🇷🇺 Русский', href: '/' },
	{ id: 'en', label: '🇬🇧 English', href: ENGLISH_SITE_URL },
];

export const CURRENT_LANGUAGE_ID = 'ru';
