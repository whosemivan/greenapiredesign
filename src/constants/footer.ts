import WhatsappIcon from '@/assets/icons/social/whatsapp.svg';
import TelegramIcon from '@/assets/icons/social/telegram.svg';
import YoutubeIcon from '@/assets/icons/social/youtube.svg';
import RutubeIcon from '@/assets/icons/social/rutube.svg';
import LinkedinIcon from '@/assets/icons/social/linkedin.svg';
import DzenIcon from '@/assets/icons/social/dzen.svg';
import VkIcon from '@/assets/icons/social/vk.svg';
import ForumIcon from '@/assets/icons/support/github.svg';
import EmailIcon from '@/assets/icons/support/email.svg';
import SupportWhatsappIcon from '@/assets/icons/support/whatsapp.svg';
import SupportTelegramIcon from '@/assets/icons/support/telegram.svg';
import SupportMaxIcon from '@/assets/icons/support/max.svg';
import type { NavigationLinkType } from '@/types/navigation';
import { REGISTRY_URL, SITE_URL, SUPPORT_EMAIL, SUPPORT_WHATSAPP_URL } from './links';

export type FooterColumnListItemType = {
	id: string;
	title: string;
	linksList: NavigationLinkType[];
};

export type IconLinkListItemType = {
	id: string;
	label: string;
	href: string;
	icon: typeof WhatsappIcon;
};

export const FOOTER_MENU_LIST: NavigationLinkType[] = [
	{ id: 'docs', label: 'Документация', href: `${SITE_URL}/docs/` },
	{ id: 'sdk', label: 'SDK', href: `${SITE_URL}/docs/sdk/` },
	{ id: 'chatbots', label: 'Чат-боты', href: `${SITE_URL}/docs/chatbots/` },
	{ id: 'integrations', label: 'Интеграции', href: `${SITE_URL}/docs/integration/` },
	{ id: 'releases', label: 'Релизы', href: `${SITE_URL}/docs/release/` },
	{ id: 'articles', label: 'Статьи', href: `${SITE_URL}/articles/` },
	{ id: 'blog', label: 'Блог', href: `${SITE_URL}/blog/` },
	{ id: 'news', label: 'Новости', href: `${SITE_URL}/articles/news/` },
	{ id: 'news-archive', label: 'Архив новостей', href: `${SITE_URL}/docs/news/` },
	{ id: 'faq', label: 'FAQ', href: `${SITE_URL}/docs/faq/` },
	{ id: 'partner', label: 'Стать партнером ⭐', href: `${SITE_URL}/become-a-partner` },
	{ id: 'pricing', label: 'Тарифы', href: '#pricing' },
	{ id: 'link-builder', label: 'Конструктор ссылок', href: `${SITE_URL}/link-builder` },
	{ id: 'about', label: 'О нас', href: `${SITE_URL}/about` },
	{ id: 'contacts', label: 'Контакты', href: `${SITE_URL}/contacts` },
	{ id: 'vacancies', label: 'Работа у нас', href: `${SITE_URL}/vacancies` },
	{ id: 'status', label: 'GREEN-API status', href: 'https://status.green-api.com/', isExternal: true },
];

const docsLink = (id: string, label: string, path: string): NavigationLinkType => ({
	id,
	label,
	href: `${SITE_URL}/docs/${path}`,
});

export const FOOTER_COLUMNS_LIST: FooterColumnListItemType[] = [
	{
		id: 'integrations',
		title: 'Интеграции',
		linksList: [
			docsLink('make', 'Make', 'integration/make/'),
			docsLink('ms-excel', 'MS Excel', 'integration/ms_excel/'),
			docsLink('gohighlevel', 'GoHighLevel', 'integration/gohighlevel/'),
			docsLink('rocket-chat', 'Rocket.chat', 'integration/rocket-chat/'),
			docsLink('zapier', 'Zapier', 'integration/zapier/'),
			docsLink('zabbix', 'Zabbix', 'integration/zabbix/'),
			docsLink('slack', 'Slack', 'integration/slack/'),
			docsLink('n8n', 'n8n', 'integration/n8n/'),
			docsLink('all', 'Все интеграции...', 'integration/'),
		],
	},
	{
		id: 'sdk',
		title: 'SDK',
		linksList: [
			docsLink('python', 'Python', 'sdk/python/'),
			docsLink('nodejs', 'Node.js', 'sdk/nodejs/'),
			docsLink('html', 'HTML', 'sdk/html5/'),
			docsLink('1c', '1С:Предприятие', 'sdk/1c/'),
			docsLink('php', 'PHP', 'sdk/php/'),
			docsLink('cpp', 'C++', 'sdk/cpp/'),
			docsLink('java', 'Java', 'sdk/java/'),
			docsLink('go', 'Go', 'sdk/golang/'),
		],
	},
	{
		id: 'chatbots',
		title: 'Чат-боты',
		linksList: [
			docsLink('python', 'Python', 'chatbots/python/'),
			docsLink('java', 'Java', 'chatbots/java/'),
			docsLink('go', 'Go', 'chatbots/golang/'),
			docsLink('1c', '1С:Предприятие', 'chatbots/1c/'),
			docsLink('nodejs', 'Node.js', 'chatbots/nodejs/nodejs-v2/'),
		],
	},
	{
		id: 'products',
		title: 'Продукты',
		linksList: [
			{ id: 'whatsapp', label: 'GREEN-API', href: `${SITE_URL}/` },
			{ id: 'waba', label: 'GREEN-API: WABA', href: `${SITE_URL}/waba` },
			{ id: 'gpt', label: 'GREEN-API: GPT', href: `${SITE_URL}/docs/gpt/` },
			{ id: 'max', label: 'GREEN-API: MAX', href: `${SITE_URL}/max` },
			{ id: 'max-bot-api', label: 'GREEN-API: MAX BOT API', href: `${SITE_URL}/max-bot-api` },
			{ id: 'marketing', label: 'GREEN-API: Marketing', href: `${SITE_URL}/marketing/` },
			{ id: 'telegram', label: 'GREEN-API: Telegram 🔥', href: `${SITE_URL}/telegram` },
		],
	},
	{
		id: 'legal',
		title: 'Правовая информация',
		linksList: [
			{ id: 'user-agreement', label: 'Пользовательское соглашение', href: `${SITE_URL}/user-agreement` },
			{ id: 'license', label: 'Лицензионный договор-оферта', href: `${SITE_URL}/license-agreement` },
			{
				id: 'recurring-payment',
				label: 'Оферта услуги «Автоплатеж»',
				href: `${SITE_URL}/recurring-payment-agreement`,
			},
			{
				id: 'privacy',
				label: 'Политика конфиденциальности и обработки персональных данных GREEN-API',
				href: `${SITE_URL}/privacy-policy`,
			},
			{ id: 'registry', label: 'Реестр отечественного ПО', href: REGISTRY_URL },
			{ id: 'logo', label: 'GREEN-API: Logo', href: 'https://github.com/green-api/logo', isExternal: true },
		],
	},
	{
		id: 'bitrix24',
		title: 'Битрикс24',
		linksList: [
			{
				id: 'user-agreement-bitrix24',
				label: 'Пользовательское соглашение для Битрикс24',
				href: `${SITE_URL}/user-agreement-bitrix24`,
			},
			{
				id: 'privacy-bitrix24',
				label: 'Политика конфиденциальности для Битрикс24',
				href: `${SITE_URL}/privacy-policy-bitrix24`,
			},
		],
	},
];

