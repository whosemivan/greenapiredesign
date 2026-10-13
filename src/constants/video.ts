export type VideoSourceListItemType = {
	id: 'youtube' | 'rutube';
	label: string;
	embedUrl: string;
};

export const VIDEO_TITLE = 'Как начать отправлять сообщения бесплатно';

export const VIDEO_SOURCES_LIST: VideoSourceListItemType[] = [
	{
		id: 'youtube',
		label: 'YouTube',
		embedUrl: 'https://www.youtube-nocookie.com/embed/e-91GrRDBVc?autoplay=1&rel=0',
	},
	{
		id: 'rutube',
		label: 'RuTube',
		embedUrl: 'https://rutube.ru/play/embed/64d23df2ce90aff6e808106cfb430228?autoplay=1',
	},
];
