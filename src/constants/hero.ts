export const SERVICE_STATUS_TEXT = 'SLA 100% · Все системы работают';

// Длительность показа каждого названия задана в Hero.module.scss
export const ROTATING_API_NAMES_LIST = ['WhatsApp API', 'Telegram API', 'MAX API'];

export const HERO_STATS_LIST = [
	{ id: 'free', value: '0 ₽', label: 'Тариф «Разработчик»', isAccent: true },
	{ id: 'files', value: '100 МБ', label: 'Размер файлов' },
	{ id: 'checks', value: '30 000', label: 'Проверок номеров' },
	{ id: 'since', value: 'с 2015', label: 'На рынке', isAccent: true },
];

export type TerminalTokenType = {
	text: string;
	kind?: 'command' | 'url' | 'string' | 'key' | 'value' | 'comment';
};

export const TERMINAL_REQUEST_LINES: TerminalTokenType[][] = [
	[{ text: 'curl', kind: 'command' }, { text: ' -X POST \\' }],
	[
		{ text: '  https://api.green-api.com/waInstance1101000001/sendMessage/d75b3a66...', kind: 'url' },
		{ text: ' \\' },
	],
	[{ text: '  -H ' }, { text: "'Content-Type: application/json'", kind: 'string' }, { text: ' \\' }],
	[{ text: "  -d '{" }],
	[
		{ text: '    "chatId"', kind: 'key' },
		{ text: ': ' },
		{ text: '"79876543210@c.us"', kind: 'string' },
		{ text: ',' },
	],
	[
		{ text: '    "message"', kind: 'key' },
		{ text: ': ' },
		{ text: '"Ваш заказ собран и готов к выдаче"', kind: 'value' },
	],
	[{ text: "  }'" }],
];

export const TERMINAL_RESPONSE_LINES: TerminalTokenType[][] = [
	[{ text: '// Ответ', kind: 'comment' }],
	[{ text: '{' }],
	[{ text: '  "idMessage"', kind: 'key' }, { text: ': ' }, { text: '"3EB0C767D097B7C7C030"', kind: 'string' }],
	[{ text: '}' }],
];

export const CHAT_PREVIEW = {
	botName: 'GREEN-API',
	botInitials: 'GA',
	incomingMessage: 'Добрый день! Где забрать заказ?',
	outgoingMessage: 'Ваш заказ собран и готов к выдаче',
	time: '14:28',
	featureTitle: 'HTTP API и вебхуки',
	featureText: 'Отправка и получение сообщений',
};
