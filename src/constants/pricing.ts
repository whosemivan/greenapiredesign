import type { AccentToneType } from '@/types/common';
import { BECOME_PARTNER_URL, CONSOLE_URL, SITE_URL } from './links';

export type BillingPeriodType = 'month' | 'year';

export type PricingPlanListItemType = {
	id: string;
	name: string;
	tone: AccentToneType | 'neutral';
	price: string;
	priceUnit: string;
	// Пункты поддерживают разметку **жирный**
	featuresList: string[];
	ctaText: string;
	ctaHref: string;
	hasYearlyBonus?: boolean;
};

export const ABOUT_TARIFFS_URL = `${SITE_URL}/docs/about-tariffs/`;

export const YEARLY_BONUS_TEXT = '+3 мес в подарок';

export const BILLING_PERIODS_LIST: { id: BillingPeriodType; label: string }[] = [
	{ id: 'month', label: 'Месяц' },
	{ id: 'year', label: 'Год' },
];

const MESSAGING_FEATURES_LIST = [
	'Отправка и получение текста, видео, аудио, изображений, документов, контакта, геопозиции, ссылки',
	'Отправка файлов до **100 МБ**',
	'Отправка сообщений с кнопками',
	'Неограниченное количество сообщений',
];

const GROUP_FEATURES_LIST = ['Работа с группами', 'Получение аватарок контактов и групп'];

export const PRICING_PLANS_LIST: PricingPlanListItemType[] = [
	{
		id: 'developer',
		name: 'Разработчик',
		tone: 'neutral',
		price: '0',
		priceUnit: 'руб/мес',
		featuresList: [
			'**3** чата',
			'**100** проверок наличия WhatsApp*',
			...MESSAGING_FEATURES_LIST,
			'**10** публикаций статусов',
			...GROUP_FEATURES_LIST,
		],
		ctaText: 'Начать работу',
		ctaHref: CONSOLE_URL,
	},
	{
		id: 'business',
		name: 'Бизнес',
		tone: 'green',
		price: '690',
		priceUnit: 'руб/мес',
		featuresList: [
			'**Неограниченное** количество чатов',
			'**30 000** проверок наличия WhatsApp*',
			...MESSAGING_FEATURES_LIST,
			'**100** публикаций статусов',
			...GROUP_FEATURES_LIST,
		],
		ctaText: 'Начать работу',
		ctaHref: CONSOLE_URL,
		hasYearlyBonus: true,
	},
	{
		id: 'chatbot',
		name: 'Чатбот',
		tone: 'purple',
		price: '960',
		priceUnit: 'руб/мес',
		featuresList: [
			'**Неограниченное** количество чатов',
			'**30 000** проверок наличия WhatsApp*',
			...MESSAGING_FEATURES_LIST,
			'**Неограниченное** количество публикаций статусов',
			...GROUP_FEATURES_LIST,
			'Работа без телефонной трубки',
		],
		ctaText: 'Начать работу',
		ctaHref: CONSOLE_URL,
	},
	{
		id: 'partner',
		name: 'Партнер',
		tone: 'blue',
		price: '23',
		priceUnit: 'руб/день',
		featuresList: [
			'Работа по **White Label**',
			'Управление инстансами по API',
			'Индивидуальная техническая поддержка',
			'Выделенные серверы',
			'Посуточная тарификация',
			'Скидки от объема',
			'Кредитная линия',
		],
		ctaText: 'Начать работу',
		ctaHref: BECOME_PARTNER_URL,
	},
];