export const SUPPORT_LINKS_LIST: IconLinkListItemType[] = [
	{ id: 'forum', label: 'Форум', href: `${SITE_URL}/ru/forum`, icon: ForumIcon },
	{
		id: 'issue',
		label: 'Сообщить о проблеме',
		href: 'https://github.com/green-api/issues/issues/new',
		icon: ForumIcon,
	},
	{ id: 'email', label: SUPPORT_EMAIL, href: `mailto:${SUPPORT_EMAIL}`, icon: EmailIcon },
	{ id: 'whatsapp', label: 'Канал поддержки WhatsApp*', href: SUPPORT_WHATSAPP_URL, icon: SupportWhatsappIcon },
	{
		id: 'telegram',
		label: 'Канал поддержки Telegram',
		href: 'https://t.me/greenapi_support_ru_bot',
		icon: SupportTelegramIcon,
	},
	{ id: 'max', label: 'Канал поддержки MAX', href: 'https://max.ru/id5047259512_bot', icon: SupportMaxIcon },
];

export const SOCIAL_LINKS_LIST: IconLinkListItemType[] = [
	{
		id: 'whatsapp',
		label: 'WhatsApp*',
		href: 'https://whatsapp.com/channel/0029VaHUM5TBA1f7cG29nO1C',
		icon: WhatsappIcon,
	},
	{ id: 'telegram', label: 'Telegram', href: 'https://t.me/green_api', icon: TelegramIcon },
	{ id: 'youtube', label: 'YouTube Канал', href: 'https://www.youtube.com/@green-api', icon: YoutubeIcon },
	{ id: 'rutube', label: 'RuTube Канал', href: 'https://rutube.ru/channel/49192924', icon: RutubeIcon },
	{
		id: 'linkedin',
		label: 'LinkedIn',
		href: 'https://www.linkedin.com/company/green-api/posts/',
		icon: LinkedinIcon,
	},
	{ id: 'dzen', label: 'Dzen', href: 'https://dzen.ru/id/67d93508575f0a425c77809e', icon: DzenIcon },
	{ id: 'vk', label: 'VK', href: 'https://vk.com/green_api', icon: VkIcon },
];

export const APP_STORES_LIST = [
	{
		id: 'google-play',
		label: 'Скачать в Google Play',
		href: 'https://play.google.com/store/apps/details?id=com.greenapi.console',
		imageSrc: '/images/stores/google-play.svg',
		width: 136,
		height: 40,
	},
	{
		id: 'rustore',
		label: 'Скачать в RuStore',
		href: 'https://www.rustore.ru/catalog/app/com.greenapi.console',
		imageSrc: '/images/stores/rustore.svg',
		width: 135,
		height: 40,
	},
];

export const COMPANY_DETAILS = {
	name: 'Общество с ограниченной ответственностью «Грин-АПИ»',
	requisites: 'ИНН 5047259512, ОГРН 1215000131532',
	phone: '+7-999-333-12-23',
	phoneHref: 'tel:+79993331223',
	address: '141402, Московская область, г. Химки, ул. Московская, стр. 38А, помещ. 9/001, БЦ "Панорама"',
	okved: 'Основной ОКВЭД: 62.01 — Разработка компьютерного программного обеспечения.',
	registry: 'Единый реестр российских программ для ЭВМ и баз данных, запись № 26143 ПО «GREEN-API»',
	registryHref: REGISTRY_URL,
};

export const META_DISCLAIMER =
	'*WhatsApp принадлежит компании Meta Platforms Inc., деятельность которой признана экстремистской и запрещена на территории РФ.';
