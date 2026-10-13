import MakeIcon from '@/assets/icons/integrations/make.svg';
import ExcelIcon from '@/assets/icons/integrations/excel.svg';
import ZapierIcon from '@/assets/icons/integrations/zapier.svg';
import N8nIcon from '@/assets/icons/integrations/n8n.svg';
import Bitrix24Icon from '@/assets/icons/integrations/bitrix24.svg';
import GptIcon from '@/assets/icons/products/gpt.svg';
import RocketChatIcon from '@/assets/icons/integrations/rocketchat.svg';
import ZabbixIcon from '@/assets/icons/integrations/zabbix.svg';
import SlackIcon from '@/assets/icons/integrations/slack.svg';
import GoHighLevelIcon from '@/assets/icons/integrations/gohighlevel.svg';
import { SITE_URL } from './links';

export type IntegrationListItemType = {
	id: string;
	icon: typeof MakeIcon;
	title: string;
	caption: string;
	href: string;
};

export const INTEGRATIONS_LIST: IntegrationListItemType[] = [
	{
		id: 'make',
		icon: MakeIcon,
		title: 'Make',
		caption: 'Интеграция с WhatsApp*',
		href: `${SITE_URL}/docs/integration/make/`,
	},
	{
		id: 'excel',
		icon: ExcelIcon,
		title: 'MS Excel',
		caption: 'Работа с WhatsApp*',
		href: `${SITE_URL}/docs/integration/ms_excel/`,
	},
	{
		id: 'zapier',
		icon: ZapierIcon,
		title: 'Zapier',
		caption: 'Автоматизация WhatsApp*',
		href: `${SITE_URL}/docs/integration/zapier/`,
	},
	{
		id: 'n8n',
		icon: N8nIcon,
		title: 'n8n',
		caption: 'Интеграция с WhatsApp*',
		href: `${SITE_URL}/docs/integration/n8n/`,
	},
	{
		id: 'bitrix24',
		icon: Bitrix24Icon,
		title: 'Bitrix24',
		caption: 'WhatsApp* в Bitrix24',
		href: `${SITE_URL}/docs/integration/bitrix24/`,
	},
	{ id: 'gpt', icon: GptIcon, title: 'GPT', caption: 'Чат-боты с GPT', href: `${SITE_URL}/docs/gpt/` },
	{
		id: 'rocketchat',
		icon: RocketChatIcon,
		title: 'Rocket.Chat',
		caption: 'WhatsApp* в Rocket.Chat',
		href: `${SITE_URL}/docs/integration/rocket-chat/`,
	},
	{
		id: 'zabbix',
		icon: ZabbixIcon,
		title: 'Zabbix',
		caption: 'Работа с WhatsApp*',
		href: `${SITE_URL}/docs/integration/zabbix/`,
	},
	{
		id: 'slack',
		icon: SlackIcon,
		title: 'Slack',
		caption: 'Интеграция с WhatsApp*',
		href: `${SITE_URL}/docs/integration/slack/`,
	},
	{
		id: 'gohighlevel',
		icon: GoHighLevelIcon,
		title: 'GoHighLevel',
		caption: 'WhatsApp* в GoHighLevel',
		href: `${SITE_URL}/docs/integration/gohighlevel/`,
	},
];

export type DeveloperToolListItemType = {
	id: string;
	title: string;
	href: string;
};

export const SDK_LIST: DeveloperToolListItemType[] = [
	{ id: '1c', title: '1С:Предприятие', href: `${SITE_URL}/docs/sdk/1c/` },
	{ id: 'nodejs', title: 'Node.js', href: `${SITE_URL}/docs/sdk/nodejs/` },
	{ id: 'html', title: 'HTML', href: `${SITE_URL}/docs/sdk/html5/` },
	{ id: 'python', title: 'Python', href: `${SITE_URL}/docs/sdk/python/` },
	{ id: 'php', title: 'PHP', href: `${SITE_URL}/docs/sdk/php/` },
	{ id: 'go', title: 'Go', href: `${SITE_URL}/docs/sdk/golang/` },
	{ id: 'java', title: 'Java', href: `${SITE_URL}/docs/sdk/java/` },
	{ id: 'cpp', title: 'C++', href: `${SITE_URL}/docs/sdk/cpp/` },
];

export const CHATBOTS_LIST: DeveloperToolListItemType[] = [
	{ id: '1c', title: '1С:Предприятие', href: `${SITE_URL}/docs/chatbots/1c/` },
	{ id: 'nodejs', title: 'Node.js', href: `${SITE_URL}/docs/chatbots/nodejs/nodejs-v2/` },
	{ id: 'python', title: 'Python', href: `${SITE_URL}/docs/chatbots/python/` },
	{ id: 'go', title: 'Go', href: `${SITE_URL}/docs/chatbots/golang/` },
	{ id: 'java', title: 'Java', href: `${SITE_URL}/docs/chatbots/java/` },
];
