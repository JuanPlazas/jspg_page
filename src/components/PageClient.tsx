'use client';

import { useI18nContext } from '@/app/providers';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function PageClient() {
	const { phrases } = useI18nContext();

	return (
		<>
			<Hero phrases={phrases} />
			<About phrases={phrases} />
			<Projects />
			<Contact phrases={phrases} />
			<Footer phrases={phrases} />
		</>
	);
}
