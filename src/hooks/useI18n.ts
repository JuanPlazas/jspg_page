'use client';

import { useState, useCallback } from 'react';
import es from '@/i18n/es.json';
import en from '@/i18n/en.json';

type Lang = 'es' | 'en';
type Translations = typeof es;

const translations: Record<Lang, Translations> = { es, en };

export function useI18n() {
	const [lang, setLang] = useState<Lang>('es');

	const phrases = translations[lang];

	const toggleLanguage = useCallback(() => {
		setLang((prev) => (prev === 'es' ? 'en' : 'es'));
	}, []);

	return { phrases, lang, toggleLanguage };
}
