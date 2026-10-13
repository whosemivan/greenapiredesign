import { useEffect, useState } from 'react';

const COPIED_STATE_DURATION_MS = 2000;

export const useCopyToClipboard = () => {
	const [isCopied, setIsCopied] = useState(false);
	const [hasError, setHasError] = useState(false);

	useEffect(() => {
		if (!isCopied && !hasError) {
			return;
		}

		const timeoutId = window.setTimeout(() => {
			setIsCopied(false);
			setHasError(false);
		}, COPIED_STATE_DURATION_MS);

		return () => window.clearTimeout(timeoutId);
	}, [isCopied, hasError]);

	const copy = (text: string) => {
		navigator.clipboard
			.writeText(text)
			.then(() => setIsCopied(true))
			.catch((error) => {
				console.error(error);
				setHasError(true);
			});
	};

	return { copy, isCopied, hasError };
};
