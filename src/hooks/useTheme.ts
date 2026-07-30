'use client';

import { useState, useEffect, useCallback } from 'react';

type Theme = 'dark' | 'light';

function getInitialTheme(): Theme {
	if (typeof window !== 'undefined') {
		const stored = localStorage.getItem('theme') as Theme | null;
		if (stored) return stored;
	}
	return 'dark';
}

export function useTheme() {
	const [theme, setTheme] = useState<Theme>(getInitialTheme);

	useEffect(() => {
		document.documentElement.classList.toggle('dark', theme === 'dark');
	}, [theme]);

	const toggleTheme = useCallback(() => {
		setTheme((prev) => {
			const next = prev === 'dark' ? 'light' : 'dark';
			localStorage.setItem('theme', next);
			return next;
		});
	}, []);

	return { theme, toggleTheme };
}
