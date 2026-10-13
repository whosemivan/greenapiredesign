import type { ThemeRegistration } from 'shiki';

export const GREEN_API_CODE_THEME: ThemeRegistration = {
	name: 'green-api-dark',
	type: 'dark',
	colors: {
		'editor.background': '#0b0d0f',
		'editor.foreground': '#e2e2e8e6',
	},
	settings: [
		{
			settings: { foreground: '#e2e2e8e6' },
		},
		{
			scope: ['comment', 'punctuation.definition.comment'],
			settings: { foreground: '#4a5a51' },
		},
		{
			scope: [
				'keyword',
				'storage',
				'storage.type',
				'keyword.control',
				'keyword.operator.new',
				'support.function.builtin',
			],
			settings: { foreground: '#a855f7', fontStyle: 'bold' },
		},
		{
			scope: ['string', 'string.quoted', 'punctuation.definition.string'],
			settings: { foreground: '#4edea3' },
		},
		{
			scope: ['constant.numeric', 'constant.language', 'support.type.property-name', 'variable.parameter'],
			settings: { foreground: '#b3c5ff' },
		},
		{
			scope: ['entity.name.function', 'support.function', 'meta.function-call'],
			settings: { foreground: '#dae1ff' },
		},
		{
			scope: ['entity.name.type', 'entity.name.class', 'support.class', 'entity.name.namespace'],
			settings: { foreground: '#ffb693' },
		},
	],
};
