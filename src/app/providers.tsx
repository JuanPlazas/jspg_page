'use client';

import { createContext, useContext, type ReactNode } from 'react';
import { useTheme } from '@/hooks/useTheme';
import { useI18n } from '@/hooks/useI18n';

type Theme = 'dark' | 'light';
type Lang = 'es' | 'en';
type ThemeContextType = ReturnType<typeof useTheme>;
type I18nContextType = ReturnType<typeof useI18n>;

const ThemeContext = createContext<ThemeContextType | null>(null);
const I18nContext = createContext<I18nContextType | null>(null);

export function useThemeContext() {
	const ctx = useContext(ThemeContext);
	if (!ctx) throw new Error('useThemeContext must be used within Providers');
	return ctx;
}

export function useI18nContext() {
	const ctx = useContext(I18nContext);
	if (!ctx) throw new Error('useI18nContext must be used within Providers');
	return ctx;
}

export function Providers({ children, initialTheme, initialLang }: { children: ReactNode; initialTheme?: Theme; initialLang?: Lang }) {
	const theme = useTheme(initialTheme);
	const i18n = useI18n(initialLang);

	return (
		<ThemeContext.Provider value={theme}>
			<I18nContext.Provider value={i18n}>{children}</I18nContext.Provider>
		</ThemeContext.Provider>
	);
}
