import { useEffect, type RefObject } from 'react';

export const useClickOutside = (ref: RefObject<HTMLElement | null>, onOutside: () => void, isActive = true) => {
	useEffect(() => {
		if (!isActive) {
			return;
		}

		const handlePointerDown = (event: PointerEvent) => {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				onOutside();
			}
		};

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				onOutside();
			}
		};

		document.addEventListener('pointerdown', handlePointerDown);
		document.addEventListener('keydown', handleKeyDown);

		return () => {
			document.removeEventListener('pointerdown', handlePointerDown);
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, [ref, onOutside, isActive]);
};
