'use client';

import { useState, useCallback } from 'react';

type Theme = 'dark' | 'light';

export function useTheme(initialTheme: Theme = 'dark') {
	const [theme, setTheme] = useState<Theme>(initialTheme);

	const toggleTheme = useCallback(() => {
		const next: Theme = theme === 'dark' ? 'light' : 'dark';
		setTheme(next);
		document.cookie = `theme=${next};path=/;max-age=31536000;SameSite=Lax`;
		document.documentElement.classList.toggle('dark', next === 'dark');
	}, [theme]);

	return { theme, toggleTheme };
}
