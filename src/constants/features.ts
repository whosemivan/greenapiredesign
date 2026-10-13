import TextIcon from '@/assets/icons/features/text.svg';
import MediaIcon from '@/assets/icons/features/media.svg';
import BotIcon from '@/assets/icons/features/bot.svg';
import LocationIcon from '@/assets/icons/features/location.svg';
import GroupsIcon from '@/assets/icons/features/groups.svg';
import CheckNumberIcon from '@/assets/icons/features/check-number.svg';
import type { AccentToneType } from '@/types/common';
import { SITE_URL } from './links';

export type FeatureListItemType = {
	id: string;
	icon: typeof TextIcon;
	method: string;
	methodTone: AccentToneType;
	title: string;
	description: string;
	note: string;
	href: string;
};

export const FEATURES_LIST: FeatureListItemType[] = [
	{
		id: 'text',
		icon: TextIcon,
		method: 'SendMessage',
		methodTone: 'green',
		title: 'Текст и опросы',
		description:
			'Отправка и получение текстовых сообщений с поддержкой эмоджи. Отправка и получение опросов, получение статистики опросов.',
		note: 'SendMessage · SendPoll',
		href: `${SITE_URL}/docs/api/sending/SendMessage/`,
	},
	{
		id: 'media',
		icon: MediaIcon,
		method: 'SendFileByUpload',
		methodTone: 'green',
		title: 'Медиа до 100 Мб',
		description: 'Отправка и получение изображений, видео, документов и файлов до 100 Мб.',
		note: 'SendFileByUpload · SendFileByUrl',
		href: `${SITE_URL}/docs/api/sending/SendFileByUpload/`,
	},
	{
		id: 'gpt-bots',
		icon: BotIcon,
		method: 'GPT 🔥',
		methodTone: 'purple',
		title: 'Интеграции с ChatGPT',
		description: 'Библиотеки чат-ботов с поддержкой интеграции OpenAI GPT на Python, Go и Node.js.',
		note: 'Python · Go · Node.js',
		href: `${SITE_URL}/docs/gpt/`,
	},
	{
		id: 'location',
		icon: LocationIcon,
		method: 'SendLocation',
		methodTone: 'blue',
		title: 'Геолокация и контакт',
		description: 'Отправка геолокации и визитной карточки компании.',
		note: 'SendLocation · SendContact',
		href: `${SITE_URL}/docs/api/sending/SendLocation/`,
	},
	{
		id: 'groups',
		icon: GroupsIcon,
		method: 'Groups',
		methodTone: 'green',
		title: 'Группы, статусы и аватарки',
		description:
			'Создание групп, управление участниками, установка аватара группы. Отправка и получение статусов, статистика доставки и просмотра. Получение и установка аватаров контактов.',
		note: 'Groups · Statuses · SetProfilePicture',
		href: `${SITE_URL}/docs/api/groups/`,
	},
	{
		id: 'check-number',
		icon: CheckNumberIcon,
		method: 'CheckWhatsapp',
		methodTone: 'emerald',
		title: 'Проверка номеров и журналы',
		description:
			'Проверка наличия WhatsApp* на номере телефона. Получение истории отправленных и полученных сообщений за всё время.',
		note: 'CheckWhatsapp · Journals',
		href: `${SITE_URL}/docs/api/service/CheckWhatsapp/`,
	},
];
