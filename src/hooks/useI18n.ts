'use client';

import { useState, useCallback } from 'react';
import es from '@/i18n/es.json';
import en from '@/i18n/en.json';

type Lang = 'es' | 'en';
type Translations = typeof es;

const translations: Record<Lang, Translations> = { es, en };

export function useI18n(initialLang: Lang = 'es') {
	const [lang, setLang] = useState<Lang>(initialLang);

	const phrases = translations[lang];

	const toggleLanguage = useCallback(() => {
		const next: Lang = lang === 'es' ? 'en' : 'es';
		setLang(next);
		document.cookie = `lang=${next};path=/;max-age=31536000;SameSite=Lax`;
	}, [lang]);

	return { phrases, lang, toggleLanguage };
}
