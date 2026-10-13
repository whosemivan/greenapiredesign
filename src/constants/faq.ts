import { SITE_URL } from './links';

export type FaqListItemType = {
	id: string;
	question: string;
	answer: string;
	readMoreHref: string;
};

export const FAQ_LIST: FaqListItemType[] = [
	{
		id: 'send-file',
		question: 'Как отправить файл?',
		answer: 'Сервис GREEN-API позволяет отправлять файлы несколькими способами: с внешнего хранилища методом SendFileByUrl, с персонального компьютера методом SendFileByUpload, с персонального компьютера при массовых рассылках методами UploadFile + SendFileByUrl.',
		readMoreHref: `${SITE_URL}/docs/faq/how-to-send-file/`,
	},
	{
		id: 'file-types',
		question: 'Какие типы файлов поддерживает API?',
		answer: 'Файлы с расширениями jpeg, png, mp4, mp3, docx, pdf и т.д. успешно отправляются и принимаются через API, также на всех устройствах отображаются корректно.',
		readMoreHref: `${SITE_URL}/docs/faq/types-of-extensions-supported-by-API/`,
	},
	{
		id: 'subscribers',
		question: 'Как определить своих подписчиков в WhatsApp*?',
		answer: 'Добавьте всех своих клиентов в свою адресную книгу на телефоне, опубликуйте любой статус и получите статистику методом GetStatusStatistic.',
		readMoreHref: `${SITE_URL}/docs/faq/how-to-identify-your-whatsapp-subscribers/`,
	},
	{
		id: 'ban-protection',
		question: 'Как защитить номер от бана?',
		answer: 'Прогревайте номер, добавляйте ключевые слова, обращайтесь по имени, добавляйте вопросы в рассылку, чтобы получать ответы от клиентов.',
		readMoreHref: `${SITE_URL}/docs/faq/how-to-protect-number-from-ban/`,
	},
	{
		id: 'chatgpt',
		question: 'Как интегрировать WhatsApp* с ChatGPT?',
		answer: 'Для интеграции с вашим любимым ИИ можете воспользоваться одной из наших библиотек: Python WhatsApp GPT Bot Library, WhatsApp GPT Bot Go Library или WhatsApp chatbot js v2 с поддержкой интеграции OpenAI GPT.',
		readMoreHref: `${SITE_URL}/docs/gpt/`,
	},
	{
		id: 'safe-mailing',
		question: 'Как делать рассылки без риска блокировки?',
		answer: 'Рассылайте сообщения только клиентам, которые добавили вас в контакты. Дайте возможность клиенту отписаться. Увеличивайте интервал между сообщениями.',
		readMoreHref: `${SITE_URL}/docs/faq/how-to-make-mailings-without-the-risk-of-blocking/`,
	},
];
