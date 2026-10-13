export type TextSegmentType = {
	text: string;
	isHighlighted: boolean;
};

const HIGHLIGHT_PATTERN = /(\*\*[^*]+\*\*)/g;

// Разбор **жирного** текста без dangerouslySetInnerHTML
export const splitHighlightedText = (value: string): TextSegmentType[] => {
	return value
		.split(HIGHLIGHT_PATTERN)
		.filter(Boolean)
		.map((part) => {
			const isHighlighted = part.startsWith('**') && part.endsWith('**');

			return {
				text: isHighlighted ? part.slice(2, -2) : part,
				isHighlighted,
			};
		});
};
